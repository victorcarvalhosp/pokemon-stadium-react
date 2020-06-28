import {IPokemon} from "../shared/models/Pokemon";
import {TournamentTeam} from "../shared/models/TournamentTeam";

export interface GlobalState {
    turnedOn: Readonly<boolean>,
    showContent: Readonly<boolean>,
    actualScreen: Readonly<GameScreen>,
    activeTournament: Readonly<number>
    activeTournamentTeam: Readonly<TournamentTeam>
}

export enum GameScreen {
    None = 'NONE',
    Intro = 'Intro',
    Title = 'Title',
    MainMenu = 'MainMenu',
    StadiumMenu = 'StadiumMenu',
    SelectTeamTournament = 'SelectTeamTournament',
}
