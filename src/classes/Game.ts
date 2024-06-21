import { Paddle } from "./Paddle";
import { BlockProps, Directions } from "@/interfaces/interfaces";
import { RowsArray } from "@/interfaces/interfaces";
import { Ball } from "./Ball";

export class Game {
    ball: Ball;
    topLimit: number;
    bottom: number;
    left: number;
    stoppedGame: boolean;
    blocks: BlockProps[] | null;
    blockWidth: number;
    container: HTMLDivElement;
    animationFrameId: null | number;
    ballWidth: number;
    paddle: Paddle;
    level: number;
    containerWidth: number;
    blocksBottomLimit: number | null;
    blocksTopLimit: number | null;

    constructor() {
        // ELEMENTS
        this.container = document.querySelector('#container') as HTMLDivElement;
        this.paddle = new Paddle();
        this.ball = new Ball();

        // CONTAINER VARIABLES
        this.containerWidth = 500;
        this.topLimit = 280;

        // BALL VARIABLES
        this.ballWidth = 20;
        this.bottom = this.ball.bottom;
        this.left = this.ball.left;

        // BLOCKS VARIABLES
        this.blocks = null;
        this.blockWidth = 34;
        // OTHER VARIABLES
        this.animationFrameId = null;
        this.stoppedGame = true;
        this.level = 1;
        this.blocksBottomLimit = null;
        this.blocksTopLimit = null;

        this.start();
    }

    start(): void {
        if (!this.paddle) return;

        this.paddle.unfreeze();
        this.paddle.reposition();
        this.stoppedGame = false;
        this.blocks = null;
        this.cleanUp();

        // REPOSITION BALL
        this.bottom = 20;
        this.left = this.containerWidth / 2 - (this.ballWidth / 2);

        this.ball.reposition();

        this.createRows(3,2);

        const animate = () => {
            if (this.bottom < this.topLimit && this.left > 0 && this.left < 490) {
                this.ball!.ball!.style.bottom = `${this.bottom += 1}px`;
                this.ball!.ball!.style.left = `${this.left += 2}px`;
                requestAnimationFrame(animate);
            } else {
                this.collision('RT');
            }
        }

        animate();
    }

