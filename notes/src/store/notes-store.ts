import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  archived: boolean;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
}

interface NotesState {
  notes: Note[];
  tags: Tag[];
  addNote: (note: Omit<Note, "id">) => void;
  updateNote: (id: string, updated: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  toggleArchive: (id: string) => void;

  addTag: (tag: Omit<Tag, "id">) => void;
  updateTag: (id: string, updated: Partial<Tag>) => void;
  deleteTag: (id: string) => void;
}

export const useNotesStore = create<NotesState>()(
  persist(
    (set) => ({
      notes: [],
      tags: [],

      addNote: (note) =>
        set((state) => ({
          notes: [...state.notes, { ...note, id: crypto.randomUUID() }],
        })),

      updateNote: (id, updated) =>
        set((state) => ({
          notes: state.notes.map((n) =>
            n.id === id ? { ...n, ...updated } : n,
          ),
        })),

      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((n) => n.id !== id),
        })),

      toggleArchive: (id) =>
        set((state) => ({
          notes: state.notes.map((n) =>
            n.id === id ? { ...n, archived: !n.archived } : n,
          ),
        })),

      addTag: (tag) =>
        set((state) => ({
          tags: [...state.tags, { ...tag, id: crypto.randomUUID() }],
        })),

      updateTag: (id, updated) =>
        set((state) => ({
          tags: state.tags.map((t) => (t.id === id ? { ...t, ...updated } : t)),
        })),

      deleteTag: (id) =>
        set((state) => ({
          tags: state.tags.filter((t) => t.id !== id),
        })),
    }),
    { name: "notes-store" },
  ),
);
