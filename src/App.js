import Content from "./components/Content";
import Navbar from "./components/NavBar";
import Slogan from "./components/Slogan";
import { useState, useEffect } from "react";
export default function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  useEffect(() => {
    if (windowSize.width < 680) setIsMobile(true);
    else setIsMobile(false);
  }, [windowSize]);
  return (
    <h1 className=" h-screen px-4 py-8 bg-gradient-to-b from-[#210234] to-purple-700 text-white overflow-y-auto overflow-x-hidden">
      <Navbar isMobile={isMobile}/>
      <Slogan />
      <Content />
    </h1>
  );
}
