import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, FileText } from "lucide-react";

import CategoryItem from "./CategoryItem";
import { CATEGORIES } from "../../constants";
import { getCategoryCount, formatDate } from "../../utils";

const Sidebar = ({ 
  isOpen, 
  notes, 
  selectedCategory, 
  setSelectedCategory, 
  searchQuery, 
  setSearchQuery, 
  onCreateNote 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: -280 }}
          animate={{ x: 0 }}
          exit={{ x: -280 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-64 bg-white border-r border-gray-200 flex flex-col z-30"
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="text-green-600" size={28} />
                Evernote
              </h1>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCreateNote}
              className="w-full bg-green-600 text-white py-2.5 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-medium shadow-sm"
            >
              <Plus size={20} />
              New Note
            </motion.button>
          </div>

          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3">
            <div className="space-y-1">
              {CATEGORIES.map(category => (
                <CategoryItem
                  key={category.name}
                  category={category}
                  isActive={selectedCategory === category.name}
                  count={getCategoryCount(notes, category.name)}
                  onClick={() => setSelectedCategory(category.name)}
                />
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 text-xs text-gray-500">
            <div className="flex items-center justify-between">
              <span>{notes.length} total notes</span>
              <span>{formatDate(new Date().toISOString())}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
