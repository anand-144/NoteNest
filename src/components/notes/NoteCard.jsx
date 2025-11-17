import React from "react";
import { motion } from "framer-motion";
import { Star, Clock, FileText } from "lucide-react";
import { formatDate } from "../../utils";

const NoteCard = ({ note, isSelected, onSelect, onToggleStar }) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: '#f9fafb' }}
      onClick={() => onSelect(note)}
      className={`
        p-4 cursor-pointer transition-colors relative
        ${isSelected ? 'bg-green-50 border-l-4 border-green-600' : ''}
      `}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900 text-sm line-clamp-1 flex-1 pr-2">
          {note.title}
        </h3>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            onToggleStar(note.id);
          }}
          className="flex-shrink-0"
        >
          {note.starred ? (
            <Star size={18} className="fill-amber-500 text-amber-500" />
          ) : (
            <Star size={18} className="text-gray-300" />
          )}
        </motion.button>
      </div>
      
      <p className="text-xs text-gray-600 line-clamp-2 mb-2">
        {note.description || 'No content'}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {formatDate(note.updatedAt)}
        </span>
        <span className={`
          text-xs px-2 py-0.5 rounded-full font-medium
          ${note.category === 'Work' ? 'bg-blue-50 text-blue-700' : ''}
          ${note.category === 'Personal' ? 'bg-green-50 text-green-700' : ''}
          ${note.category === 'Ideas' ? 'bg-purple-50 text-purple-700' : ''}
          ${note.category === 'Archive' ? 'bg-orange-50 text-orange-700' : ''}
        `}>
          {note.category}
        </span>
      </div>
    </motion.div>
  );
};
export default NoteCard;
