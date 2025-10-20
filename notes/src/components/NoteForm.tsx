import { useState } from "react";
import { useNotesStore } from "../store/notes-store";

const NoteForm = ({ onClose }: { onClose: () => void }) => {
  const { addNote, tags } = useNotesStore();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNote({ title, content, tags: selectedTags, archived: false });
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-md p-4 mb-4 shadow"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border px-3 py-2 mb-2 rounded-md"
      />
      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border px-3 py-2 mb-2 rounded-md"
      />
      <div className="w-full border border-neutral-300 rounded-md p-3 bg-neutral-50 text-neutral-800">
        <span className="text-sm text-neutral-600">Select tags:</span>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((t) => {
            const isSelected = selectedTags.includes(t.id);
            return (
              <button
                key={t.id}
                type="button"
                onClick={() =>
                  setSelectedTags((prev) =>
                    isSelected
                      ? prev.filter((id) => id !== t.id)
                      : [...prev, t.id],
                  )
                }
                style={{
                  backgroundColor: t.color,
                }}
                className={`px-3 py-1 text-xs font-medium rounded-md border border-neutral-200 cursor-pointer shadow-sm transition ${
                  isSelected
                    ? "ring-2 ring-amber-500 ring-offset-1"
                    : "hover:ring-1 hover:ring-neutral-300"
                }`}
              >
                {t.name}
              </button>
            );
          })}
        </div>
      </div>

      <button className="bg-amber-500 text-white px-4 py-2 rounded-md w-full">
        Save Note
      </button>
    </form>
  );
};

export default NoteForm;
