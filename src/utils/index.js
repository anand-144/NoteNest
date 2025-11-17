export * from "./formatDate";
export * from "./filterNotes";
export * from "./handleDuplicateTitle";

export const getCategoryCount = (notes, categoryName) => {
  if (categoryName === "All Notes") return notes.length;
  return notes.filter((note) => note.category === categoryName).length;
};
