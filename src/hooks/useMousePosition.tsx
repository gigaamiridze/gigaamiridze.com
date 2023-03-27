import { useState, useEffect } from "react";

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX - 14,
        y: event.clientY + 14
      });
    }

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  });

  return mousePosition;
}

export default useMousePosition;