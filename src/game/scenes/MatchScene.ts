import Phaser from "phaser";
import CourtRenderer from "../renderers/CourtRenderer";

export default class MatchScene extends Phaser.Scene {

    constructor() {
        super("MatchScene");
    }

    create(): void {

        const court = new CourtRenderer(this);

        court.render();

        this.add.text(
            30,
            30,
            "Khel-Kabbadi Prototype",
            {
                fontSize: "32px",
                color: "#ffffff"
            }
        );
    }

}