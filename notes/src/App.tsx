import { BrowserRouter } from "react-router-dom";
import NotesRoutes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <NotesRoutes />
    </BrowserRouter>
  );
};

export default App;
