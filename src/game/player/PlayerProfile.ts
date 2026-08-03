import type PlayerAttributes from "./PlayerAttributes";
import type { PlayerRole } from "./PlayerRole";

export default interface PlayerProfile {

    // ==========================
    // Identity
    // ==========================

    id: number;

    firstName: string;

    lastName: string;

    age: number;

    country: string;

    // ==========================
    // Physical Information
    // ==========================

    height: number;      // cm

    weight: number;      // kg

    dominantHand: "LEFT" | "RIGHT";

    // ==========================
    // Team Information
    // ==========================

    role: PlayerRole;

    jerseyNumber: number;

    // ==========================
    // Career Information
    // ==========================

    potential: number;

    experience: number;

    reputation: number;

    marketValue: number;

    // ==========================
    // Gameplay
    // ==========================

    attributes: PlayerAttributes;

}