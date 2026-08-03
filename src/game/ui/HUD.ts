import Phaser from "phaser";

export default class HUD {

    private scene: Phaser.Scene;

    private scoreText!: Phaser.GameObjects.Text;
    private matchTimeText!: Phaser.GameObjects.Text;
    private raidTimerText!: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene) {

        this.scene = scene;

    }

    public create(): void {

        this.scoreText = this.scene.add.text(
            20,
            20,
            "0 - 0",
            {
                fontSize: "32px",
                color: "#ffffff",
                fontFamily: "Arial",
                fontStyle: "bold"
            }
        );

        this.matchTimeText = this.scene.add.text(
            560,
            20,
            "20:00",
            {
                fontSize: "30px",
                color: "#ffffff",
                fontFamily: "Arial"
            }
        );

        this.raidTimerText = this.scene.add.text(
            1110,
            20,
            "30",
            {
                fontSize: "34px",
                color: "#ff4444",
                fontFamily: "Arial",
                fontStyle: "bold"
            }
        );

        // Keep HUD fixed while camera moves
        this.scoreText.setScrollFactor(0);
        this.matchTimeText.setScrollFactor(0);
        this.raidTimerText.setScrollFactor(0);

        // Draw above everything
        this.scoreText.setDepth(1000);
        this.matchTimeText.setDepth(1000);
        this.raidTimerText.setDepth(1000);

    }

}