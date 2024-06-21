export class Paddle {
    paddleLeft: number;
    paddleSpeed: number;
    paddleStyles: CSSStyleDeclaration | null;
    paddle: HTMLDivElement | null;
    width: number;
    container: HTMLDivElement;
    containerWidth: number;
    halfWidth: number;
    isDragging: boolean = false;
    dragOffset: number = 0;

    constructor() {
        this.container = document.querySelector('.container') as HTMLDivElement;
        this.containerWidth = 500;
        this.paddle = null;
        this.width = 80;
        this.halfWidth = this.width / 2;
        this.paddleLeft = 0;
        this.paddleStyles = null;
        this.paddleSpeed = 10;

        this.implementPaddle();

        // this.startPaddle();
    }

    implementPaddle() {
        const paddle = document.createElement('div') as HTMLDivElement;
        paddle.classList.add('paddle');
        paddle.id = 'paddle';
        this.container.appendChild(paddle);
        this.paddle = paddle;
        this.paddleStyles = getComputedStyle(paddle) as CSSStyleDeclaration;
        this.paddleLeft = +(this.paddleStyles.getPropertyValue('left').replace('px', ''));

        this.startPaddle();
    }

    startPaddle(): void { 
        document.addEventListener('keydown', (event) => {
            if (!this.paddle || !this.paddleLeft) return;

            if (event.key === 'ArrowLeft' && this.paddleLeft > 40) {
                const n = this.paddleLeft - this.paddleSpeed;
                this.paddle.style.left = `${n}px`;
                this.paddleLeft = n;
            }
            else if (event.key === 'ArrowRight' && this.paddleLeft < 460) {
                const n = this.paddleLeft + this.paddleSpeed;
                this.paddle.style.left = `${n}px`;
                this.paddleLeft = n;
            }
        });

        if (this.paddle) {
            this.paddle.addEventListener('mousedown', (event) => {
                this.isDragging = true;
                this.dragOffset = event.clientX - this.paddleLeft;
            });

            document.addEventListener('mousemove', (event) => {
                if (this.isDragging && this.paddle) {
                    const newLeft = event.clientX - this.dragOffset;
                    if (newLeft > 40 && newLeft < 460) {
                        this.paddle.style.left = `${newLeft}px`;
                        this.paddleLeft = newLeft;
                    }
                }
            });

            document.addEventListener('mouseup', () => {
                this.isDragging = false;
            });
        }
    }

    reposition() {
        if (!this.paddle) return;
        const position = this.containerWidth / 2;
        this.paddle.style.left = `${position}px`;
        this.paddleLeft = position;
    }

    freeze() {
        this.paddle = null;
    }

    unfreeze() {
        this.paddle = document.querySelector('#paddle') as HTMLDivElement;
    }
}