const GameState = {

    BOOT: "BOOT",

    MAIN_MENU: "MAIN_MENU",

    MATCH_LOADING: "MATCH_LOADING",

    MATCH: "MATCH",

    PAUSED: "PAUSED",

    SETTINGS: "SETTINGS"

} as const;

export default GameState;

export type GameState =
    (typeof GameState)[keyof typeof GameState];