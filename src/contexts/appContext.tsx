import {
  useState,
  useMemo,
  useContext,
  createContext,
  ReactNode,
  FC,
} from "react";

type Image = {
  label: string;
  value: string;
  id: string;
};

type AppContextType = {
  page: number;
  setPage: (page: number) => void;
  searchValue: Image | null;
  setSearchValue: (searchValue: Image | null) => void;
  searchInputValue: string;
  setSearchInputValue: (searchInputValue: string) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState<Image | null>(null);
  const [searchInputValue, setSearchInputValue] = useState("");

  const values = useMemo(
    () => ({
      page,
      setPage,
      searchValue,
      setSearchValue,
      searchInputValue,
      setSearchInputValue,
    }),
    [
      page,
      setPage,
      searchValue,
      setSearchValue,
      searchInputValue,
      setSearchInputValue,
    ]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext) as AppContextType;

export default useAppContext;
