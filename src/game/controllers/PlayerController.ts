import Player from "../objects/Player";
import InputManager from "../input/InputManager";
import TeamSide from "../enums/TeamSide";
import type { TeamSide as TeamSideType } from "../enums/TeamSide";
import Vector2 from "../types/Vector2";

export default class PlayerController {

    private player: Player;
    private input: InputManager;
    private teamSide: TeamSideType;

   constructor(
    player: Player,
    input: InputManager,
    teamSide: TeamSideType
) {
        this.player = player;
        this.input = input;
        this.teamSide = teamSide;
    }

    public update(delta: number): void {

        const movement = this.input.getMovement();

        const direction = new Vector2();

        if (this.teamSide === TeamSide.LEFT) {

            direction.x = movement.forward;
            direction.y = movement.sideways;

        } else {

            direction.x = -movement.forward;
            direction.y = -movement.sideways;

        }

        direction.normalize();

        this.player.update(
            direction,
            delta
        );
    }
}