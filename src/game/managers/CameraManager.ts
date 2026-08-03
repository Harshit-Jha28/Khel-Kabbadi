import Phaser from "phaser";
import GameConfig from "../config/GameConfig";

export default class CameraManager {

    private camera: Phaser.Cameras.Scene2D.Camera;

    constructor(scene: Phaser.Scene) {

        this.camera = scene.cameras.main;

        this.camera.setBounds(
            0,
            0,
            GameConfig.WORLD_WIDTH,
            GameConfig.WORLD_HEIGHT
        );

    }

    public follow(target: Phaser.GameObjects.GameObject): void {

        this.camera.startFollow(
            target,
            true,
            0.12,
            0.12
        );

    }

    public setZoom(zoom: number): void {

        this.camera.setZoom(zoom);

    }

}