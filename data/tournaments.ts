import {ITournament, ITournamentLevel, ITrainerInfo} from "../store/shared/models/Tournament";

export const trainers: Record<number, ITrainerInfo> =
    {
        //Little Cup Trainer 01
        1: {
            id: 1,
            name: 'Dummy data 1',
            initialDialog: "Dummy data",
            image: '',
            pokemons: [{variety: 16, level: 3}, {variety: 19, level: 5}, {variety: 52, level: 3}, {variety: 16, level: 3}, {variety: 19, level: 5}, {variety: 52, level: 3}],
        },
        2: {
            id: 2,
            name: 'Dummy data 2',
            initialDialog: "Dummy data",
            image: '',
            pokemons: [{variety: 16, level: 3}, {variety: 19, level: 5}, {variety: 52, level: 3}, {variety: 16, level: 3}, {variety: 19, level: 5}, {variety: 52, level: 3}],
        },
    }

export const tournamentLevels: Record<number, ITournamentLevel> =
    {
        //Pokémon Stadium has 4 levels for each cup, but here I'll add just one
        1: {
            id: 1,
            name: 'LITTLE CUP POKéBALL LEVEL',
            image: '',
            battles: [trainers[1], trainers[2]]
        },
    }

export const tournaments: Record<number, ITournament> =
    {
        0: {
            id: 0,
            title: "NO TOURNAMENT SELECTED",
            subTitle: "",
            description: "",
            levels: [],
            pokemonAvailable: [{variety: 1, level: 5}, {variety: 4, level: 5}, {variety: 7, level: 5}, {variety: 10, level: 5}, {variety: 13, level: 5}, {variety: 14, level: 5}],
            maxLevel: 5,
        },
        1: {
            id: 1,
            title: "LITTLE CUP",
            subTitle: "L5 only",
            description: "A tournament only to L5 POKéMON. Your true abilities may become apparent.",
            levels: [tournamentLevels[1]],
            pokemonAvailable: [{variety: 1, level: 5}, {variety: 4, level: 5}, {variety: 7, level: 5}, {variety: 10, level: 5}, {variety: 13, level: 5}, {variety: 14, level: 5}],
            maxLevel: 5,
        },
        2: {
            id: 2,
            title: "CHALLENGE CUP",
            subTitle: "",
            description: "Battle in this CUP tournament using a preselected team. Can you handle lots od different kinds of POKéMON?",
            levels: [tournamentLevels[1]],
            pokemonAvailable: [{variety: 1, level: 5}, {variety: 4, level: 5}, {variety: 7, level: 5}, {variety: 10, level: 5}, {variety: 13, level: 5}, {variety: 14, level: 5}],
            maxLevel: 5,
        },
        3: {
            id: 3,
            title: "POKé CUP",
            subTitle: "L50 ~ 55",
            description: "The official POKéMON League Tournament. Hone your skills to become the champ!",
            levels: [tournamentLevels[1]],
            pokemonAvailable: [{variety: 1, level: 5}, {variety: 4, level: 5}, {variety: 7, level: 5}, {variety: 10, level: 5}, {variety: 13, level: 5}, {variety: 14, level: 5}],
            maxLevel: 5,
        },
        4: {
            id: 4,
            title: "PRIME CUP",
            subTitle: "L1 ~ 100",
            description: "The ultimate tournament without level restrictions. Let it all hang out!",
            levels: [tournamentLevels[1]],
            pokemonAvailable: [{variety: 1, level: 5}, {variety: 4, level: 5}, {variety: 7, level: 5}, {variety: 10, level: 5}, {variety: 13, level: 5}, {variety: 14, level: 5}],
            maxLevel: 5,
        },
    }


