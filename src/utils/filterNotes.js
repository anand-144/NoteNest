const getCategoryCount = (notes, categoryName) => {
  if (categoryName === 'All Notes') return notes.length;
  return notes.filter(note => note.category === categoryName).length;
};

export const filterNotes = (notes, selectedCategory, searchQuery) => {
  return notes.filter(note => {
    const matchesCategory = selectedCategory === 'All Notes' || note.category === selectedCategory;
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
};