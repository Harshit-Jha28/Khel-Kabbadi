import PlayerRole from "../player/PlayerRole";
import type PlayerAttributes from "../player/PlayerAttributes";
import type { PlayerRole as PlayerRoleType } from "../player/PlayerRole";

type RoleWeightMap = {
    [K in PlayerRoleType]: Record<keyof PlayerAttributes, number>;
};

const RoleWeights: RoleWeightMap = {

    [PlayerRole.RAIDER]: {

        speed: 0.15,
        acceleration: 0.15,
        agility: 0.20,
        stamina: 0.10,
        strength: 0.05,
        balance: 0.10,
        raidSkill: 0.20,
        tackleSkill: 0.00,
        awareness: 0.03,
        discipline: 0.01,
        confidence: 0.01,
        

    },

    [PlayerRole.LEFT_CORNER]: {

        speed: 0.05,
        acceleration: 0.05,
        agility: 0.10,
        stamina: 0.10,
        strength: 0.20,
        balance: 0.15,
        raidSkill: 0.00,
        tackleSkill: 0.25,
        awareness: 0.05,
        discipline: 0.03,
        confidence: 0.02,
       

    },

    [PlayerRole.RIGHT_CORNER]: {

        speed: 0.05,
        acceleration: 0.05,
        agility: 0.10,
        stamina: 0.10,
        strength: 0.20,
        balance: 0.15,
        raidSkill: 0.00,
        tackleSkill: 0.25,
        awareness: 0.05,
        discipline: 0.03,
        confidence: 0.02,

    },

    [PlayerRole.LEFT_COVER]: {

        speed: 0.10,
        acceleration: 0.10,
        agility: 0.15,
        stamina: 0.15,
        strength: 0.15,
        balance: 0.10,
        raidSkill: 0.05,
        tackleSkill: 0.20,
        awareness: 0.05,
        discipline: 0.03,
        confidence: 0.02,
       

    },

    [PlayerRole.RIGHT_COVER]: {

        speed: 0.10,
        acceleration: 0.10,
        agility: 0.15,
        stamina: 0.15,
        strength: 0.15,
        balance: 0.10,
        raidSkill: 0.05,
        tackleSkill: 0.20,
        awareness: 0.05,
        discipline: 0.03,
        confidence: 0.02,
        

    },

    [PlayerRole.ALL_ROUNDER]: {

        speed: 0.10,
        acceleration: 0.10,
        agility: 0.10,
        stamina: 0.10,
        strength: 0.10,
        balance: 0.10,
        raidSkill: 0.15,
        tackleSkill: 0.15,
        awareness: 0.05,
        discipline: 0.03,
        confidence: 0.02,
       

    }

};

export default RoleWeights;