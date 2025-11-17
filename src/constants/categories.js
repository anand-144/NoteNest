import { FileText, Folder, Bookmark, Star, Clock } from "lucide-react";

export const CATEGORIES = [
  { name: 'All Notes', icon: FileText, color: 'text-gray-600' },
  { name: 'Work', icon: Folder, color: 'text-blue-600' },
  { name: 'Personal', icon: Bookmark, color: 'text-green-600' },
  { name: 'Ideas', icon: Star, color: 'text-purple-600' },
  { name: 'Archive', icon: Clock, color: 'text-orange-600' }
];