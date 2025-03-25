# Discord Text Generator

🚀 **Discord Text Generator** is a web-based tool that allows users to apply ANSI color and background styles to text and copy the formatted output for use in Discord. With a simple and interactive UI built using **React, Vite, and Mantine UI**, this project enhances text customization and improves Discord message aesthetics.

## 🎨 Features
- **Real-Time Text Styling** – Apply ANSI colors to selected text dynamically.
- **Copy ANSI Formatted Text** – Generate ANSI-styled text that can be copied and pasted directly into Discord.
- **User-Friendly Editor** – A clean and intuitive text editor with content-editable support.
- **Dark Mode Support** – Built with a modern, Discord-like dark theme.
- **Mantine UI Components** – Styled using Mantine for a sleek and responsive UI.

## 🛠️ Tech Stack
- **React** – Component-based UI development
- **Vite** – Fast and optimized build system
- **Mantine UI** – Customizable UI components
- **JavaScript (ES6+)** – Logic and functionality
- **CSS** – Styling and theme management

## 📂 Folder Structure
```
📦 discord-text-generator
├── 📂 src
│   ├── 📂 components
│   │   ├── CopyButton.jsx
│   │   ├── TextEditor.jsx
│   │   ├── Toolbar.jsx
│   ├── 📂 styles
│   │   ├── colors.js
│   ├── App.jsx
│   ├── main.jsx
├── 📂 public
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
```

## 🚀 Deployment
This project is deployed on Vercel at:-
https://discord-text-generator-theta.vercel.app/


## 🏗️ Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/SohamMkj/discord-text-generator.git
   cd discord-text-generator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 📜 License
This project is open-source under the **MIT License**.

---
💡 Feel free to contribute, suggest features, or report issues! 🎉




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
