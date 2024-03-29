import { League, FullPlayer, Roster } from "src/core/@types/types";
import { ApiService } from "./ApiService";

export class SleeperApiService extends ApiService {
  constructor() {
    super("https://api.sleeper.app/v1");
  }

  public async getLeaguesForUser(
    userId: string,
    season = "2024",
    sport = "nfl"
  ): Promise<Array<League>> {
    return this.callApi<Array<League>>(
      "GET",
      `/user/${userId}/leagues/${sport}/${season}`
    );
  }

  public async getLeague(leagueId: string): Promise<League> {
    return this.callApi<League>("GET", `/league/${leagueId}`);
  }

  public async getRosters(leagueId: string): Promise<Array<Roster>> {
    return this.callApi<Array<Roster>>("GET", `league/${leagueId}/rosters`);
  }

  public async getPlayers(): Promise<{ [key: string]: FullPlayer }> {
    return this.callApi<{ [key: string]: FullPlayer }>("GET", "players/nfl");
  }
}
