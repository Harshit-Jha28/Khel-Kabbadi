import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {

    constructor() {
        super("BootScene");
    }

    preload(): void {

    }

    create(): void {

        this.scene.start("MatchScene");

    }

}