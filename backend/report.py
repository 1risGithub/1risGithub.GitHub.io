from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from backend.database import get_connection

router = APIRouter()

class ReportCreate(BaseModel):
    item_id: int
    details: str

@router.post("/submit")
def submit_report(report: ReportCreate):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO reports (item_id, details) VALUES (%s, %s)", (report.item_id, report.details))
    conn.commit()
    return {"message": "Report submitted successfully"}

@router.get("/list")
def list_reports():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, item_id, details FROM reports")
    reports = cursor.fetchall()
    if not reports:
        raise HTTPException(status_code=404, detail="No reports found")
    return [{"id": r[0], "item_id": r[1], "details": r[2]} for r in reports]