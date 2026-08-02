import Phaser from "phaser";

import BootScene from "./scenes/BootScene";
import MatchScene from "./scenes/MatchScene";

import GameConfig from "./config/GameConfig";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,

    parent: "app",

    width: GameConfig.WIDTH,
    height: GameConfig.HEIGHT,

    backgroundColor: GameConfig.BACKGROUND_COLOR,

    physics: {
        default: "arcade",
        arcade: {
            debug: GameConfig.DEBUG
        }
    },

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: [
        BootScene,
        MatchScene
    ]
};

new Phaser.Game(config);