from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas import InputData
from model import predict_risk

app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Outbreak Risk API Running"}

@app.post("/predict")
def predict(data: InputData):
    print(data)
    if data.cases < 0:
        return {"error": "Cases cannot be negative"}

    if data.vaccination < 0 or data.vaccination > 100:
        return {"error": "Vaccination must be between 0 and 100"}

    if data.mobility < -20 or data.mobility > 100:
        return {"error": "Mobility must be between -20 and 100"}


    score, level = predict_risk(
        data.cases, data.mobility, data.vaccination
    )

    return {
    "status": "success",
    "data": {
        "country": data.country,
        "risk_score": score,
        "risk_level": level
    }
    }
    

