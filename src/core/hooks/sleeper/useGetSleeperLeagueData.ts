import { useQuery } from "react-query";
import { League, PlayoffMatchup, Roster, User } from "src/core/@types/types";
import { SleeperApiService } from "src/services/api-service/SleeperApiService";

const LEAGUE_FOR_USER = "league-for-user";
const LEAGUE = "league";
const LEAGUE_ROSTERS = "league-rosters";
const LEAGUE_PLAYOFFS = "league-playoffs";

export const useGetLeaguesForUser = (
  userId: string,
  season: string,
  sport = "nfl"
) => {
  const sleeperApiService = new SleeperApiService();

  return useQuery<Array<League>>(
    [LEAGUE_FOR_USER, userId, season, sport],
    async () => {
      return await sleeperApiService.getLeaguesForUser(userId, season, sport);
    },
    {
      enabled: Boolean(userId) && Boolean(season),
    }
  );
};

export const useGetLeague = (leagueId: string) => {
  const sleeperApiService = new SleeperApiService();

  return useQuery<League>(
    LEAGUE,
    async () => {
      return await sleeperApiService.getLeague(leagueId);
    },
    {
      enabled: Boolean(leagueId),
    }
  );
};

export const useGetLeagueRosters = (leagueIds: Array<string>) => {
  const sleeperApiService = new SleeperApiService();

  return useQuery<Array<Array<Roster>>>(
    LEAGUE_ROSTERS,
    async () => {
      const rosters = leagueIds.map((leagueId) =>
        sleeperApiService.getRosters(leagueId)
      );
      return await Promise.all(rosters);
    },
    {
      enabled: Boolean(leagueIds?.length),
    }
  );
};

const useGetLeagueUsers = (leagueId: string) => {};

const useGetLeagueMatchups = (leagueId: string, week = "1") => {};

export const useGetLeaguePlayoffs = (
  leagueId: string,
  bracket: "winners" | "losers"
) => {
  const sleeperApiService = new SleeperApiService();
  return useQuery<{ [round: string]: Array<PlayoffMatchup> }>(
    [LEAGUE_PLAYOFFS, leagueId],
    async () => {
      const rosters = await sleeperApiService.getLeagueRosters(leagueId);
      const teams = await sleeperApiService.getLeagueUsers(leagueId);

      const mappedTeamData = teams.reduce(
        (data: { [rosterId: number]: User }, team) => {
          const teamRoster = rosters.find(
            (roster) => roster.owner_id === team.user_id
          );
          if (teamRoster) {
            data[teamRoster.roster_id] = team;
          }
          return data;
        },
        {}
      );

      const bracketResponse = await sleeperApiService.getLeaguePlayoffs(
        leagueId,
        bracket
      );

      const bracketWithTeamData = bracketResponse.map(
        (matchup): PlayoffMatchup => ({
          ...matchup,
          t1: mappedTeamData[matchup.t1],
          t2: mappedTeamData[matchup.t2],
        })
      );

      return bracketWithTeamData.reduce(
        (rounds: { [round: number]: Array<PlayoffMatchup> }, matchup) => {
          if (rounds[matchup.r]?.length) {
            rounds[matchup.r].push(matchup);
          } else {
            rounds[matchup.r] = [matchup];
          }
          return rounds;
        },
        {}
      );
    },
    {
      enabled: Boolean(leagueId) && Boolean(bracket),
    }
  );
};

const useGetTransactions = (leagueId: string, week = "1") => {};

const useGetTradedPicks = (leagueId: string) => {};

const useGetSportState = (sport = "nfl") => {};
