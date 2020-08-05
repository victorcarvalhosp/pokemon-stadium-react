import { IPokemon } from "../shared/models/Pokemon";
import { TournamentTeam } from "../shared/models/TournamentTeam";

export interface GlobalState {
  turnedOn: Readonly<boolean>;
  showContent: Readonly<boolean>;
  actualScreen: Readonly<GameScreen>;
  activeTournament: Readonly<number>;
  activeTournamentTeam: Readonly<TournamentTeam>;
  battlesWonTournamentLevel: Readonly<number>;
  p1SelectedPokemonsBattle: Readonly<IPokemon[]>;
  p2SelectedPokemonsBattle: Readonly<IPokemon[]>;
}

export enum GameScreen {
  None = "NONE",
  Intro = "Intro",
  Title = "Title",
  MainMenu = "MainMenu",
  StadiumMenu = "StadiumMenu",
  SelectTeamTournament = "SelectTeamTournament",
  BeforeSelectTeamBattle = "BeforeSelectTeamBattle",
  SelectTeamBattle = "SelectTeamBattle",
}
