

# 🏫 School Management System

A full-stack application to add schools with geolocation data and list them by distance using the Haversine formula.

---


##  Tech Stack

**Frontend:** React
**Backend:** Node.js, Express, MySQL 
**Database:** MySQL
**Other:** RESTful API, Environment-based configuration.


---
## Features

- Add new schools with geolocation data.
- Retrieve a list of schools sorted by proximity to the user's location.
- Uses Haversine formula for accurate distance calculation.
- RESTful API design with modular environment-based configuration.

##  API Endpoints

### `POST /addSchool`

```json
{
  "name": "ABC School",
  "address": "123 Main St",
  "latitude": 17.385,
  "longitude": 78.4867
}
````

#### `GET /listSchools?latitude=...&longitude=...`

Fetches a list of schools sorted by distance from the provided geolocation.

## Example:

```bash
GET /listSchools?latitude=17.385&longitude=78.4867
```

Response:
```
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "123 Main St",
    "latitude": 17.385,
    "longitude": 78.4867,
    "distance": 0.0
  },
  ...
]

```

---

##  Run Locally

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

**.env file:**

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=schoolDB
PORT=3000

```
