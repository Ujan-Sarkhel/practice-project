from pydantic import BaseModel

class InputData(BaseModel):
    country: str
    cases: float
    mobility: float
    vaccination: float