import { Star } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import "./App.css"
function App() {
  return (
    <>
    <div className="p-6 text-center">
      <Routes>
        <Route path="/" element={<h1 className="text-8xl font-bold text-blue-500">Home Page</h1>} />
        <Route path="/about" element={<h1 className="text-2xl">About Page</h1>} />
      </Routes>
    </div>
        <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-600">Vite + React + TS + Tailwind + MUI</h1>
      <Button variant="contained" color="primary" startIcon={<Star />}>
        MUI Button
      </Button>
    </div>
    </>
  );
}

export default App;
