const MatchState = {

    NOT_STARTED: "NOT_STARTED",

    FIRST_HALF: "FIRST_HALF",

    HALF_TIME: "HALF_TIME",

    SECOND_HALF: "SECOND_HALF",

    FINISHED: "FINISHED",

    RESULT: "RESULT"

} as const;

export default MatchState;

export type MatchState =
    (typeof MatchState)[keyof typeof MatchState];