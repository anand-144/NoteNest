import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, FileText } from "lucide-react";
import NoteCard from "./NoteCard";

const NotesList = ({ 
  isVisible, 
  filteredNotes, 
  selectedCategory, 
  selectedNote, 
  onSelectNote, 
  onToggleStar,
  onToggleSidebar 
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -320 }}
          animate={{ x: 0 }}
          exit={{ x: -320 }}
          className="w-80 bg-white border-r border-gray-200 flex flex-col"
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-gray-900">
                {selectedCategory}
              </h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onToggleSidebar}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <Menu size={20} />
              </motion.button>
            </div>
            <p className="text-sm text-gray-500">
              {filteredNotes.length} {filteredNotes.length === 1 ? 'note' : 'notes'}
            </p>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredNotes.length === 0 ? (
              <div className="p-8 text-center">
                <FileText size={48} className="mx-auto mb-3 text-gray-300" />
                <p className="text-gray-500 text-sm">No notes found</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {filteredNotes.map(note => (
                  <NoteCard
                    key={note.id}
                    note={note}
                    isSelected={selectedNote?.id === note.id}
                    onSelect={onSelectNote}
                    onToggleStar={onToggleStar}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotesList;
