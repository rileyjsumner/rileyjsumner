import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  useGetAllLeagueDrafts,
  useGetDraftPicks,
} from "src/core/hooks/sleeper/useGetSleeperDraftData";
import rawPlayerData from "src/static/data/sleeper-player-dump.json";
import { Player } from "src/core/@types/types";
import { useSleeperContext } from "src/core/context/SleeperContext";

export const DraftPage = () => {
  const { leagueId } = useSleeperContext();
  const [draftId, setDraftId] = useState<string>("");
  const [playerList] = useState<{ [playerId: string]: Player }>(
    rawPlayerData as any
  );

  const { data: drafts } = useGetAllLeagueDrafts(leagueId);
  const {
    data: draft,
    isFetching: isFetchingDraft,
    refetch: refetchDraftPicks,
  } = useGetDraftPicks(draftId);

  useEffect(() => {
    if (drafts) {
      setDraftId(drafts[0].draft_id);
    }

    refetchDraftPicks();
  }, [drafts, leagueId, refetchDraftPicks]);

  return (
    <>
      <h2>Drafts</h2>
      <p>Get drafts for leagues</p>

      {!isFetchingDraft && draft ? (
        <Row>
          {draft.map((pick) => (
            <Col md="1">
              <p>{playerList[pick.player_id]?.full_name}</p>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
