import { IPokemon, Pokemon } from "./Pokemon";
import { makeid } from "../../../utils/utils";

export interface ITournamentTeam {
  id: string;
  pkmn1: IPokemon;
  pkmn2: IPokemon;
  pkmn3: IPokemon;
  pkmn4: IPokemon;
  pkmn5: IPokemon;
  pkmn6: IPokemon;
}

export class TournamentTeam implements ITournamentTeam {
  id: string;
  pkmn1: IPokemon;
  pkmn2: IPokemon;
  pkmn3: IPokemon;
  pkmn4: IPokemon;
  pkmn5: IPokemon;
  pkmn6: IPokemon;

  constructor() {
    this.id = makeid();
    this.pkmn1 = new Pokemon();
    this.pkmn2 = new Pokemon();
    this.pkmn3 = new Pokemon();
    this.pkmn4 = new Pokemon();
    this.pkmn5 = new Pokemon();
    this.pkmn6 = new Pokemon();
  }

  isTeamComplete = () => {
    return (
      this.pkmn1.id &&
      this.pkmn2.id &&
      this.pkmn3.id &&
      this.pkmn4.id &&
      this.pkmn5.id &&
      this.pkmn6.id
    );
  };

  setByPosition(position: number, pokemon: IPokemon) {
    console.log(position + "inside object");
    switch (position) {
      case 0: {
        this.pkmn1 = pokemon;
        break;
      }
      case 1: {
        this.pkmn2 = pokemon;
        break;
      }
      case 2: {
        this.pkmn3 = pokemon;
        break;
      }
      case 3: {
        this.pkmn4 = pokemon;
        break;
      }
      case 4: {
        this.pkmn5 = pokemon;
        break;
      }
      case 5: {
        this.pkmn6 = pokemon;
        break;
      }
    }
  }

  getByPosition(position: 0 | 1 | 2 | 3 | 4 | 5) {
    return this.asList()[position];
  }

  asList() {
    return [
      this.pkmn1,
      this.pkmn2,
      this.pkmn3,
      this.pkmn4,
      this.pkmn5,
      this.pkmn6,
    ];
  }
}
