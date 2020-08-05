import styles from "./select-team-battle.module.scss";
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
import { AppRoutes } from "../../utils/app-routes";

export default function SelectTeamBattle() {
  const globalState = useGlobal();
  const [activePos, setActivePos] = useState<number>(0);
  const router = useRouter();

  const [p1SelectedPokemonsBattle, setP1SelectedPokemonsBattle] = useState<
    IPokemon[]
  >([]);
  const [p2SelectedPokemonsBattle, setP2SelectedPokemonsBattle] = useState<
    IPokemon[]
  >([]);

  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(
    false
  );

  useEffect(() => {
    if (!globalState.state.activeTournamentTeam.isTeamComplete()) {
      router.push(AppRoutes.SELECT_TEAM);
    }
    globalState.dispatch(setActualScreen(GameScreen.SelectTeamBattle));
  }, []);

  const selectPokemon = (pokemon: IPokemon) => {
    // if (!alreadySelected(pokemon)) {
    //   team.setByPosition(activePos, pokemon);
    //   setTeam(team);
    //   if (activePos <= 5) {
    //     setActivePos(activePos + 1);
    //   }
    // }
  };

  const alreadySelected = (pkmn: IPokemon) => {
    return (
      p1SelectedPokemonsBattle.filter((p) => {
        return p.id === pkmn.id;
      }).length > 0
    );
  };

  function closeModal() {
    setShowConfirmationModal(false);
  }

  const handleConfirm = () => {
    router.push(AppRoutes.BEFORE_SELECT_TEAM_BATTLE);
  };

  const handleCancel = () => {
    // team.setByPosition(5, new Pokemon());
    // setTeam(team);
    setActivePos(2);
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
          {p1SelectedPokemonsBattle.map((pkmn, i) => (
            <PokemonBasicInfoTournamentTeamSelection
              pokemon={pkmn}
              selected={activePos === i}
              onClick={() => setActivePos(i)}
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
      ;
    </>
  );
}
