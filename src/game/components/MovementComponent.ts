import Phaser from "phaser";

import Vector2 from "../types/Vector2";
import PlayerConstants from "../constants/PlayerConstants";

export default class MovementComponent {

    private body: Phaser.Physics.Arcade.Body;

    private velocity: Vector2;

    constructor(body: Phaser.Physics.Arcade.Body) {

        this.body = body;

        this.velocity = new Vector2();

    }

    public update(
        direction: Vector2,
        delta: number
    ): void {

        // Desired velocity
        const targetX =
            direction.x * PlayerConstants.MAX_SPEED;

        const targetY =
            direction.y * PlayerConstants.MAX_SPEED;

        // Frame-rate independent smoothing
        const alpha =
            Math.min(
                PlayerConstants.ACCELERATION * (delta / 1000),
                1
            );

        // Smoothly move current velocity toward target velocity
        this.velocity.x = Phaser.Math.Linear(
            this.velocity.x,
            targetX,
            alpha
        );

        this.velocity.y = Phaser.Math.Linear(
            this.velocity.y,
            targetY,
            alpha
        );

        this.body.setVelocity(
            this.velocity.x,
            this.velocity.y
        );

    }

}