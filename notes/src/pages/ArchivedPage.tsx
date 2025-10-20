import NoteCard from "../components/NoteCard";
import { useNotesStore } from "../store/notes-store";
import "../index.css";

const ArchivedPage = () => {
  const { notes, toggleArchive, deleteNote } = useNotesStore();

  const archived = notes.filter((n) => n.archived);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-amber-600 mb-4">
        Archived Notes
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {archived.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onDelete={() => deleteNote(note.id)}
            onArchive={() => toggleArchive(note.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ArchivedPage;
