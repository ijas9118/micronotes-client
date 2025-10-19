import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/dashboard" element={<div>Dashboard Page</div>} />
            <Route path="/notes" element={<div>Notes Page</div>} />
            <Route path="/tags" element={<div>Tags Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} />
            <Route path="/profile" element={<div>Profile Page</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
