import Player from "../objects/Player";
import InputManager from "../input/InputManager";

export default class PlayerController {

    private player: Player;
    private input: InputManager;

    constructor(player: Player, input: InputManager) {
        this.player = player;
        this.input = input;
    }

    public update(): void {

        const direction = this.input.getMovement();

        this.player.move(direction);

    }

}