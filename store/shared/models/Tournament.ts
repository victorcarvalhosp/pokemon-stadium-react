export interface IPokemonDetailsToRandomGeneration{
    variety: number;
    level: number;
    gigantamax?: boolean;
}

export interface ITournamentLevel {
    id: number;
    name: string;
    image: string;
    battles: ITrainerInfo[]
}

export interface ITrainerInfo {
    id: number;
    name: string;
    initialDialog: string;
    image: string;
    pokemons: IPokemonDetailsToRandomGeneration[];
}

export interface ITournament {
    id: number;
    title: string;
    subTitle: string;
    description: string;
    levels: ITournamentLevel[];
    pokemonAvailable: IPokemonDetailsToRandomGeneration[];
    maxLevel: number;
}

export class Tournament implements ITournament {
    id: number;
    title: string;
    subTitle: string;
    description: string;
    levels: ITournamentLevel[];
    pokemonAvailable: IPokemonDetailsToRandomGeneration[];
    maxLevel: number;

    constructor() {
        this.id = 0;
        this.title = "";
        this.subTitle = "";
        this.description = "";
        this.maxLevel = 100;
    }

}
