import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Almahaba from "./pages/Almahaba";
function App() {
  return (
    <>
      <Routes>
        <Route path="/al_mahaba" element={<Almahaba />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
