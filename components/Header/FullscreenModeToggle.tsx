"use client";

import * as React from "react";
import { CiMaximize1, CiMinimize1 } from "react-icons/ci";
// import { Maximize, Minimize } from "lucide-react"; // Import fullscreen icons

export function FullscreenModeToggle() {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  // Function to toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // Enter fullscreen mode
      document.documentElement.requestFullscreen?.().then(() => {
        setIsFullscreen(true);
      });
    } else {
      // Exit fullscreen mode
      document.exitFullscreen?.().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  return (
    <button
     
      className="flex justify-center items-center w-full"
      onClick={toggleFullscreen}
    >
      {isFullscreen ? (
        <CiMinimize1  size={21} />
      ) : (
        <CiMaximize1  size={21} />
      )}
      <span className="sr-only">Toggle fullscreen</span>
    </button>
  );
}
