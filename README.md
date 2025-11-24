📇 Contact Manager App

A clean and modern React application for managing contacts.
Built with React Hooks, Context API, React-Hook-Form, Yup, and CSS Modules.

✨ Features

➕ Add new contacts

✏️ Edit existing contacts

🔍 Search contacts by name or last name

🗑️ Delete single or multiple contacts

🧩 Real-time form validation using React Hook Form + Yup

📦 Global state using Context API

💅 Styled using CSS Modules

📱 Responsive and user-friendly UI

🛠️ Technologies Used

React.js

Context API for global state

React Hook Form for form management

Yup for validation

CSS Modules

crypto.randomUUID() for unique ID generation

🚀 Getting Started
Clone the project:
git clone <your-repo-link>
cd contact-manager

Install dependencies:
npm install

Run the app:
npm run dev

🧩 How It Works
➕ Adding a Contact

Click the Add button → modal opens → fill the form → submit.

✏️ Editing

Click on the Edit icon → form pre-fills → update and save.

🔍 Searching

The search bar filters contacts in real-time by name or last name.

🗑️ Multi-Delete

Switch to manage mode → select multiple contacts → delete all at once.

🧮 Validation

All inputs are validated using:

React Hook Form

Yup Schema

📂 Project Structure
src/
├── components/
│ ├── ContactForm.jsx
│ ├── ContactList.jsx
│ └── ContactItem.jsx
├── inputs/
│ └── FormInput.jsx
├── Context/
│ └── UserContext.jsx
├── validation/
│ └── contactSchema.js
├── App.jsx
└── main.jsx

👨‍💻 Developer

Amirhossein Esalat
📧 sltamirhosein@gmail.com
