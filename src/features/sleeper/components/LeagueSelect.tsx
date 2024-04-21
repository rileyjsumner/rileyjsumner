import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSleeperContext } from "src/core/context/SleeperContext";
import { useGetLeaguesForUser } from "src/core/hooks";
import { useSaveUserId } from "src/core/hooks/sleeper/useSaveSleeperData";
import { arrayRange } from "src/services/util";

export const LeagueSelect = () => {
  const [username, setUsername] = useState<string>("");
  const { season, setSeason, userId, setLeagueId } = useSleeperContext();

  const { data: leagues } = useGetLeaguesForUser(userId, season);

  const { saveUserId } = useSaveUserId();

  const handleUsernameChange = (event: ChangeEvent<any>) => {
    setUsername(event.target.value.toString());
  };

  const onSeasonSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSeason(event.target.value.toString());
  };

  const onLeagueSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setLeagueId(event.target.value);
  };

  const onConnectUserName = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    saveUserId(username);
  };

  return (
    <>
      <Form onSubmit={(event) => onConnectUserName(event)}>
        <Form.Group>
          <Form.Label>Sleeper Username</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) => handleUsernameChange(event)}
          />
          <Button type="submit">Connect</Button>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group>
          <Form.Label>Season</Form.Label>
          <Form.Select onChange={(event) => onSeasonSelect(event)}>
            <option>Select Season</option>
            {arrayRange(2018, new Date().getFullYear()).map((year) => (
              <option>{year.toString()}</option>
            ))}
          </Form.Select>
          <Form.Label>Leagues</Form.Label>
          <Form.Select onChange={(event) => onLeagueSelect(event)}>
            <option>Select League</option>
            {leagues?.map((league) => (
              <option key={league.league_id} value={league.league_id}>
                {league.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
    </>
  );
};
