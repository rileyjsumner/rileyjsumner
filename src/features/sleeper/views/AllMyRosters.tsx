import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Player, Roster } from "src/core/@types/types";
import { useGetLeagueRosters, useGetLeaguesForUser } from "src/core/hooks";
import rawPlayerList from "src/static/data/sleeper-player-dump.json";

export const AllMyRosters = () => {
  const [leagueIds, setLeagueIds] = useState<Array<string>>([]);
  const [myRosters, setMyRosters] = useState<Array<Roster>>([]);
  const [playerList] = useState<{ [key: string]: Player }>(
    rawPlayerList as any
  );
  const userId = "647228179060174848"; // TODO Context

  const { data: leagues } = useGetLeaguesForUser(userId);
  const { data: rosters, refetch } = useGetLeagueRosters(leagueIds);

  useEffect(() => {
    setLeagueIds(leagues?.map((league) => league.league_id) ?? []);
    refetch();
  }, [leagues, refetch]);

  useEffect(() => {
    const filteredRosters = rosters?.reduce(
      (rosterList: Array<Roster>, leagueRosters: Array<Roster>) => {
        rosterList.push(leagueRosters.filter((r) => r.owner_id === userId)[0]);
        return rosterList;
      },
      []
    );
    setMyRosters(filteredRosters ?? []);
  }, [rosters]);

  const renderPlayer = (playerId: string) => {
    const player = playerList[playerId];

    if (player) {
      return (
        <div key={playerId} className="d-flex justify-content-start">
          <p>{player.position} — </p>
          <p> {player.full_name}</p>
        </div>
      );
    }
    return (
      <div key={playerId}>
        <p>Player not Found</p>
      </div>
    );
  };

  return (
    <>
      <h2>Rosters</h2>
      <Row>
        {myRosters.map((teamRoster) => (
          <Col md="3">
            {teamRoster.players?.map((playerId) => renderPlayer(playerId))}
          </Col>
        ))}
      </Row>
    </>
  );
};
