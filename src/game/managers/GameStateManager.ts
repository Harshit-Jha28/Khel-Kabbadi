import GameState from "../state/GameState";
import type { GameState as GameStateType } from "../state/GameState";

export default class GameStateManager {

    private currentState: GameStateType;

    constructor() {

        this.currentState = GameState.BOOT;

    }

    public getState(): GameStateType {

        return this.currentState;

    }

    public setState(state: GameStateType): void {

        this.currentState = state;

    }
    public togglePause(): void {

        if (this.currentState === GameState.PAUSED) {

            this.currentState = GameState.MATCH;

        } else if (this.currentState === GameState.MATCH) {

            this.currentState = GameState.PAUSED;

        }

    }

    public is(state: GameStateType): boolean {

        return this.currentState === state;

    }

}