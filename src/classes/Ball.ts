export class Ball {
    left: number;
    bottom: number;
    ballStyles: CSSStyleDeclaration | null;
    ballWidth: number;
    ball: HTMLSpanElement | null;
    container: HTMLDivElement;
    containerWidth: number;
    halfBallWidth: number;

    constructor() {
        this.container = document.querySelector('.container') as HTMLDivElement;
        this.containerWidth = 500;
        this.ball = null;
        this.ballWidth = 20;
        this.halfBallWidth = this.ballWidth / 2;
        this.left = 0;
        this.bottom = 20;
        this.ballStyles = null;
        this.implementBall();
    }

    implementBall() {
        const ball = document.createElement('span') as HTMLSpanElement;
        ball.classList.add('ball');
        ball.id = 'ball';
        this.container.appendChild(ball);
        this.ball = ball;
        this.computeStyles();
    }

    computeStyles() {
        if (!this.ball) return;
        this.ballStyles = getComputedStyle(this.ball);
        this.left = +(this.ballStyles.getPropertyValue('left').replace('px', ''));
        this.bottom = +(this.ballStyles.getPropertyValue('bottom').replace('px', ''));
        console.log(this.left, this.bottom);
    }

    reposition() {
        if (!this.ball) return;

        const left = this.containerWidth / 2;
        this.ball.style.left = `${left}px`;
        this.left = left;

        const bottom = 20;
        this.ball.style.bottom = `${bottom}px`;
        this.bottom = bottom;
    }
}