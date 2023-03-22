import { useState, useEffect } from "react";

function useScrollPosition() {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const updateScroll = () => {
      if (window.scrollY >= 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }

    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return isScroll;
}

export default useScrollPosition;