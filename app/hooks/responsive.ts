import { useEffect, useState } from "react";

const MIN_WIDTH = 1024;
const MIN_HEIGHT = 700;

export const useLayout = () => {
  const [unsupportedWidth, setUnsupportedWidth] = useState(false);
  const [unsupportedHeight, setUnsupportedHeight] = useState(false);
  const [flippable, setFlippable] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmallWidth = window.innerWidth < MIN_WIDTH;
      const isSmallHeight = window.innerHeight < MIN_HEIGHT;
      const isFlippable =
        window.innerWidth < window.innerHeight &&
        window.innerWidth >= MIN_HEIGHT &&
        window.innerHeight >= MIN_WIDTH;

      setUnsupportedWidth(isSmallWidth);
      setUnsupportedHeight(isSmallHeight);
      setFlippable(isFlippable);
    };

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return {
    unsupportedWidth,
    unsupportedHeight,
    unsupportedResolution: unsupportedWidth || unsupportedHeight,
    flippable,
  };
};
