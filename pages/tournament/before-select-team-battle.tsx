import style from "./before-select-team-battle.module.scss";
import { useEffect, useReducer } from "react";
import { useGlobal } from "../../store/Global/GlobalContext";
import { setActualScreen } from "../../store/Global/GlobalActions";
import { GameScreen } from "../../store/Global/GlobalModels";
import { tournamentLevels, tournaments } from "../../data/tournaments";
import TextBlueBackground from "../../components/text-blue-background/text-blue-background";
import { ITournament } from "../../store/shared/models/Tournament";
import TournamentLevelTrainers from "../../components/tournament-level-trainers/tournament-level-trainers";
import { useRouter } from "next/router";
import { AppRoutes } from "../../utils/app-routes";

export default function BeforeSelectTeamBattle() {
  const globalState = useGlobal();
  const router = useRouter();

  const selectedTournament: ITournament =
    tournaments[globalState.state.activeTournament];

  useEffect(() => {
    globalState.dispatch(setActualScreen(GameScreen.BeforeSelectTeamBattle));
    setTimeout(() => {
      router.push(AppRoutes.SELECT_TEAM_BATTLE);
    }, 3000);
  }, []);

  return (
    <>
      <div className={style.page}>
        <TournamentLevelTrainers
          tournamentName={selectedTournament.title}
          levelName={tournamentLevels[selectedTournament.levels[0].id].name}
          battlesWon={globalState.state.battlesWonTournamentLevel}
          trainers={tournamentLevels[selectedTournament.levels[0].id].battles}
        />
      </div>
      <div className={style.background}></div>
      <div className={style.midground}></div>
      <div className={style.foreground}></div>
    </>
  );
}
