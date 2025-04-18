import React, { useContext } from "react";
export enum Pages {
  Main,
  Upload,
}

interface UserContextType {
  currentPage: Pages;
  name?: string;
  email?: string;
  setPage: (page: Pages) => void;
}

const GlobalContext = React.createContext<UserContextType>({
  currentPage: Pages.Main,
  setPage: () => {},
});

export default GlobalContext;
export const useGlobalContext = () => useContext(GlobalContext);
