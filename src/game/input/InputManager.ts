import Phaser from "phaser";
import Vector2 from "../types/Vector2";

export default class InputManager {

    private scene: Phaser.Scene;

    private keys!: {
        up: Phaser.Input.Keyboard.Key;
        down: Phaser.Input.Keyboard.Key;
        left: Phaser.Input.Keyboard.Key;
        right: Phaser.Input.Keyboard.Key;
    };

    constructor(scene: Phaser.Scene) {

        this.scene = scene;

        this.keys = this.scene.input.keyboard!.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        }) as {
            up: Phaser.Input.Keyboard.Key;
            down: Phaser.Input.Keyboard.Key;
            left: Phaser.Input.Keyboard.Key;
            right: Phaser.Input.Keyboard.Key;
        };
    }

    public getMovement(): Vector2 {

        const movement = new Vector2();

        if (this.keys.left.isDown) {
            movement.x -= 1;
        }

        if (this.keys.right.isDown) {
            movement.x += 1;
        }

        if (this.keys.up.isDown) {
            movement.y -= 1;
        }

        if (this.keys.down.isDown) {
            movement.y += 1;
        }

        return movement.normalize();
    }
}