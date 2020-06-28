import {IPokemonDetailsToRandomGeneration} from "../store/shared/models/Tournament";
import {IPokemon} from "../store/shared/models/Pokemon";
import {IPokemonVariety} from "../store/shared/models/PokemonVariety";
import {pokemonVarieties} from "../data/pokemon-varieties";
import {pokemonSpecies} from "../data/pokemon-species";
import {getRandomInt, makeid} from "./utils";


export class PokemonHelper {

    static generatePokemonWithRandomAttributes(pokemonVarietyId: number, details?: IPokemonDetailsToRandomGeneration): IPokemon {
        const variety: IPokemonVariety = pokemonVarieties[pokemonVarietyId];
        const {ivHp, ivAtk, ivDef, ivSpeed} = this.generateIvs();
        let level = 1;
        let gigantamax = false;
        if (details) {
            if (details.level) {
                level = details.level;
            }
            if (details.gigantamax) {
                gigantamax = details.gigantamax;
            }
        }
        const {hp, atk, def, speed} = this.calculatePokemonStats(variety, {
            ivHp,
            ivAtk,
            ivDef,
            ivSpeed
        }, level, gigantamax);
        //TODO Generate random attributes as id, gender, stats, level, iv
        return {
            id: makeid(),
            name: pokemonSpecies[variety.specie].name,
            variety: variety.id,
            level: level,
            date: new Date(),
            hp: hp,
            actualHp: hp,
            atk: atk,
            def: def,
            speed: speed,
            ivHp: ivHp,
            ivAtk: ivAtk,
            ivDef: ivDef,
            ivSpeed: ivSpeed,
            gigantamax: gigantamax,
            moves: this.getRandomMoves(variety)
        }

    }

    private static calculatePokemonStats(pokemon: IPokemonVariety, ivs: { ivHp: number; ivAtk: number; ivDef: number; ivSpeed: number }, level: number, gigantamax?: boolean): { hp: number, atk: number, def: number, speed: number } {
        /* Simplified version of pokémon stats formulas => More details here: https://www.dragonflycave.com/mechanics/stats*/
        const hp: number = this.calculateHpStat(pokemon.baseHp, ivs.ivHp, level);
        const atk: number = this.calculateStat(pokemon.baseAtk, ivs.ivAtk, level);
        const def: number = this.calculateStat(pokemon.baseDef, ivs.ivDef, level);
        const speed: number = this.calculateStat(pokemon.baseSpeed, ivs.ivSpeed, level);

        return {hp: gigantamax ? hp * 2 : hp, atk: atk, def: gigantamax ? def * 1.2 : def, speed: speed};
    }

    private static calculateHpStat(baseHpStat: number, ivHp: number, level: number) {
        return Math.floor(((2 * baseHpStat + ivHp) * level / 100 + level + 10) * 2);
    }

    private static calculateStat(baseStat: number, iv: number, level: number) {
        return Math.floor(Math.floor((2 * baseStat + iv) * level / 100 + 5) * 1);
    }

    private static generateIvs() {
        return {
            ivHp: getRandomInt(0, 31),
            ivAtk: getRandomInt(0, 31),
            ivDef: getRandomInt(0, 31),
            ivSpeed: getRandomInt(0, 31)
        };
    }

    private static getRandomMoves(variety: IPokemonVariety): number[] {
        const moves: number[] = []
        moves.push(variety.moves[getRandomInt(0, variety.moves.length - 1)]);
        if (variety.moves.length > 1) {
            while (moves.length < 2) {
                const nextRandomMove = getRandomInt(0, variety.moves.length - 1);
                if (variety.moves.filter(v => v === nextRandomMove).length === 0) {
                    moves.push(variety.moves[nextRandomMove]);
                }
            }
        }
        return moves;
    }
}
