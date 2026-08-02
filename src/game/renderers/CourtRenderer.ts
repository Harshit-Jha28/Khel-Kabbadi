import Phaser from "phaser";
import CourtConfig from "../config/CourtConfig";
import GameConfig from "../config/GameConfig";

export default class CourtRenderer {

    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public render(): void {

        const g = this.scene.add.graphics();

        const courtX = (GameConfig.WIDTH - CourtConfig.WIDTH) / 2;
        const courtY = (GameConfig.HEIGHT - CourtConfig.HEIGHT) / 2;

        // Background
        g.fillStyle(CourtConfig.BACKGROUND_COLOR);
        g.fillRect(0, 0, GameConfig.WIDTH, GameConfig.HEIGHT);

        // Court
        g.fillStyle(CourtConfig.COURT_COLOR);
        g.fillRect(
            courtX,
            courtY,
            CourtConfig.WIDTH,
            CourtConfig.HEIGHT
        );

        // Top Lobby
        g.fillStyle(CourtConfig.LOBBY_COLOR);
        g.fillRect(
            courtX,
            courtY - CourtConfig.LOBBY_HEIGHT,
            CourtConfig.WIDTH,
            CourtConfig.LOBBY_HEIGHT
        );

        // Bottom Lobby
        g.fillRect(
            courtX,
            courtY + CourtConfig.HEIGHT,
            CourtConfig.WIDTH,
            CourtConfig.LOBBY_HEIGHT
        );

        // White lines
        g.lineStyle(
            CourtConfig.LINE_WIDTH,
            CourtConfig.LINE_COLOR
        );

        // Border
        g.strokeRect(
            courtX,
            courtY,
            CourtConfig.WIDTH,
            CourtConfig.HEIGHT
        );

        // Mid Line
        const midX = courtX + CourtConfig.WIDTH / 2;

        g.lineBetween(
            midX,
            courtY,
            midX,
            courtY + CourtConfig.HEIGHT
        );

        // Left Baulk
        const leftBaulk =
            courtX + CourtConfig.WIDTH * CourtConfig.BAULK_OFFSET;

        g.lineBetween(
            leftBaulk,
            courtY,
            leftBaulk,
            courtY + CourtConfig.HEIGHT
        );

        // Right Baulk
        const rightBaulk =
            courtX + CourtConfig.WIDTH * (1 - CourtConfig.BAULK_OFFSET);

        g.lineBetween(
            rightBaulk,
            courtY,
            rightBaulk,
            courtY + CourtConfig.HEIGHT
        );

        // Left Bonus
        const leftBonus =
            courtX + CourtConfig.WIDTH * CourtConfig.BONUS_OFFSET;

        g.lineBetween(
            leftBonus,
            courtY,
            leftBonus,
            courtY + CourtConfig.HEIGHT
        );

        // Right Bonus
        const rightBonus =
            courtX + CourtConfig.WIDTH * (1 - CourtConfig.BONUS_OFFSET);

        g.lineBetween(
            rightBonus,
            courtY,
            rightBonus,
            courtY + CourtConfig.HEIGHT
        );
    }
}