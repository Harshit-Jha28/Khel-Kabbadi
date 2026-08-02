import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {

    constructor() {
        super("BootScene");
    }

    preload(): void {

        this.load.image(
            "player",
            "src/assets/sprites/player.png"
        );

    }

    create(): void {

        this.scene.start("MatchScene");

    }

}