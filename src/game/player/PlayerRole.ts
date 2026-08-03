const PlayerRole = {

    RAIDER: "RAIDER",

    LEFT_CORNER: "LEFT_CORNER",

    RIGHT_CORNER: "RIGHT_CORNER",

    LEFT_COVER: "LEFT_COVER",

    RIGHT_COVER: "RIGHT_COVER",

    ALL_ROUNDER: "ALL_ROUNDER"

} as const;

export default PlayerRole;

export type PlayerRole =
    (typeof PlayerRole)[keyof typeof PlayerRole];