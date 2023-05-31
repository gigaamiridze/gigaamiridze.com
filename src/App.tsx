import { useState, useEffect, useRef, MouseEventHandler } from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { GlobalStyles } from "./assets";
import { router } from "./routes";
import { useMenu } from "./contexts";
import { BackDrop } from "./components";
import { AnimatedCursor, PreLoader } from "./layouts";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const backDrop = useRef<HTMLDivElement | null>(null);
  const { isOpen, setIsOpen } = useMenu();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleBackDrop: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === backDrop.current) {
      setIsOpen(false);
    }
  }

  return (
    <>
      {loading
        ? <PreLoader />
        : <RouterProvider router={router} />
      }
      <HelmetProvider>
        <GlobalStyles />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Martian+Mono:wght@200;300;400;500;600;700&family=Courgette&display=swap" rel="stylesheet" />
          <link rel="icon" type="image/x-icon" href="/favicon.png" />
        </Helmet>
      </HelmetProvider>
      <AnimatedCursor />
      <BackDrop 
        ref={backDrop}
        isOpen={isOpen}
        onClick={handleBackDrop}
      />
    </>
  )
}

export default App;