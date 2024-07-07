import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./shared/Navbar";
import CursorPagination from "./pages/CursorPagination";
import OffsetPagination from "./pages/OffsetPagination";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/offset" element={<OffsetPagination />} />
          <Route path="/cursor" element={<CursorPagination />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;