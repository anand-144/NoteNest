import React from "react";
import EditorHeader from "./EditorHeader";
import EditorContent from "./EditorContent";
import { FileText, Plus } from "lucide-react";
import { motion } from "framer-motion";

const Editor = ({ 
  selectedNote, 
  formData, 
  isEditing, 
  onFormChange, 
  onToggleNoteList, 
  onToggleStar, 
  onEdit, 
  onSave, 
  onCancel, 
  onDelete,
  onCreateNote 
}) => {
  if (!selectedNote) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="text-center">
          <FileText size={64} className="mx-auto mb-4 text-gray-300" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No note selected</h3>
          <p className="text-gray-500 mb-6">Select a note from the list or create a new one</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCreateNote}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium inline-flex items-center gap-2"
          >
            <Plus size={20} />
            Create New Note
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white">
      <EditorHeader
        note={selectedNote}
        isEditing={isEditing}
        onToggleNoteList={onToggleNoteList}
        onToggleStar={() => onToggleStar(selectedNote.id)}
        onEdit={onEdit}
        onSave={onSave}
        onCancel={onCancel}
        onDelete={onDelete}
      />
      
      <div className="flex-1 overflow-y-auto p-8">
        <EditorContent
          note={selectedNote}
          formData={formData}
          isEditing={isEditing}
          onFormChange={onFormChange}
        />
      </div>
    </div>
  );
};

export default Editor;
