📇 Contact Manager App

A simple and modern contact manager built with React.
This project focuses on clean UI, proper state management, and form validation.

The main goal of this app was to practice working with forms, global state, and reusable components in a real-world scenario.

Features

Add new contacts

Edit existing contacts

Search contacts by name or last name

Delete single or multiple contacts

Real-time form validation

Global state management

Responsive and clean UI

Tech Stack

React.js

Context API

React Hook Form

Yup

CSS Modules

Unique IDs are generated using crypto.randomUUID().

Getting Started

Clone the repository:

git clone https://github.com/your-username/contact-manager.git
cd contact-manager

Install dependencies:

npm install

Run the project:

npm run dev

Application Flow
Adding a Contact

Click on the Add button, fill out the form, and submit to add a new contact.

Editing a Contact

Click the Edit icon on a contact. The form will be pre-filled, allowing you to update the information.

Searching

Use the search input to filter contacts by first name or last name in real time.

Deleting Contacts

You can delete contacts individually or switch to manage mode and remove multiple contacts at once.

Validation

All form inputs are validated using React Hook Form with a Yup schema.

Project Structure
src/
├── components/
│ ├── ContactForm.jsx
│ ├── ContactList.jsx
│ └── ContactItem.jsx
├── inputs/
│ └── FormInput.jsx
├── context/
│ └── UserContext.jsx
├── validation/
│ └── contactSchema.js
├── App.jsx
└── main.jsx

Developer

Amirhossein Esalat
Email: sltamirhosein@gmail.com
