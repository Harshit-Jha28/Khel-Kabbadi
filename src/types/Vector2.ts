export default class Vector2 {
    public x: number;
    public y: number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    public set(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    public length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public normalize(): Vector2 {
        const len = this.length();

        if (len > 0) {
            this.x /= len;
            this.y /= len;
        }

        return this;
    }

    public clone(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    public reset(): void {
        this.x = 0;
        this.y = 0;
    }
}