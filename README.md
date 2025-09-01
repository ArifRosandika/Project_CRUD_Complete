# 🚀 Full Stack CRUD Application

A simple **Full Stack CRUD (Create, Read, Update, Delete)** application built with **Node.js (Express), MySQL, and React (with Axios)**.  
This project demonstrates how to build a complete CRUD system with a clean structure and reusable components.

---

## 📌 Features
- Add new users 
- Display users in a list/table
- Edit and update user data
- Delete users with confirmation
- Responsive UI
- Clean backend API structure
- Example of database integration using MySQL

---

## 🛠️ Tech Stack
**Frontend**
- React (Vite or CRA)
- Axios for API requests
- Tailwind CSS (optional for styling)

**Backend**
- Node.js & Express.js
- MySQL (Sequelize ORM)
- CORS & dotenv for environment configuration

---

## ⚙️ Installation

### 1. Clone Repository
```bash
git clone https://github.com/ArifRosandika/Project_CRUD_Complete.git
cd Project_CRUD_Complete
2. Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file:

env
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=crud_db
PORT=5000
Run the server:

bash
Copy code
npm run dev
3. Frontend Setup
bash
Copy code
cd frontend
npm install
npm run dev
Frontend will run by default on http://localhost:5173 (Vite).
Backend will run on http://localhost:5000.

🗂️ Project Structure
bash
Copy code
Project_CRUD_Complete/
│
├── backend/          
|   ├── config             # Database
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── controllers/       # Controller User
│   ├── server.js          # Entry point
│   └── .env               # Environment variables
│
├── frontend/              # React App
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Pages
│   │   └── App.jsx
│   └── vite.config.js
│
└── README.md
📸 Screenshots
Add screenshots of your app here (optional)

📌 Future Improvements
🔍 Add search & filtering

📑 Add pagination

🎨 Improve UI with Tailwind or Material UI

🔐 Add authentication & authorization

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.