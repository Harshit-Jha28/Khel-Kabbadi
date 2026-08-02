import Phaser from "phaser";
import PlayerConstants from "../constants/PlayerConstants";
import Vector2 from "../types/Vector2";

export default class MovementComponent {

    private body: Phaser.Physics.Arcade.Body;

    constructor(body: Phaser.Physics.Arcade.Body) {
        this.body = body;
    }

    public move(direction: Vector2): void {

        const velocityX =
            direction.x * PlayerConstants.MAX_SPEED;

        const velocityY =
            direction.y * PlayerConstants.MAX_SPEED;

        this.body.setVelocity(
            velocityX,
            velocityY
        );

    }

}