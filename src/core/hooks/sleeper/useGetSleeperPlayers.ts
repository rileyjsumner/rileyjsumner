import { useQuery } from "react-query";
import { FullPlayer } from "src/core/@types/types";
import { SleeperApiService } from "src/services";

const SLEEPER_PLAYERS = "sleeper-players";

export const useGetSleeperPlayers = () => {
  const sleeperApiService = new SleeperApiService();
  return useQuery<{ [key: string]: FullPlayer }>(SLEEPER_PLAYERS, () => {
    return sleeperApiService.getPlayers();
  });
};
