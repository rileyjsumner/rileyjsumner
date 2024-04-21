import { PlayoffMatchup } from "src/core/@types/sleeper";

export const PlayoffMatchupDisplay = (props: { matchup: PlayoffMatchup }) => {
  const t1 = props.matchup.t1;
  const t2 = props.matchup.t2;
  return (
    <>
      <div>
        {t1 ? (
          <div>{t1.metadata.team_name ?? t1.display_name}</div>
        ) : (
          <div>BYE</div>
        )}
        {t2 ? (
          <div>{t2.metadata.team_name ?? t1.display_name}</div>
        ) : (
          <div>BYE</div>
        )}
      </div>
    </>
  );
};
