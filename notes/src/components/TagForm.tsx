import { useState } from "react";
import { useNotesStore } from "../store/notes-store";

const TagForm = ({ onClose }: { onClose: () => void }) => {
  const { addTag } = useNotesStore();
  const [name, setName] = useState("");
  const [color, setColor] = useState("#f59e0b");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    addTag({ name, color });
    setName("");
    setColor("#f59e0b");
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-md p-4 mb-4 shadow"
    >
      <h2 className="text-lg font-semibold text-amber-700 mb-3">Create Tag</h2>

      {/* Tag Name */}
      <input
        type="text"
        placeholder="Tag name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border px-3 py-2 mb-3 rounded-md"
      />

      {/* Tag Color */}
      <div className="flex items-center gap-3 mb-3">
        <label className="text-sm text-gray-600">Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 h-10 border rounded-md cursor-pointer"
        />
      </div>

      {/* Save Button */}
      <button
        type="submit"
        className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md w-full transition"
      >
        Save Tag
      </button>
    </form>
  );
};

export default TagForm;
