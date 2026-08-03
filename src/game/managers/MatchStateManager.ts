import MatchState from "../states/MatchState";
import type { MatchState as MatchStateType } from "../states/MatchState";

export default class MatchStateManager {

    private currentState: MatchStateType;

    constructor() {

        this.currentState = MatchState.NOT_STARTED;

    }

    public getState(): MatchStateType {

        return this.currentState;

    }

    public setState(state: MatchStateType): void {

        this.currentState = state;

    }

    public is(state: MatchStateType): boolean {

        return this.currentState === state;

    }

}