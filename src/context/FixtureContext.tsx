import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { FixtureItem } from "../types";

interface FixtureProviderProps {
  children: ReactNode;
}

type FixtureContextType = {
  list: FixtureItem[];
  setList: Dispatch<SetStateAction<FixtureItem[]>>;
};

const FixtureContext = createContext<FixtureContextType>({
  list: [],
  setList: () => {},
});

export const useFixture = () => {
  return useContext(FixtureContext);
};

export const FixtureProvider: React.FC<FixtureProviderProps> = ({
  children,
}) => {
  const [list, setList] = useState<FixtureItem[]>([]);

  return (
    <FixtureContext.Provider value={{ list, setList }}>
      {children}
    </FixtureContext.Provider>
  );
};
