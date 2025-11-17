import React from "react";
import { motion } from "framer-motion";

const CategoryItem = ({ category, isActive, count, onClick }) => {
  const Icon = category.icon;
  
  return (
    <motion.button
      whileHover={{ x: 4 }}
      onClick={onClick}
      className={`
        w-full text-left px-3 py-2.5 rounded-lg transition-all flex items-center justify-between group
        ${isActive 
          ? 'bg-green-50 text-green-700 font-medium shadow-sm' 
          : 'text-gray-700 hover:bg-gray-50'}
      `}
    >
      <div className="flex items-center gap-3">
        <Icon className={isActive ? 'text-green-600' : category.color} size={20} />
        <span className="text-sm">{category.name}</span>
      </div>
      <span className={`
        text-xs px-2 py-0.5 rounded-full font-medium
        ${isActive 
          ? 'bg-green-100 text-green-700' 
          : 'bg-gray-100 text-gray-600'}
      `}>
        {count}
      </span>
    </motion.button>
  );
};


export default CategoryItem;
