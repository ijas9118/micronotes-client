import React from "react";

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  archived?: boolean;
}

interface NoteCardProps {
  note: Note;
  onDelete: () => void;
  onArchive: () => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete, onArchive }) => {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-amber-800">{note.title}</h3>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            note.archived
              ? "bg-gray-300 text-gray-700"
              : "bg-amber-200 text-amber-800"
          }`}
        >
          {note.archived ? "Archived" : "Active"}
        </span>
      </div>

      {/* Content */}
      <p className="text-sm text-gray-700 mb-3">{note.content}</p>

      {/* Tags */}
      {note.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <button
          className="text-sm text-amber-700 hover:text-amber-900 font-medium"
          onClick={onArchive}
        >
          {note.archived ? "Unarchive" : "Archive"}
        </button>
        <button
          className="text-sm text-red-600 hover:text-red-800 font-medium"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
