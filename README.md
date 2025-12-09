# TruEstate — Sales Management System

## 1. Overview
TruEstate is a Sales Management System that provides a searchable, filterable, sortable, and paginated view over a structured sales dataset. The backend is implemented in Flask with SQLAlchemy and exposes a `/api/sales` endpoint; the frontend is a React + Tailwind app that consumes the API and renders a dashboard with filters, stat cards and a transactions table.

## 2. Tech Stack
- Backend: Python, Flask, SQLAlchemy, pandas (CSV importer)
- Frontend: React, Vite, Tailwind CSS, Axios
- Database: SQLite (default; instructions include how to switch to MySQL/Postgres)
- Dev tools: Git, pip, Node.js, npm

## 3. Search Implementation Summary
Full-text, case-insensitive search is implemented on `customer_name` and `phone_number`. The backend accepts a `q` query parameter and applies a SQL `ILIKE '%q%'` filter for both columns; results are combined with OR so either field matches.

## 4. Filter Implementation Summary
Backend supports multi-select and range filters via query parameters:
- Multi-select (comma-separated or repeated params): `regions`, `genders`, `categories`, `payment_method`
- Range: `ageMin`, `ageMax`
- Date range: `dateFrom`, `dateTo` (ISO format)
- Tags: comma-separated `tags` parameter (matches any tag using `ILIKE`)
Filters can be used independently or in combination and are applied conjunctively (AND) to narrow results.

## 5. Sorting Implementation Summary
Sorting is implemented by an `ordering` or `sort` parameter:
- `ordering=-date` or `sort=date_desc` → Date (newest first)
- `ordering=date` or `sort=date_asc` → Date (oldest first)
- `ordering=quantity` or `sort=quantity` → Quantity
- `ordering=customer_name` or `sort=name` → Customer name A→Z  
Sorting respects existing search and filter params.

## 6. Pagination Implementation Summary
Server-side pagination uses page-number pagination with a default page size of 10. Query params:
- `page` (1-based index)
- `page_size` (optional override)
API response includes total item count and total pages so frontend can render next/previous and page controls.

## 7. Setup Instructions
1. Clone repository:
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>

   Backend (Flask)

cd backend
python -m venv venv
# Windows
venv\Scripts\activate
# mac/linux
source venv/bin/activate
pip install -r requirements.txt
# Import dataset (place dataset.csv at backend/ or provide full path)
python utils/import_csv.py --path="dataset.csv" --drop
# Start server (default: http://localhost:4000)
python app.py
![image alt]()
