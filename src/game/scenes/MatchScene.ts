import Phaser from "phaser";

import CourtRenderer from "../renderers/CourtRenderer";
import Player from "../objects/Player";
import InputManager from "../input/InputManager";
import PlayerController from "../controllers/PlayerController";
import TeamSide from "../enums/TeamSide";

export default class MatchScene extends Phaser.Scene {

    private controller!: PlayerController;

    constructor() {
        super("MatchScene");
    }

    create(): void {

        const renderer = new CourtRenderer(this);
        renderer.render();

        const player = new Player(
            this,
            960,
            540
        );

        const input = new InputManager(this);

        this.controller = new PlayerController(
            player,
            input,
            TeamSide.LEFT
        );

    } // <-- You were missing this

    update(
        _time: number,
        delta: number
    ): void {

        this.controller.update(delta);

    }

}