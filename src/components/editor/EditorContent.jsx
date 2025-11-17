import React from "react";
import { motion } from "framer-motion";
import { Clock, Tag } from "lucide-react";
import { formatDate } from "../../utils";

const EditorContent = ({ note, formData, isEditing, onFormChange }) => {
  if (isEditing) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <input
          type="text"
          value={formData.title}
          onChange={(e) => onFormChange({ ...formData, title: e.target.value })}
          className="w-full text-3xl font-bold text-gray-900 mb-4 border-none outline-none focus:ring-0 px-0"
          placeholder="Note title..."
        />
        
        <div className="mb-4">
          <select
            value={formData.category}
            onChange={(e) => onFormChange({ ...formData, category: e.target.value })}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {CATEGORIES.filter(c => c.name !== 'All Notes').map(cat => (
              <option key={cat.name} value={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>
        
        <textarea
          value={formData.description}
          onChange={(e) => onFormChange({ ...formData, description: e.target.value })}
          className="w-full text-gray-700 text-base leading-relaxed border-none outline-none focus:ring-0 px-0 resize-none"
          rows="20"
          placeholder="Start writing..."
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {note.title}
      </h1>
      
      <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <Clock size={16} />
          Updated {formatDate(note.updatedAt)}
        </span>
        <span className="flex items-center gap-1">
          <Tag size={16} />
          {note.category}
        </span>
      </div>
      
      <div className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
        {note.description || (
          <p className="text-gray-400 italic">No content yet. Click Edit to add content.</p>
        )}
      </div>
    </motion.div>
  );
};

export default EditorContent;
