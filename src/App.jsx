import React, { useState, useEffect } from "react";

import Sidebar from "./components/sidebar";
import NotesList from "./components/notes";
import Editor from "./components/editor";
import DeleteConfirmModal from "./components/modal/DeleteConfirmModal";

import { CATEGORIES, INITIAL_NOTES } from "./constants";
import {
  filterNotes,
  handleDuplicateTitle,
} from "./utils";

import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  // notes now automatically sync with localStorage
  const [notes, setNotes] = useLocalStorage("evernote_notes", INITIAL_NOTES);

  const [selectedCategory, setSelectedCategory] = useState("All Notes");
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showNoteList, setShowNoteList] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Personal",
    starred: false,
    tags: [],
  });

  // Set initial selected note only once
  useEffect(() => {
    if (notes.length > 0) {
      setSelectedNote(notes[0]);
      setFormData(notes[0]);
    }
  }, []);

  const createNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Untitled Note",
      description: "",
      category:
        selectedCategory === "All Notes" ? "Personal" : selectedCategory,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      starred: false,
      tags: [],
    };

    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
    setFormData(newNote);
    setIsEditing(true);
  };

  const saveNote = () => {
    if (!formData.title.trim()) formData.title = "Untitled Note";

    const finalTitle = handleDuplicateTitle(
      notes,
      formData.title.trim(),
      formData.category,
      selectedNote.id
    );

    const updatedNote = {
      ...selectedNote,
      ...formData,
      title: finalTitle,
      updatedAt: new Date().toISOString(),
    };

    setNotes(notes.map((n) => (n.id === selectedNote.id ? updatedNote : n)));

    setSelectedNote(updatedNote);
    setIsEditing(false);
  };

  const deleteNote = (id) => {
    const updated = notes.filter((n) => n.id !== id);
    setNotes(updated);

    if (selectedNote?.id === id) {
      setSelectedNote(updated[0] || null);
      setFormData(
        updated[0] || {
          title: "",
          description: "",
          category: "Personal",
          starred: false,
          tags: [],
        }
      );
    }

    setDeleteConfirm(null);
  };

  const toggleStar = (noteId) => {
    setNotes(
      notes.map((note) =>
        note.id === noteId ? { ...note, starred: !note.starred } : note
      )
    );

    if (selectedNote?.id === noteId) {
      const updated = { ...selectedNote, starred: !selectedNote.starred };
      setSelectedNote(updated);
      setFormData(updated);
    }
  };

  const selectNote = (note) => {
    setSelectedNote(note);
    setFormData(note);
    setIsEditing(false);

    if (window.innerWidth < 768) setShowNoteList(false);
  };

  const filteredNotes = filterNotes(notes, selectedCategory, searchQuery);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar
        isOpen={isSidebarOpen}
        notes={notes}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCreateNote={createNewNote}
      />

      <NotesList
        isVisible={showNoteList}
        filteredNotes={filteredNotes}
        selectedCategory={selectedCategory}
        selectedNote={selectedNote}
        onSelectNote={selectNote}
        onToggleStar={toggleStar}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <Editor
        selectedNote={selectedNote}
        formData={formData}
        isEditing={isEditing}
        onFormChange={setFormData}
        onToggleNoteList={() => setShowNoteList(!showNoteList)}
        onToggleStar={toggleStar}
        onEdit={() => setIsEditing(true)}
        onSave={saveNote}
        onCancel={() => {
          setIsEditing(false);
          setFormData(selectedNote);
        }}
        onDelete={() => setDeleteConfirm(selectedNote.id)}
        onCreateNote={createNewNote}
      />

      <DeleteConfirmModal
        isOpen={deleteConfirm !== null}
        onConfirm={() => deleteNote(deleteConfirm)}
        onCancel={() => setDeleteConfirm(null)}
      />
    </div>
  );
};

export default App;
