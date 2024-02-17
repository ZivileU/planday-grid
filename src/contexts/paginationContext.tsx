import { useState, useContext, createContext, ReactNode, FC } from "react";

interface PaginationContextType {
  page: number;
  setPage: (page: number) => void;
}

export const PaginationContext = createContext<PaginationContextType | null>(
  null
);

export const PaginationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [page, setPage] = useState(1);

  return (
    <PaginationContext.Provider value={{ page, setPage }}>
      {children}
    </PaginationContext.Provider>
  );
};

const usePaginationContext = () =>
  useContext(PaginationContext) as PaginationContextType;

export default usePaginationContext;
