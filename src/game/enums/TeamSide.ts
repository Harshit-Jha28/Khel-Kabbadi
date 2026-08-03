const TeamSide = {
    LEFT: "LEFT",
    RIGHT: "RIGHT",
} as const;

export default TeamSide;

export type TeamSide =
    (typeof TeamSide)[keyof typeof TeamSide];