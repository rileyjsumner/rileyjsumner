import Button from "react-bootstrap/Button";
import { Player } from "src/core/@types/sleeper";
import { SleeperApiService } from "src/services";

export const DownloadPlayerData = () => {
  const handleDownloadPlayers = async () => {
    const sleeperApiService = new SleeperApiService();

    const playerList = await sleeperApiService.getPlayers();

    const filteredPlayers = Object.keys(playerList).reduce(
      (smallPlayerList: { [key: string]: Player }, playerId) => {
        const currentPlayer = playerList[playerId];
        if (
          currentPlayer.active &&
          ["QB", "RB", "WR", "TE"].includes(currentPlayer.position ?? "N/A")
        ) {
          smallPlayerList[playerId] = {
            full_name: currentPlayer.full_name,
            player_id: currentPlayer.player_id,
            years_exp: currentPlayer.years_exp,
            position: currentPlayer.position,
            injury_status: currentPlayer.injury_status,
            fantasy_positions: currentPlayer.fantasy_positions,
            birth_date: currentPlayer.birth_date,
            college: currentPlayer.college,
            status: currentPlayer.status,
            team: currentPlayer.team,
            number: currentPlayer.number,
            age: currentPlayer.age,
            active: currentPlayer.active,
            height: currentPlayer.height,
            weight: currentPlayer.weight,
          };
        }
        return smallPlayerList;
      },
      {}
    );

    const fileName = "sleeper-player-dump";
    const json = JSON.stringify(filteredPlayers, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);

    // create "a" HTLM element with href to file
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };
  return (
    <>
      <h2>Download Player Data</h2>
      <Button onClick={() => handleDownloadPlayers()}>Download Players</Button>
    </>
  );
};
