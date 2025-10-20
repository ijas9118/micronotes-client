import { Routes, Route } from "react-router-dom";
import NotesPage from "../pages/NotesPage";
import TagsPage from "../pages/TagsPage";
import ArchivedPage from "../pages/ArchivedPage";

export const NotesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NotesPage />} />
      <Route path="/tags" element={<TagsPage />} />
      <Route path="/archived" element={<ArchivedPage />} />
    </Routes>
  );
};
export default NotesRoutes;
