import { Box } from "@mui/material";
import "./App.css"
import Navsection from "./Components/Navsection";
import HeroSection from "./Components/HeroSection";
import Aboutus from "./Components/aboutus";
import Marquee from "./Components/Marquee";
// import ExitAnimation from "./Components/hide-show";
function App() {
  return (
    <>
    <Box >
    <Navsection />
    <HeroSection />
    <br />
    {/* <ExitAnimation />  */}
    <Aboutus />
    <Marquee />
    </Box>
    </>
  );
}

export default App;
