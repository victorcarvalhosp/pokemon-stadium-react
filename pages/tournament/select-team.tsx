import styles from "./select-team.module.scss";
import { useEffect, useState } from "react";
import { useGlobal } from "../../store/Global/GlobalContext";
import { GameScreen } from "../../store/Global/GlobalModels";
import { setActualScreen } from "../../store/Global/GlobalActions";
import { tournaments } from "../../data/tournaments";
import TextBlueBackground from "../../components/text-blue-background/text-blue-background";
import { Overworld } from "../../components/overworld/overworld";
import { IPokemonVariety } from "../../store/shared/models/PokemonVariety";
import { IPokemon, Pokemon } from "../../store/shared/models/Pokemon";
import { PokemonHelper } from "../../utils/pokemon-helper";
import PokemonBasicInfo from "../../components/pokemon-basic-info/pokemon-basic-info";
import PokemonBasicInfoTournamentTeamSelection from "../../components/pokemon-basic-info-tournament-team-selection/pokemon-basic-info-tournament-team-selection";
import { TournamentTeam } from "../../store/shared/models/TournamentTeam";
import GameModal from "../../components/game-modal/game-modal";
import { useRouter } from "next/router";

export default function SelectTeam() {
  const globalState = useGlobal();
  const [activePos, setActivePos] = useState<number>(0);
  const router = useRouter();

  const [pokemonsAvailable, setPokemonsAvailable] = useState<IPokemon[]>([]);
  const [team, setTeam] = useState<TournamentTeam>(new TournamentTeam());
  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(
    false
  );

  useEffect(() => {
    globalState.dispatch(setActualScreen(GameScreen.SelectTeamTournament));
    const pkmns = [];
    for (const pkmnGenerate of tournaments[globalState.state.activeTournament]
      .pokemonAvailable) {
      pkmns.push(
        PokemonHelper.generatePokemonWithRandomAttributes(
          pkmnGenerate.variety,
          pkmnGenerate
        )
      );
    }
    setPokemonsAvailable(pkmns);
  }, []);

  useEffect(() => {
    console.log(team);
    if (team.isTeamComplete()) {
      setShowConfirmationModal(true);
    }
  }, [team.isTeamComplete()]);

  const selectPokemon = (pokemon: IPokemon) => {
    if (!alreadySelected(pokemon)) {
      team.setByPosition(activePos, pokemon);
      setTeam(team);
      if (activePos <= 5) {
        setActivePos(activePos + 1);
      }
    }
  };

  const alreadySelected = (pkmn: IPokemon) => {
    return (
      team.asList().filter((p) => {
        return p.id === pkmn.id;
      }).length > 0
    );
  };

  function closeModal() {
    setShowConfirmationModal(false);
  }

  const handleConfirm = () => {
    console.log("Redirect to tournament");
  };

  const handleCancel = () => {
    team.setByPosition(5, new Pokemon());
    setTeam(team);
    setActivePos(5);
    setShowConfirmationModal(false);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <div className={styles.page}>
        <div
          onClick={handleBack}
          style={{
            position: "fixed",
            left: "4px",
            paddingLeft: "0px",
            top: "12px",
            zIndex: 3,
          }}
        >
          <img src="/images/back-arrow.svg" style={{ width: "32px" }} />
        </div>
        <TextBlueBackground
          text={tournaments[globalState.state.activeTournament].title}
          fadeSide="right"
          style={{
            position: "fixed",
            left: "0px",
            paddingLeft: "50px",
            top: "14px",
          }}
        />

        <TextBlueBackground
          text="Entry POKéMON"
          fadeSide="left"
          style={{
            position: "fixed",
            right: "0px",
            top: "14px",
          }}
        />
        <div className={`${styles.selectedPokemonsArea} flex-row`}>
          {team.asList().map((pkmn, i) => (
            <PokemonBasicInfoTournamentTeamSelection
              pokemon={pkmn}
              selected={activePos === i}
              onClick={() => setActivePos(i)}
            />
          ))}
        </div>

        <div className={`${styles.selectPokemonsArea} flex-row`}>
          {pokemonsAvailable.map((pkmn) => (
            <PokemonBasicInfo
              pokemon={pkmn}
              backgroundColor="#1E1E9B"
              onClick={() => selectPokemon(pkmn)}
              selected={alreadySelected(pkmn)}
            />
          ))}
        </div>
        {showConfirmationModal && (
          <GameModal show={showConfirmationModal} onClose={closeModal}>
            <div className={styles.confirmation}>
              <button
                type="button"
                className="nes-btn is-primary"
                onClick={handleConfirm}
              >
                Confirm
              </button>
              <button type="button" className="nes-btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </GameModal>
        )}
      </div>
    </>
  );
}
