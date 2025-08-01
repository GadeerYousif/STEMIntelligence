# 🌟STEM Intelligence🌟


Empowering Grades 1–12 students and their parents with high-quality STEM tutoring, EQAO preparation, and engaging online sessions. STEM Intelligence offers personalized support in math and science, delivered by experienced educators through Zoom and other platforms as requested.

---

## 🚀 Tech Stack 🚀

| Layer      | Technology/Library                |
|------------|-----------------------------------|
| Frontend   | React, React Router DOM, react-helmet, EmailJS, sitemap |
| Backend    | Node.js, Express, EmailJS, EmailJS, dotenv, MongoDB Atlas |
| Database   | MongoDB Atlas                     |
| Deployment | Vercel (frontend), Render (backend) |
| SEO        | react-helmet, sitemap.xml, manifest.json |

---

## ✨ Features ✨

- 📧 Contact & Signup forms (send emails via EmailJS)
- 🎥 Zoom-based tutoring sessions (Discord/other platforms on request)
- 📝 EQAO and STEM subject support
- 📱 Responsive, mobile-friendly design
- 🔒 No user authentication required
- 🌐 SEO optimization (meta tags, sitemap.xml, robots.txt)
- 🖼️ Modern, visually appealing UI
- 📨 Email notifications for new signups


---

## 🛠️ Installation Instructions 🛠️

```bash
# 1. Clone the repository
$ git clone https://github.com/yourusername/stem-intelligence.git
$ cd "Tutor website"

# 2. Install dependencies for frontend and backend
$ cd frontend
$ npm install
$ cd ../backend
$ npm install

# 3. Set up environment variables
# Create .env files in both frontend/ and backend/ (see below)

# 4. Run the backend server
$ cd backend
$ npm run dev
# (or npm start for production)

# 5. Run the frontend React app
$ cd ../frontend
$ npm start

# The frontend will run on http://localhost:3000 and backend on http://localhost:5000 (default)
```

---

## 🔑 Environment Variables 🔑

| Variable Name                | Location   | Description                                 |
|-----------------------------|------------|---------------------------------------------|
| REACT_APP_API_URL           | Frontend   | URL of the backend API                      |
| EMAILJS_TUTOR_TEMPLATE_ID   | Frontend   | EmailJS template ID for tutor notifications |
| EMAILJS_CLIENT_TEMPLATE_ID  | Frontend   | EmailJS template ID for client confirmation |
| EMAILJS_SERVICE_ID          | Frontend   | EmailJS service ID                          |
| EMAILJS_PRIVATE_KEY         | Frontend   | EmailJS private key                         |
| EMAILJS_PUBLIC_KEY          | Frontend   | EmailJS public key                          |
| MONGO_URI                   | Backend    | MongoDB Atlas connection string             |
| PORT                        | Backend    | Port for backend server (default: 5000)     |

---

## 📁 Folder Structure 📁

```text
Tutor website/
│
├── frontend/
│   ├── public/           # Static files (index.html, favicon, manifest, sitemap)
│   ├── src/
│   │   ├── assets/       # Images and graphics
│   │   ├── components/   # React components
│   │   │   ├── About/
│   │   │   ├── Home/
│   │   │   ├── Pages/
│   │   │   ├── Services/
│   │   │   ├── shared/
│   │   │   └── SignUp/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/
│   ├── routes/
│   │   └── tutorRequest.js   # Handles signup/contact requests
│   ├── db.js                 # MongoDB connection
│   ├── server.js             # Express server
│   └── package.json
│
└── README.md
```

---

## 🔎 SEO & Accessibility Highlights 🔎

- `react-helmet` for dynamic meta tags
- `sitemap.xml` and `robots.txt` for search engine indexing
- `manifest.json` for PWA support
- Responsive layout for all devices
- Semantic HTML and best practices

---

## 👩‍💻 Author & Contact 👩‍💻

- **Gadeer Yousif**
- 🌐 [https://www.stem-intelligence.ca](https://www.stem-intelligence.ca)
- 📧 stemintelligencetutors@gmail.com

---


## 🤝 Contributing 🤝

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or start a discussion.

> Please be respectful and constructive in all communications. By participating, you agree to uphold our community standards.
