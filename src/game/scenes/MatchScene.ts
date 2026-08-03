import Phaser from "phaser";

import CourtRenderer from "../renderers/CourtRenderer";
import Player from "../objects/Player";
import InputManager from "../input/InputManager";
import PlayerController from "../controllers/PlayerController";
import TeamSide from "../enums/TeamSide";
import CameraManager from "../managers/CameraManager";
import GameConfig from "../config/GameConfig";
import HUD from "../ui/HUD";
import GameStateManager from "../managers/GameStateManager";
import GameState from "../state/GameState";
import MatchStateManager from "../managers/MatchStateManager";
import MatchState from "../states/MatchState";
export default class MatchScene extends Phaser.Scene {

    private controller!: PlayerController;
    private cameraManager!: CameraManager;
    private hud!: HUD;
    private gameState!: GameStateManager;
    private matchState!: MatchStateManager;
    constructor() {
        super("MatchScene");
    }

    create(): void {
        this.physics.world.setBounds(
            0,
            0,
            GameConfig.WORLD_WIDTH,
            GameConfig.WORLD_HEIGHT
        );

        const renderer = new CourtRenderer(this);
        renderer.render();

        const player = new Player(
            this,
            GameConfig.WORLD_WIDTH / 2,
            GameConfig.WORLD_HEIGHT / 2
        );

        this.cameraManager = new CameraManager(this);
        this.cameraManager.follow(player);
        this.cameraManager.setZoom(1);

        this.hud = new HUD(this);
        this.hud.create();
        this.gameState = new GameStateManager();

        this.gameState.setState(
            GameState.MATCH
        );

        this.matchState = new MatchStateManager();

        this.matchState.setState(
            MatchState.FIRST_HALF
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

        if (this.gameState.is(GameState.MATCH)) {

            this.controller.update(delta);

        }

    }
}