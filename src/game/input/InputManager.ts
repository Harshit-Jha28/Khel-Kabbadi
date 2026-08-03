import Phaser from "phaser";
import type MovementInput from "../types/MovementInput";

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

    public getMovement(): MovementInput {

        return {

            forward:
                Number(this.keys.right.isDown) -
                Number(this.keys.left.isDown),

            sideways:
                Number(this.keys.down.isDown) -
                Number(this.keys.up.isDown)

        };

    }

}