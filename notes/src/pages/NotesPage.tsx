import { useState } from "react";
import { useNotesStore } from "../store/notes-store";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";
import "../index.css";

const NotesPage = () => {
  const { notes, deleteNote, toggleArchive } = useNotesStore();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold text-amber-600">My Notes</h2>
        <button
          className="bg-amber-500 text-white px-4 py-2 rounded-md"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "New Note"}
        </button>
      </div>

      {showForm && <NoteForm onClose={() => setShowForm(false)} />}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {notes
          .filter((n) => !n.archived)
          .map((note) => (
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

export default NotesPage;
