# 📗 NoteNest – Notes App

A beautiful, clean, fast note-taking web application inspired by Evernote.
Built with React + Vite + Tailwind CSS + Framer Motion, featuring:

📝 Create, edit, and delete notes
⭐ Star / favorite notes
🔍 Instant search
📁 Category filtering
💾 Auto-save with localStorage
⚡ Smooth animations
📱 Mobile responsive UI
🎨 Clean UI and modular folder structure

# 🚀 Live Demo


# 📦 Tech Stack
| Layer             | Technology                      |
| ----------------- | ------------------------------- |
| Frontend          | React, Vite, Tailwind CSS       |
| Icons             | lucide-react                    |
| Animations        | Framer Motion                   |
| State Persistence | Custom `useLocalStorage` hook   |
| Deployment        | Vercel / Netlify / GitHub Pages |

# 📁 Folder Structure

evernote-clone/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── editor/
│   │   │   ├── Editor.jsx
│   │   │   ├── EditorHeader.jsx
│   │   │   ├── EditorContent.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── modal/
│   │   │   ├── DeleteConfirmModal.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── notes/
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NotesList.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── sidebar/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── CategoryItem.jsx
│   │   │   └── index.js
│   │
│   ├── constants/
│   │   ├── categories.js
│   │   ├── initialNotes.js
│   │   └── index.js
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   │
│   │
│   ├── utils/
│   │   ├── formatDate.js
│   │   ├── filterNotes.js
│   │   ├── handleDuplicateTitle.js
│   │   └── index.js
│   │
│   └── main.jsx
│
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md

# ⚙️ Installation & Setup
1️⃣ Clone the repository
https://github.com/anand-144/NoteNest
cd evernote-clone

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

Now open:
http://localhost:5173

# 🛠 Available Scripts
| Script            | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Runs development server           |
| `npm run build`   | Builds the app for production     |
| `npm run preview` | Previews production build locally |


# 🚀 Deployment Guide
# ✅ Vercel (recommended)

Push project to GitHub
Go to https://vercel.com
Click New Project
Import your GitHub repo
Vercel auto-detects Vite → click Deploy

# Configure Build Settings (VERY IMPORTANT)

Inside the Vercel UI:

| Setting              | Value           |
| -------------------- | --------------- |
| **Framework Preset** | Vite            |
| **Build Command**    | `npm run build` |
| **Output Directory** | `dist`          |
| **Install Command**  | `npm install`   |
| **Node Version**     | 18 or 20        |

# Click “Deploy”

Wait 10–20 seconds…
🎉 Your app is live!

# 🤝 Contributing

Contributions are welcome!
Please open an issue or submit a pull request.

# 📝 License

MIT License — Free to use, modify, and distribute.

