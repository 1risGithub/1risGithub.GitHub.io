from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from backend.database import get_connection
import jwt
import os

router = APIRouter()
SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")

class UserRegister(BaseModel):
    username: str
    password: str

class UserLogin(BaseModel):
    username: str
    password: str

@router.post("/register")
def register(user: UserRegister):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (user.username, user.password))
    conn.commit()
    return {"message": "User registered successfully"}

@router.post("/login")
def login(user: UserLogin):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id FROM users WHERE username=%s AND password=%s", (user.username, user.password))
    user_data = cursor.fetchone()
    if user_data:
        token = jwt.encode({"user_id": user_data[0]}, SECRET_KEY, algorithm="HS256")
        return {"message": "Login successful", "token": token}
    raise HTTPException(status_code=401, detail="Invalid credentials")