# 🦠 __Epidemic Spread Prediction System__

A full-stack AI-powered web application that predicts infectious disease outbreak risk using epidemiological and environmental data.

---

## 🚀 __Overview__

This project combines machine learning, backend APIs, and a modern frontend to simulate real-world epidemic risk prediction systems.

## Users can input:
* Country
* Case count
* Mobility trends
* Vaccination rate

# __The system then predicts:__

* **Risk Score (0–1)**
* **Risk Level (Low / Medium / High)**

---

## 🧠 __Tech Stack__

### 🔹 __Frontend__

* Next.js (React framework)
* Tailwind CSS

### 🔹 __Backend__

* FastAPI
* Python

### 🔹 __Machine Learning__

* Scikit-learn (Random Forest Regressor)
* Pandas / NumPy
* Joblib (model persistence)

---

## ⚙️ __System Architecture__

__Frontend (Next.js)__<br>

↓<br>

__HTTP Request (POST /predict)__<br>

↓<br>

__Backend (FastAPI)__<br>

↓<br>

__ML Model (Random Forest)__<br>

↓<br>

__Prediction Response (JSON)__<br>


---

## 📊 __Features__

* 📈 Predict outbreak risk using ML model  
* 🌍 Country-based input system  
* ⚡ Fast API response (real-time inference)  
* 🧪 Built-in API testing via Swagger (`/docs`)  
* 🔗 Full frontend-backend integration  
* 🧼 Clean and modular code structure  

---

## 📦 __API Endpoint__

### `POST /predict`

#### __Request Body:__

```json
{
  "country": "India",
  "cases": 10000,
  "mobility": 10,
  "vaccination": 60
}
```

#### __Response:__

```json
{
  "status": "success",
  "data": {
    "country": "India",
    "risk_score": 0.65,
    "risk_level": "Medium"
  }
}
```

## 🛠️__Setup Instructions__

### __1. Clone Repository__

```bash
git clone <repo-link>
cd project-folder
```

### __2. Backend Link__

```
https://practice-project-v4en.onrender.com/
```

### __3. Frontend Setup__

```bash
cd frontend
npm install
npm run dev
```

### __Open:__

```
http://localhost:3000
```

## 📁 __Project Structure__

```
/backend
  ├── main.py
  ├── model.py
  ├── train.py
  ├── model.pkl
  └── requirements.txt

/frontend
  ├── app/
  ├── components/
  └── styles/
```

## 🧠 __Learning Outcomes__

* Built and deployed a full-stack ML application

* Integrated ML model with REST API

* Handled frontend-backend communication

* Solved real-world issues (CORS, hydration, API errors)

* Understood deployment pipelines

## 👥 __Contributors__

__Backend & ML:__ Ujan-Sarkhel

__Frontend:__ DebCoder1618

