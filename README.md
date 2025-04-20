# 🚀 Responsive Portfolio Website using React JS & Tailwind CSS




https://github.com/user-attachments/assets/5520a754-dd15-4a2a-bdad-0cdd3815246d

🎬 **watch a full walkthrough of the project.**

## 📖 Overview

Hi there! I’m Pahan Sanjana, a Software Engineering undergraduate at ICBT Campus (Cardiff Metropolitan University, UK affiliated). This is my personal responsive portfolio website built using **React JS** and **Tailwind CSS**. It showcases my projects, experience, and a way to connect—all in a clean, modern design that works on any screen size.

## ✨ Features

- ✅ Fully responsive and mobile-friendly
- ✅ React component-based architecture
- ✅ Tailwind CSS for fast and clean styling
- ✅ Sections: About, Experience, Projects, and Contact
- ✅ Easy to maintain and extend

## 🧠 Pre-requisites

You should be familiar with:

- 🔤 HTML & CSS
- 🧠 JavaScript basics
- ⚛️ React fundamentals

## 🛠 Tools & Technologies Used

- React JS
- Tailwind CSS
- JavaScript
- Node.js & npm
- VS Code

## 🚧 Project Setup

1️⃣ **Create the Project**
```bash
npx create-react-app portfolio
cd portfolio
```
2️⃣  **Install & Configure Tailwind CSS**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Update tailwind.config.js with your file paths:
```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
Import Tailwind directives in src/index.css:
```bash
@import "tailwindcss";
```

3️⃣ **Component Structure**
Organize files like this:
```plaintext
src/
├── components/
│   ├── Header/
│   ├── About/
│   ├── Projects/
│   ├── Contact/
│   └── Footer/
```
Each folder contains a dedicated component for its section.

4️⃣ **Tailwind Styling Example**
```bash
<div className="text-center py-10 bg-gray-900 text-white">
  <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
</div>
```

## 🌐 Deployment
Deploy the final build using any of the following platforms:

🔗 GitHub Pages
⚡ Vercel
🌍 Netlify

## 💻 Running Locally
```bash
npm run dev
```
Open http://localhost:5173 to view it in the browser.
