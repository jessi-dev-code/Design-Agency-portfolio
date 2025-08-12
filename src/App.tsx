import { Box } from "@mui/material";
import "./App.css"
import Navsection from "./Components/Navsection";
import HeroSection from "./Components/HeroSection";
import Aboutus from "./Components/aboutus";
import Marquee from "./Components/Marquee";
function App() {
  return (
    <>
    <Box >
    <Navsection />
    <HeroSection />
    <br />
    <Aboutus />
    <Marquee />
    <Box className="w-[500px] h-[600px]"></Box>
    </Box>
    </>
  );
}

export default App;
