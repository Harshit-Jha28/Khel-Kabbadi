import Phaser from "phaser";
import Vector2 from "../types/Vector2";

export default class Player extends Phaser.Physics.Arcade.Sprite {

    private speed = 250;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number
    ) {

        super(scene, x, y, "player");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
    }

    public move(direction: Vector2): void {

        const body = this.body as Phaser.Physics.Arcade.Body;

        body.setVelocity(
            direction.x * this.speed,
            direction.y * this.speed
        );

    }

}