import { useQuery } from "react-query";
import { League, Roster } from "src/core/@types/types";
import { SleeperApiService } from "src/services/api-service/SleeperApiService";

const LEAGUE_FOR_USER = "league-for-user";
const LEAGUE = "league";
const LEAGUE_ROSTERS = "league-rosters";

export const useGetLeaguesForUser = (
  userId: string,
  season = "2024",
  sport = "nfl"
) => {
  const sleeperApiService = new SleeperApiService();

  return useQuery<Array<League>>(LEAGUE_FOR_USER, async () => {
    return await sleeperApiService.getLeaguesForUser(userId, season, sport);
  });
};

export const useGetLeague = (leagueId: string) => {
  const sleeperApiService = new SleeperApiService();

  return useQuery<League>(LEAGUE, async () => {
    return await sleeperApiService.getLeague(leagueId);
  });
};

export const useGetLeagueRosters = (leagueIds: Array<string>) => {
  const sleeperApiService = new SleeperApiService();

  return useQuery<Array<Array<Roster>>>(LEAGUE_ROSTERS, async () => {
    const rosters = leagueIds.map((leagueId) =>
      sleeperApiService.getRosters(leagueId)
    );
    return await Promise.all(rosters);
  });
};

export const useGetLeagueUsers = (leagueId: string) => {};

export const useGetLeagueMatchups = (leagueId: string, week = "1") => {};

export const useGetLeaguePlayoffs = (
  leagueId: string,
  bracket = "winners"
) => {};

export const useGetTransactions = (leagueId: string, week = "1") => {};

export const useGetTradedPicks = (leagueId: string) => {};

export const useGetSportState = (sport = "nfl") => {};
