import { useSleeperContext } from "src/core/context/SleeperContext";
import { SleeperApiService } from "src/services";

export const useSaveUserId = () => {
  const sleeperApiService = new SleeperApiService();
  const { setUserId } = useSleeperContext();

  return {
    saveUserId: async (username: string) => {
      const fetchedUserId = await sleeperApiService.getUserId(username);

      setUserId(fetchedUserId.user_id);
      return fetchedUserId;
    },
  };
};
