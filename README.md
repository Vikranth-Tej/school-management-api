---

# 🏫 School Management System

A fullstack app to add schools and list them by distance using the Haversine formula.

---

## 📁 Structure

```

school-management-api/
├── controllers/
├── models/
├── routes/
├── utils/
├── school-frontend/
│   └── src/components/
│       ├── AddSchoolForm.jsx
│       └── SchoolList.jsx
├── db.js
├── index.js
└── .env, package.json, etc.

````

---

## 🧰 Tech Stack

**Backend:** Node.js, Express, MySQL  
**Frontend:** React, Axios

---

## 🚀 API

### `POST /addSchool`

```json
{
  "name": "ABC School",
  "address": "123 Main St",
  "latitude": 17.385,
  "longitude": 78.4867
}
````

### `GET /listSchools?latitude=...&longitude=...`

Returns schools sorted by distance.

---

## ⚙️ Run Locally

**Backend:**

```bash
cd school-management-api
npm install
npm run dev
```

**Frontend:**

```bash
cd school-frontend
npm install
npm start
```

**.env Example:**

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=schoolDB
PORT=3000
```

---

## 🌐 Deployment

* Backend: Render (Node.js + MySQL)
* Frontend: Render Static Site / GitHub Pages

```
```
