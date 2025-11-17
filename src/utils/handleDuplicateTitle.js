export const handleDuplicateTitle = (notes, title, category, excludeId = null) => {
  const duplicates = notes.filter(
    note => note.title === title && 
    note.category === category && 
    note.id !== excludeId
  );
  
  if (duplicates.length > 0) {
    let counter = 1;
    let newTitle = `${title} (${counter})`;
    
    while (notes.some(note => 
      note.title === newTitle && 
      note.category === category && 
      note.id !== excludeId
    )) {
      counter++;
      newTitle = `${title} (${counter})`;
    }
    
    return newTitle;
  }
  
  return title;
};