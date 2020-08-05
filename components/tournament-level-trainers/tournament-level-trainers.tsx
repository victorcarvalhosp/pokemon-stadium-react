import styles from "./tournament-level-trainers.module.scss";
import { ITrainerInfo } from "../../store/shared/models/Tournament";

export default function TournamentLevelTrainers({
  trainers,
  battlesWon,
  tournamentName,
  levelName,
}: {
  trainers: ITrainerInfo[];
  battlesWon: number;
  tournamentName: string;
  levelName: string;
}) {
  return (
    <div className={styles.trainers}>
      {trainers.map((t, i) => (
        <>
          {i <= battlesWon ? (
            <img
              src={`/images/trainers/${t.image}`}
              style={
                i === battlesWon
                  ? { outline: "4px solid green", outlineOffset: "-4px" }
                  : {}
              }
            ></img>
          ) : (
            <div className={styles.unknownTrainer}>
              <img src={`/images/trainers/unknown.png`}></img>
              <div>
                {i === trainers.length - 1
                  ? " FINAL"
                  : i === trainers.length - 2
                  ? " SEMIFINAL"
                  : ` BATTLE ${i + 1}`}
              </div>
            </div>
          )}
        </>
      ))}
      <div className={styles.metalBar}>{tournamentName}</div>
      <div className={styles.metalBar}>
        {levelName}
        {battlesWon === trainers.length - 1
          ? " FINAL"
          : battlesWon === trainers.length - 2
          ? " SEMIFINAL"
          : ` BATTLE ${battlesWon + 1}`}
      </div>
    </div>
  );
}
