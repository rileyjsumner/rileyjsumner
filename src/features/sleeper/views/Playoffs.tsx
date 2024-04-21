import { useEffect } from "react";
import { useSleeperContext } from "src/core/context/SleeperContext";
import { useGetLeaguePlayoffs } from "src/core/hooks";
import { PlayoffMatchupDisplay } from "../components/PlayoffMatchupDisplay";
import { Col, Row } from "react-bootstrap";

export const Playoffs = () => {
  const { leagueId } = useSleeperContext();
  const { data: playoffs } = useGetLeaguePlayoffs(leagueId, "winners");

  useEffect(() => {
    console.log("playoffs", playoffs);
  }, [playoffs]);

  return (
    <>
      <h1>Playoffs</h1>

      {playoffs ? (
        <Row>
          {Object.keys(playoffs).map((round: string) => (
            <Col md="3">
              {playoffs[round].map((matchup) => (
                <PlayoffMatchupDisplay matchup={matchup} />
              ))}
            </Col>
          ))}
        </Row>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
