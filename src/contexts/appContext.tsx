import { useState, useContext, createContext, ReactNode, FC } from "react";

interface AppContextType {
  page: number;
  setPage: (page: number) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [page, setPage] = useState(1);

  return (
    <AppContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext) as AppContextType;

export default useAppContext;
