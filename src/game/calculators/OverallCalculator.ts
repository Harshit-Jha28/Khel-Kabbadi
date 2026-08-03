import type PlayerAttributes from "../player/PlayerAttributes";
import type { PlayerRole } from "../player/PlayerRole";
import RoleWeights from "./RoleWeights";

export default class OverallCalculator {

    public static calculate(
        role: PlayerRole,
        attributes: PlayerAttributes
    ): number {

        const weights = RoleWeights[role];

        let weightedSum = 0;
        let totalWeight = 0;

        for (const key of Object.keys(weights) as (keyof PlayerAttributes)[]) {

            const weight = weights[key];
            const value = attributes[key];

            weightedSum += value * weight;
            totalWeight += weight;

        }

        if (totalWeight === 0) {
            return 0;
        }

        return Math.round(weightedSum / totalWeight);

    }

}