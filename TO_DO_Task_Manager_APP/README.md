# 📋 Task Management / To-Do App

A modern and responsive **Task Management / To-Do Application** built using **React.js, Firebase Authentication, Firebase Firestore, Context API, useReducer, and Tailwind CSS**. The application enables users to securely manage their daily tasks with real-time database synchronization.

> 🚀 Developed as **Task 2** for my Internship Project.

---

## 📸 Project Preview

- Login Page
- Register Page
- Dashboard
- Task Management Interface

---

## ✨ Features

### 🔐 Authentication
- User Registration
- Email & Password Login
- Google Sign-In
- Secure Logout
- Firebase Authentication

### ✅ Task Management
- Create New Tasks
- Edit Existing Tasks
- Delete Tasks
- Mark Tasks as Completed
- Undo Completed Tasks

### 🔍 Search & Filter
- Search Tasks
- Filter by Category
- Filter by Priority

### ☁️ Firebase Integration
- Firestore Database
- Real-time Task Updates
- User-specific Task Storage

### 🎨 User Interface
- Responsive Design
- Modern Dashboard
- Tailwind CSS Styling
- Mobile Friendly

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend Framework |
| Context API | Global State Management |
| useReducer | Task State Management |
| Tailwind CSS | UI Styling |
| Firebase Authentication | User Authentication |
| Firebase Firestore | NoSQL Database |
| Vite | Build Tool |

---

# 📂 Project Structure

```text
task-manager-app/
│
├── src/
│   ├── components/
│   │   ├── TaskCard.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── TaskContext.jsx
│   │
│   ├── firebase/
│   │   └── firebase.js
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useTasks.js
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── reducers/
│   │   └── taskReducer.js
│   │
│   ├── services/
│   │   └── taskService.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

# ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/task-manager-app.git
```

### Navigate to the Project

```bash
cd task-manager-app
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

# 🔥 Firebase Setup

Create a Firebase Project.

Enable:

- Authentication
  - Email/Password
  - Google Sign-In

- Firestore Database

Then replace the configuration inside:

```text
src/firebase/firebase.js
```

with your Firebase configuration.

---

# 📊 Functionalities

✔ User Authentication

✔ Google Login

✔ Dashboard

✔ Add Tasks

✔ Edit Tasks

✔ Delete Tasks

✔ Complete Tasks

✔ Undo Tasks

✔ Search Tasks

✔ Category Filter

✔ Priority Filter

✔ Real-time Firestore Updates

---

# 🎯 Learning Outcomes

This project demonstrates practical implementation of:

- React Hooks
- Context API
- useReducer
- Firebase Authentication
- Firestore CRUD Operations
- State Management
- Real-time Database Integration
- Responsive UI Design
- Component-Based Architecture

---

# 🚀 Future Improvements

- Deadline Filter
- Task Sorting
- Dark Mode
- Drag & Drop Tasks
- Due Date Notifications
- Task Categories with Icons
- User Profile Management

---

# 👨‍💻 Author

**Sindhu Sahito**

Software Engineering Student | Data Analytics Enthusiast

---

# 📄 License

This project is developed for educational and internship purposes.

