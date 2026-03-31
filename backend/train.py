import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import joblib

# Load dataset
# df = pd.read_csv("data.csv")  # you can replace later with real dataset

# Example structure (you can simulate for now)
# columns: cases, mobility, vaccination, risk_score

# If you don't have data yet, create dummy data:
df = pd.DataFrame({
    "cases": [1000, 5000, 10000, 20000],
    "mobility": [-10, -20, 5, 10],
    "vaccination": [20, 40, 60, 80],
    "risk_score": [0.2, 0.5, 0.7, 0.9]
})

# Features & target
X = df[["cases", "mobility", "vaccination"]]
y = df["risk_score"]

# Train model
model = RandomForestRegressor()
model.fit(X, y)

# Save model
joblib.dump(model, "model.pkl")

print("Model trained and saved!")