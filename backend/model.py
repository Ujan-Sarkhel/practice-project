import joblib
import numpy as np
import pandas as pd

# Load once (important!)
model = joblib.load("model.pkl")

def predict_risk(cases, mobility, vaccination):
    X = pd.DataFrame([{
    "cases": cases,
    "mobility": mobility,
    "vaccination": vaccination
    }])
    
    prediction = model.predict(X)[0]

    # Convert to risk level
    if prediction > 0.7:
        level = "High"
    elif prediction > 0.4:
        level = "Medium"
    else:
        level = "Low"

    return round(float(prediction), 2), level