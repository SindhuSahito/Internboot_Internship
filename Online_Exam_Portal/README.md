# 🎓 Online Examination Portal

A web-based **Online Examination Portal** developed using **Django** and **SQLite**. This project enables administrators to create and manage online examinations while allowing students to securely register, log in, attempt timed exams, and instantly view their results.

---

## 📌 Project Overview

The Online Examination Portal is designed to simplify the examination process by providing a secure and user-friendly platform for both administrators and students.

Administrators can create exams, add multiple-choice questions, define correct answers, and monitor student performance.

Students can register, log in, take timed examinations, and receive immediate feedback on their scores and performance.

---

## 🚀 Features

### 👨‍🎓 Student Features

- Secure User Registration
- Secure Login & Logout
- Student Dashboard
- View Available Exams
- Start Timed Examination
- Countdown Timer
- Automatic Submission when Time Ends
- Instant Score Calculation
- Pass / Fail Status
- Previous Exam Attempts
- Performance History

---

### 👨‍💼 Administrator Features

- Django Admin Panel
- Create Exams
- Update Exams
- Delete Exams
- Add Questions
- Add Multiple Choice Options
- Mark Correct Answers
- View Student Attempts
- Manage Examination Data

---

## 🛠 Technology Stack

- Python
- Django
- SQLite
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- Font Awesome

---

## 📂 Project Structure

```
Online Exam Portal/
│
├── accounts/
│
├── exams/
│
├── online_exam_portal/
│
├── templates/
│
├── static/
│
├── db.sqlite3
│
├── manage.py
│
└── requirements.txt
```

---

## 🗄 Database Models

### Student
- Django Built-in User Authentication

### Exam
- Title
- Description
- Duration
- Passing Score

### Question
- Exam
- Question Text
- Marks

### Option
- Question
- Option Text
- Correct Answer

### Attempt
- Student
- Exam
- Score
- Percentage
- Pass/Fail
- Submission Date

---

## 📷 System Modules

### Home Page

- Professional Landing Page
- Login
- Registration

### Authentication

- User Registration
- User Login
- User Logout

### Student Dashboard

- Available Exams
- Completed Exams
- Average Score
- Previous Attempts

### Examination Module

- Multiple Choice Questions
- Countdown Timer
- Auto Submission
- Instant Result Generation

### Administration Panel

- Manage Exams
- Manage Questions
- Manage Options
- View Student Attempts

---

## ⏱ Timed Examination

Each examination includes:

- Configurable Duration
- JavaScript Countdown Timer
- Automatic Submission when Time Expires

---

## 📊 Result Generation

After submitting an exam, the system automatically calculates:

- Total Score
- Percentage
- Pass / Fail Status

Student performance is stored permanently in the SQLite database.

---

## 🔒 Authentication

This project uses Django's built-in Authentication System.

- User Registration
- Login
- Logout
- Session Management
- Access Control using Login Required Decorators

---

## ⚙ Installation Guide

### Clone Repository

```bash
git clone https://github.com/yourusername/online-examination-portal.git
```

### Navigate to Project

```bash
cd "Online Exam Portal"
```

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Virtual Environment

Windows

```bash
venv\Scripts\activate
```

Linux / Mac

```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Apply Migrations

```bash
python manage.py migrate
```

### Create Superuser

```bash
python manage.py createsuperuser
```

### Run Server

```bash
python manage.py runserver
```

Open:

```
http://127.0.0.1:8000/
```

Admin Panel:

```
http://127.0.0.1:8000/admin/
```

---

## 📸 Screenshots

You can add screenshots here.

- Home Page
- Student Dashboard
- Login Page
- Registration Page
- Examination Page
- Result Page
- Admin Panel

---

## 🎯 Learning Outcomes

Through this project I gained practical experience in:

- Django Framework
- SQLite Database
- Authentication System
- CRUD Operations
- Model Relationships
- Template Inheritance
- Bootstrap UI Design
- JavaScript Timer
- Form Handling
- Database Migrations
- Git & GitHub

---

## 📌 Future Improvements

- Question Randomization
- Negative Marking
- PDF Result Generation
- Leaderboard
- Email Notifications
- Exam Categories
- Subject-wise Exams
- Charts & Analytics
- Export Reports to Excel/PDF
- Student Profile Management

---

## 👨‍💻 Developed By

**Sindhu**

Software Engineering Student

Passionate about **Python, Data Analytics, AI, and Full Stack Development.**

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
