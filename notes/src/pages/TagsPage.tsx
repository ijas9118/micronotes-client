import { useState } from "react";
import { useNotesStore } from "../store/notes-store";
import TagForm from "../components/TagForm";
import "../index.css";

const TagsPage = () => {
  const { tags, deleteTag } = useNotesStore();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold text-amber-600">Tags</h2>
        <button
          className="bg-amber-500 text-white px-4 py-2 rounded-md"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "Add Tag"}
        </button>
      </div>

      {showForm && <TagForm onClose={() => setShowForm(false)} />}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {tags.map((tag) => (
          <div
            key={tag.id}
            className="p-4 border rounded-md flex justify-between items-center"
          >
            <span className="font-medium" style={{ color: tag.color }}>
              {tag.name}
            </span>
            <button
              onClick={() => deleteTag(tag.id)}
              className="text-red-500 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsPage;
