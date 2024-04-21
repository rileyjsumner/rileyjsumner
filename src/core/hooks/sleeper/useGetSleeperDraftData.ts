import { useQuery } from "react-query";
import { Draft, DraftPick } from "src/core/@types/types";
import { SleeperApiService } from "src/services";

const LEAGUE_DRAFTS = "league-drafts";
const SINGLE_DRAFT = "single-draft";

const useGetUserDrafts = (userId: string, season = "2024", sport = "nfl") => {};

export const useGetAllLeagueDrafts = (leagueId: string) => {
  const sleeperApiService = new SleeperApiService();
  return useQuery<Array<Draft>>(
    LEAGUE_DRAFTS,
    () => {
      return sleeperApiService.getLeagueDrafts(leagueId);
    },
    {
      enabled: Boolean(leagueId),
    }
  );
};

export const useGetDraftPicks = (draftId: string) => {
  const sleeperApiService = new SleeperApiService();
  return useQuery<Array<DraftPick>>(
    SINGLE_DRAFT,
    () => {
      if (draftId) {
        return sleeperApiService.getDraftPicks(draftId);
      }
      return [];
    },
    {
      enabled: Boolean(draftId),
    }
  );
};

const useGetAllDraftPicks = (draftId: string) => {};

export const useGetAllDraftPickTrades = (draftId: string) => {};
