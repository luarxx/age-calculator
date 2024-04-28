import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-Light_grey">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      
    </div>
  );
}

export default App;
