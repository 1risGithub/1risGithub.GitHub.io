from fastapi import APIRouter, HTTPException
from backend.database import get_connection

router = APIRouter()

@router.get("/items")
def search_items(query: str):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, description, location, status FROM items WHERE name LIKE %s OR description LIKE %s", 
                   (f"%{query}%", f"%{query}%"))
    items = cursor.fetchall()
    if not items:
        raise HTTPException(status_code=404, detail="No matching items found")
    return [{"id": i[0], "name": i[1], "description": i[2], "location": i[3], "status": i[4]} for i in items]
