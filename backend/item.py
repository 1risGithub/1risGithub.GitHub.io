from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from backend.database import get_connection

router = APIRouter()

class ItemCreate(BaseModel):
    name: str
    description: str
    location: str
    status: str

@router.post("/add")
def add_item(item: ItemCreate):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO items (name, description, location, status) VALUES (%s, %s, %s, %s)", 
                   (item.name, item.description, item.location, item.status))
    conn.commit()
    return {"message": "Item added successfully"}

@router.get("/list")
def list_items():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, description, location, status FROM items")
    items = cursor.fetchall()
    if not items:
        raise HTTPException(status_code=404, detail="No items found")
    return [{"id": i[0], "name": i[1], "description": i[2], "location": i[3], "status": i[4]} for i in items]