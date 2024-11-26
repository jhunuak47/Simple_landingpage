# Simple_landingpage  

This repository contains the code for the **Simple_landingpage**, a web application designed to manage and showcase projects, clients, and other essential information. This project is built with modern web technologies and includes both frontend and backend components.

## 🛠 Technologies Used  

### Frontend
- **React.js**: For building the user interface.
- **Axios**: For making API requests to the backend.
- **CSS**: For styling components.

### Backend
- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for handling routes and APIs.
- **MongoDB Atlas**: Cloud database for storing project, client, and subscription data.
- **Mongoose**: ODM for interacting with MongoDB.
- **Heroku**: For hosting the backend and frontend.

---

## ✨ Features
- **Projects Management**: View and manage projects with descriptions and images.
- **Clients Section**: Display client testimonials dynamically fetched from the backend.
- **Newsletter Subscription**: Subscribe users and save their email addresses to the database.
- **Responsive Design**: Fully responsive and works on all devices.
- **Cloud Deployment**: Backend and frontend are deployed on Heroku.

---

## 🚀 How to Run Locally  

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14 or later)
- **npm** (Node Package Manager)
- **MongoDB Atlas account** (for database setup)
- **Git** (for cloning the repository)

---

### Steps to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/jhunuak47/Simple_landingpage.git
   cd Simple_landingpage
   ```

2. **Set Up the Backend**
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Install backend dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` directory with the following content:
     ```
     MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
     NODE_ENV=development
     REACT_APP_BACKEND_URL=http://localhost:5000
     ```
   - Replace `<username>`, `<password>`, `<cluster>`, and `<dbname>` with your MongoDB Atlas credentials.

3. **Start the Backend Server**
   ```bash
   npm start
   ```

4. **Set Up the Frontend**
   - Navigate to the `frontend` folder:
     ```bash
     cd ../frontend
     ```
   - Install frontend dependencies:
     ```bash
     npm install
     ```

5. **Start the Frontend**
   ```bash
   npm start
   ```

6. **View the Application**
   - Open your browser and visit:  
     `http://localhost:3000` for the frontend.  
     The backend will run on `http://localhost:5000`.

---

## 📂 Folder Structure

```
Simple_landingpage/
├── backend/
│   ├── config/
│   │   └── db.js           # MongoDB connection setup
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── .env                # Environment variables
│   ├── server.js           # Main backend file
│   └── package.json        # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── App.js          # Main React App file
│   │   └── index.js        # Entry point
│   ├── public/             # Static files
│   ├── .env                # Frontend environment variables
│   └── package.json        # Frontend dependencies
├── README.md               # Project documentation
└── .gitignore              # Ignored files and folders
```

---

## 🌐 Live Demo
The application is live at:  
**[Flipr Landing Page - Heroku](https://flipr-project-57ca1f0bf8c6.herokuapp.com)**

---

## 🤔 Approach  

1. **Planning**: Designed the folder structure to separate frontend and backend for maintainability.
2. **Database Design**: Created schemas for projects, clients, and subscribers using Mongoose.
3. **API Development**: Built RESTful APIs for managing projects, clients, and subscriptions.
4. **Frontend Integration**: Connected the backend APIs with the React frontend using Axios.
5. **Styling**: Ensured responsive design using CSS and media queries.
6. **Deployment**: Deployed the application to Heroku with separate build and hosting for frontend and backend.

---

## 📝 License  
This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author  
- **Name**: Navin Kumar  
- **GitHub**: [@jhunuak47](https://github.com/jhunuak47)  
- **Email**: jhunu1201@gmail.com  

Feel free to reach out for feedback or contributions!
