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
    score, level = predict_risk(
        data.cases, data.mobility, data.vaccination
    )

    return {
        "country": data.country,
        "risk_score": score,
        "risk_level": level
    }