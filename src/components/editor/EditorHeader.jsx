import React from "react";
import { motion } from "framer-motion";
import { Menu, Star, Edit, Trash2, CheckCircle } from "lucide-react";

const EditorHeader = ({ 
  note, 
  isEditing, 
  onToggleNoteList, 
  onToggleStar, 
  onEdit, 
  onSave, 
  onCancel, 
  onDelete 
}) => {
  return (
    <div className="p-4 border-b border-gray-200 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onToggleNoteList}
          className="text-gray-500 hover:text-gray-700 md:hidden"
        >
          <Menu size={24} />
        </motion.button>
        
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onToggleStar}
          >
            {note.starred ? (
              <Star size={22} className="fill-amber-500 text-amber-500" />
            ) : (
              <Star size={22} className="text-gray-400" />
            )}
          </motion.button>
          
          <span className={`
            text-sm px-3 py-1 rounded-full font-medium
            ${note.category === 'Work' ? 'bg-blue-50 text-blue-700' : ''}
            ${note.category === 'Personal' ? 'bg-green-50 text-green-700' : ''}
            ${note.category === 'Ideas' ? 'bg-purple-50 text-purple-700' : ''}
            ${note.category === 'Archive' ? 'bg-orange-50 text-orange-700' : ''}
          `}>
            {note.category}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {isEditing ? (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onSave}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium flex items-center gap-2"
            >
              <CheckCircle size={18} />
              Save
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCancel}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              Cancel
            </motion.button>
          </>
        ) : (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onEdit}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium flex items-center gap-2"
            >
              <Edit size={18} />
              Edit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onDelete}
              className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium flex items-center gap-2"
            >
              <Trash2 size={18} />
              Delete
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
};

export default EditorHeader;
