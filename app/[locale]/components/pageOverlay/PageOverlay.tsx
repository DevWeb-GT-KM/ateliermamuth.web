"use client";

import "./pageOverlay.scss";
import { usePageOverlay } from "./PageOverlayContext";

export const PageOverlay: React.FC = ({}) => {
  const { isPageOverlayHidden, setIsPageOverlayHidden } = usePageOverlay();

  return (
    <div
      className={`page-overlay ${isPageOverlayHidden ? "hidden" : "visible"}`}
      onClick={() => setIsPageOverlayHidden(true)}
    ></div>
  );
};
