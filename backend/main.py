from fastapi import FastAPI
from backend.user import router as user_router
from backend.item import router as item_router
from backend.search import router as search_router
from backend.report import router as report_router
from backend.database import get_connection

app = FastAPI()

# ตรวจสอบการเชื่อมต่อ Database
@app.on_event("startup")
def startup_db():
    try:
        conn = get_connection()
        conn.close()
        print("✅ Database connected successfully!")
    except Exception as e:
        print(f"❌ Database connection failed: {e}")

# Register routers
app.include_router(user_router, prefix="/user", tags=["User"])
app.include_router(item_router, prefix="/item", tags=["Item"])
app.include_router(search_router, prefix="/search", tags=["Search"])
app.include_router(report_router, prefix="/report", tags=["Report"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Lost and Found API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)

import os
from dotenv import load_dotenv

load_dotenv()

print("🔍 DEBUG: DB_USER =", os.getenv("DB_USER"))
