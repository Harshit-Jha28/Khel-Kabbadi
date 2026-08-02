import Phaser from "phaser";

export default class MatchScene extends Phaser.Scene {

    constructor() {
        super("MatchScene");
    }

    create(): void {

        this.cameras.main.setBackgroundColor("#1b4d9b");

        this.add.text(
            40,
            40,
            "Kabaddi Engine v1",
            {
                fontSize: "42px",
                color: "#ffffff"
            }
        );

    }

}