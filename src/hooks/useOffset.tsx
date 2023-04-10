import { useState, useEffect } from "react";

function useOffset() {
  const [offset, setOffset] = useState<number>(-130);

  useEffect(() => {
    const updateOffset = () => {
      const windowWidth = window.innerWidth;

      switch (windowWidth) {
        case 768: setOffset(-130); break;
        case 600: setOffset(-115); break;
        case 550: setOffset(-80); break;
        case 520: setOffset(-60); break;
        case 480: setOffset(-100); break;
        case 450: setOffset(-110); break;
        case 420: setOffset(-100); break;
        case 350: setOffset(-80); break;
      }
    }

    window.addEventListener("resize", updateOffset);

    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return offset;
}

export default useOffset;