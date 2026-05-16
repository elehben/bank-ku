import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashbord";
import Setting from "./pages/Setting";
import Loans from "./pages/Loans";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/loans" element={<Loans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;