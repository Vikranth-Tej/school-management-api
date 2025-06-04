Here’s a full, polished `README.md` file tailored for your **School Management Fullstack App** — with both backend and frontend, API usage, tech stack, folder structure, and deployment notes.

---

```markdown
# 🏫 School Management System (Fullstack App)

This is a fullstack web application built to manage schools — including the ability to add school details and list them based on user location using **distance-based sorting** (Haversine formula).


## 🧠 Tech Stack

### Backend
- Node.js
- Express.js
- MySQL2
- dotenv
- CORS

### Frontend
- React.js
- Axios
- Bootstrap (or vanilla CSS)
- React Hooks (`useEffect`, `useState`)

---

## 🚀 API Endpoints

### `POST /addSchool`

Add a new school to the database.

**Request Body (JSON):**
```json
{
  "name": "ABC School",
  "address": "123 Main Street",
  "latitude": 17.385,
  "longitude": 78.4867
}
````

**Response:**

```json
{
  "message": "School added",
  "id": 1
}
```

---

### `GET /listSchools?latitude=<userLat>&longitude=<userLong>`

List all schools sorted by **distance** from user's location.

**Example:**

```
GET /listSchools?latitude=17.385&longitude=78.4867
```

**Response:**

```json
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "123 Main Street",
    "latitude": 17.385,
    "longitude": 78.4867,
    "distance": 0.0
  },
  ...
]
```

---

## 🧪 Postman Testing

* Use `POST http://localhost:3000/addSchool` to add schools.
* Use `GET http://localhost:3000/listSchools?latitude=xx&longitude=yy` to list them by distance.
* Set Headers: `Content-Type: application/json`

---

## 💡 Environment Variables (`.env`)

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=schoolDB
PORT=3000
```

---

## ⚙️ To Run Locally

### 🛠 Backend

```bash
cd school-management-api
npm install
npm run dev
```

### 💻 Frontend

```bash
cd school-frontend
npm install
npm start
```

---

## 🌍 Deployment Plan (on Render)

**Backend**:

* Use Render to deploy Node.js app
* Use MySQL hosted DB or Render PostgreSQL alternative

**Frontend**:

* Deploy via Render Static Site or GitHub Pages
* Set `REACT_APP_BACKEND_URL=https://your-backend-url.onrender.com` in frontend `.env`

---

## 🛡️ License

This project is licensed under the MIT License.

