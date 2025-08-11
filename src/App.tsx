import { Box } from "@mui/material";
import "./App.css"
import Navsection from "./Components/Navsection";
import HeroSection from "./Components/HeroSection";
import Aboutus from "./Components/aboutus";
// import ExitAnimation from "./Components/hide-show";
function App() {
  return (
    <>
    <Box className="p-[20px] h-[200vh]">
    <Navsection />
    <HeroSection />
    <br />
    {/* <ExitAnimation />  */}
    <Aboutus />
    </Box>
    </>
  );
}

export default App;