    stop() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        this.stoppedGame = true;
        this.paddle.freeze();
    }

    cleanUp() {
        const centralizedElements = this.container.querySelectorAll('.centralized-element');
        if (centralizedElements) {
            for (let i = 0; i < centralizedElements.length; i++) {
                centralizedElements[i].remove();
            }
        }
    }

    defineBlocks(level: number): RowsArray {
        switch (level) {
            case 1: return this.createRows(3, 2);
            case 2: return this.createRows(4, 4);
        }

        return this.createRows(5, 5);
    }

    createRows(...args: number[]): RowsArray {
        const arr: RowsArray = [];
        const numArgs = args.length;
        let index = 0;

        for (let i = 0; i < numArgs; i++) {
            arr.push([]);
            for (let j = 1; j <= args[i]; j++) {
                index++;
                arr[i].push({id: `${index}`});
            }
        }

        return arr;
    }

    computeBlocksProps() {
        const blocks = document.querySelectorAll('.block');

        if (!blocks.length) return;

        const blocksArray: BlockProps[] = [];

        for (let i = 0; i < blocks.length; i++) {
            const block = blocks[i];
            const style = getComputedStyle(block);
            const bottom = +((style.getPropertyValue('bottom')).replace('px', ''));
            if (i === blocks.length - 1) this.blocksBottomLimit = bottom - 20; 
            if (i === 0) this.blocksTopLimit = bottom + this.blockWidth;
            const left = +(style.getPropertyValue('left').replace('px', ''));
            const id = blocks[i].id;

            const obj: BlockProps = { id, l: left, b: bottom };
            blocksArray.push(obj);
        }

        this.blocks = blocksArray;
    }

    collision(direction: Directions): void {
        if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
        console.log(this.left, this.bottom)

        if (this.bottom > 0 && this.left >= 490) {
            // right wall
                switch (direction) {
                    case 'RT':
                        this.move('LT')
                        break;
                    case 'RB':
                        this.move('LB')
                        break;
                }
                return;
        }
        else if (this.bottom > 0 && this.left <= 10) {
            // left wall
                switch (direction) {
                    case 'LT':
                        this.move('RT')
                        break;
                    case 'LB':
                        this.move('RB')
                        break;
                }
                return;
        }
        else if (this.bottom >= 266 || this.bottom === this.blocksBottomLimit! + 1 || this.bottom === this.blocksTopLimit! - 2) {
            // top, 
            switch (direction) {
                case 'RT':
                    console.log('RT')
                    this.move('RB')
                    break;
                case 'LT':
                    console.log('LT');
                    this.move('LB');
                    break;
                case 'RB':
                    console.log('RB')
                    this.move('RT')
                    break;
                case 'LB':
                    console.log('LB')
                    this.move('LT');
                    break;
            }
            return;
        }
        else if (this.bottom <= 0) {
            this.handleLoss();
            return;
        }
        switch (direction) {
            case 'RT':
                this.move('LT')
                break;
            case 'LT':
                this.move('RT');
                break;
            case 'RB':
                this.move('LB')
                break;
            case 'LB':
                this.move('RB');
                break;
        }
    }

    paddleCollision(direction: Directions) {
        if (this.bottom < 21 && this.bottom > 18 && (this.left > this.paddle.paddleLeft - 46) && (this.left < this.paddle.paddleLeft + 46)) {
            if (this.left < this.paddle.paddleLeft - 15) {
                console.log('left');
                this.move('LT', 2, 3);
            }
            else if (this.left >= this.paddle.paddleLeft - 15 && this.left < this.paddle.paddleLeft + 15) {
                console.log('center');
                if (direction === "LB") {
                    this.move('LT');
                } else {
                    this.move('RT');
                }
            } else {
                console.log('right')
                this.move('RT', 2, 3);
            }
            return true;
        }
        return false;
    }

    move(direction: Directions, verticalMovement: number = 2, horizontalMoviment: number = 2) {

        if (this.stoppedGame) return;

        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }

        switch (direction) {
            case 'RB':
                const rb = () => {
                    if (!this.blocks) return;

                    if (this.bottom > 0 && this.left < 490) {
                        this.ball.ball!.style.bottom = `${this.bottom -= verticalMovement}px`;
                        this.ball.ball!.style.left = `${this.left += horizontalMoviment}px`;

                        if (this.checkForBlockCollision()) {
                            return this.collision(direction);
                        }

                        if(this.paddleCollision(direction)) return;

                        this.animationFrameId = requestAnimationFrame(rb);
                    } else {
                        this.collision(direction);
                    }
                }
                rb();
                break;
            case 'LB':
                const lb = () => {
                    if (!this.blocks) return;

                    if (this.bottom > 0 && this.left > 10) {
                        this.ball.ball!.style.bottom = `${this.bottom -= verticalMovement}px`;
                        this.ball.ball!.style.left = `${this.left -= horizontalMoviment}px`;
                        
                        if (this.checkForBlockCollision()) {
                            return this.collision(direction);
                        }

                        if (this.paddleCollision(direction)) return;

                        this.animationFrameId = requestAnimationFrame(lb)
                    } else {
                        this.collision(direction)
                    }
                }
                lb();
                break;
            case 'LT':
                const lt = () => {
                    if (!this.blocks) return;

                    if (this.bottom < 280 && this.left > 10) {
                        this.ball.ball!.style.bottom = `${this.bottom += verticalMovement}px`;
                        this.ball.ball!.style.left = `${this.left -= horizontalMoviment}px`;
                        
                        if (this.checkForBlockCollision()) {
                            return this.collision(direction);
                        }

                        this.animationFrameId = requestAnimationFrame(lt)
                    } else {
                        this.collision(direction)
                    }
                }
                lt();
                break;
            case 'RT':
                const rt = () => {
                    if (!this.blocks) return;

                    if (this.bottom < 280 && this.left < 490) {
                        this.ball.ball!.style.bottom = `${this.bottom += verticalMovement}px`;
                        this.ball.ball!.style.left = `${this.left += horizontalMoviment}px`;
                        
                        if (this.checkForBlockCollision()) {
                            return this.collision(direction);
                        }

                        this.animationFrameId = requestAnimationFrame(rt);
                    } else {
                        this.collision(direction)
                    }
                }
                rt();
                break;
        }
    }

    checkForBlockCollision(): boolean {
        if (!this.blocks?.length) return false;
    
        for (let i = 0; i < this.blocks.length; i++) {
            const block = this.blocks[i];

            const blockRight = block.l + this.blockWidth;
            const blockTop = block.b + this.blockWidth;
            const ballRight = this.left - 9 + this.ballWidth;
            const ballTop = this.bottom + this.ballWidth;
    
            if (
                this.left - 9 < blockRight &&
                ballRight > block.l && 
                this.bottom < blockTop &&   
                ballTop > block.b
            ) {
                const el = this.container.querySelector(`#${block.id}`)!;
                el.classList.add('null');
                el.classList.remove('block');
                this.blocks.splice(i, 1);
                this.didWin();
                return true;
            }
        }
    
        return false;
    }

    didWin() {
        if (!this.stoppedGame && !this.blocks?.length) {
            this.stop();
            this.handleWinning();
        }
    }

    handleLoss() {
        this.stop();
        this.blocks = null;
        const p = document.createElement('p');
        p.innerText = 'PERDEU';
        p.classList.add('centralized-element');
        p.classList.add('loss-p');
        this.container.appendChild(p);

        this.level = 1;
    }

    handleWinning() {
        const p = document.createElement('p');
        p.innerText = 'VENCEU';
        p.classList.add('centralized-element');
        p.classList.add('winning-p');
        this.container.appendChild(p);

        this.level =+ 1;
    }
}

