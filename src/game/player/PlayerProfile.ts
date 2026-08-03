import type PlayerAttributes from "./PlayerAttributes";
import type { PlayerRole } from "./PlayerRole";

export default interface PlayerProfile {

    // Unique identifier
    id: number;

    // Identity
    firstName: string;
    lastName: string;

    // Career Information
    age: number;
    country: string;

    // Physical Information
    height: number;      // centimeters
    weight: number;      // kilograms

    // Team Information
    jerseyNumber: number;

    // Gameplay
    role: PlayerRole;

    // Career Progression
    experience: number;
    reputation: number;
    marketValue: number;

    // Core Attributes
    attributes: PlayerAttributes;

}