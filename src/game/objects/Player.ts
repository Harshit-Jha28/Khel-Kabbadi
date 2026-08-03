import Phaser from "phaser";

import Vector2 from "../types/Vector2";
import MovementComponent from "../components/MovementComponent";

export default class Player extends Phaser.Physics.Arcade.Sprite {

    private movement: MovementComponent;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number
    ) {
        super(scene, x, y, "player");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setDepth(10);

        const body = this.body as Phaser.Physics.Arcade.Body;

        this.movement = new MovementComponent(body);
    }

    public update(
        direction: Vector2,
        delta: number
    ): void {

        this.movement.update(direction, delta);

    }

}