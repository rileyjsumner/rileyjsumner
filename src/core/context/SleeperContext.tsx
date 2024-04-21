import { createContext, useContext, useState } from "react";

interface SleeperContextType {
  season: string;
  setSeason: (season: string) => void;
  leagueId: string;
  setLeagueId: (leagueId: string) => void;
  userId: string;
  setUserId: (userId: string) => void;
}

const SleeperContext = createContext<SleeperContextType>(
  {} as SleeperContextType
);

export const SleeperProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [season, setSeason] = useState<string>("");
  const [leagueId, setLeagueId] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  return (
    <SleeperContext.Provider
      value={{ season, setSeason, leagueId, setLeagueId, userId, setUserId }}
    >
      {children}
    </SleeperContext.Provider>
  );
};

export const useSleeperContext = () => {
  return useContext(SleeperContext);
};
