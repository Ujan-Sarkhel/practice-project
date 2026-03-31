def predict_risk(cases, mobility, vaccination):
    score = (cases / 100000) + (-mobility / 100) + (1 - vaccination / 100)
    
    if score > 1:
        level = "High"
    elif score > 0.5:
        level = "Medium"
    else:
        level = "Low"

    return round(score, 2), level