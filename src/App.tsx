import { Box } from "@mui/material";
import "./App.css"
import Navsection from "./Components/Navsection";
import HeroSection from "./Components/HeroSection";
function App() {
  return (
    <>
    <Box className="p-[20px] h-[200vh]">
    <Navsection />
    <HeroSection />
    </Box>
    </>
  );
}

export default App;
