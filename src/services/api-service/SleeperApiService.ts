import {
  League,
  FullPlayer,
  Roster,
  Draft,
  DraftPick,
  User,
  IPlayoffMatchup,
} from "src/core/@types/types";
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

  public async getLeagueDrafts(leagueId: string): Promise<Array<Draft>> {
    return this.callApi<Array<Draft>>("GET", `/league/${leagueId}/drafts`);
  }

  public async getDraftPicks(draftId: string): Promise<Array<DraftPick>> {
    return this.callApi<Array<DraftPick>>("GET", `/draft/${draftId}/picks`);
  }

  public async getLeaguePlayoffs(
    leagueId: string,
    bracket: "winners" | "losers"
  ): Promise<Array<IPlayoffMatchup>> {
    return this.callApi<Array<IPlayoffMatchup>>(
      "GET",
      `/league/${leagueId}/${bracket}_bracket`
    );
  }

  public async getUserId(username: string): Promise<User> {
    return this.callApi<User>("GET", `/user/${username}`);
  }

  public async getLeagueUsers(leagueId: string): Promise<Array<User>> {
    return this.callApi<Array<User>>("GET", `/league/${leagueId}/users`);
  }

  public async getLeagueRosters(leagueId: string): Promise<Array<Roster>> {
    return this.callApi<Array<Roster>>("GET", `/league/${leagueId}/rosters`);
  }
}
