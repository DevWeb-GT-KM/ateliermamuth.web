"use client";

import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type PageOverlayContextType = {
  isPageOverlayHidden: boolean;
  setIsPageOverlayHidden: Dispatch<SetStateAction<boolean>>;
};

const PageOverlayContext = createContext<PageOverlayContextType | undefined>(
  undefined
);

export const PageOverlayProvider = ({ children }: any) => {
  const [isPageOverlayHidden, setIsPageOverlayHidden] = useState(true);

  return (
    <PageOverlayContext.Provider
      value={{
        isPageOverlayHidden,
        setIsPageOverlayHidden,
      }}
    >
      {children}
    </PageOverlayContext.Provider>
  );
};

export const usePageOverlay = () => {
  const context = useContext(PageOverlayContext);
  if (context === undefined) {
    throw new Error("usePageOverlay must be used within a PageOverlayProvider");
  }
  return context;
};
