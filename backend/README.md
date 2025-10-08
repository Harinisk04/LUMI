Lumi - Backend
---------------

Setup:
1. Copy .env.example to .env and set MONGO_URI (use your MongoDB connection string).
2. Install dependencies:
   cd backend
   npm install
3. Run dev:
   npm run dev
Endpoints:
- GET /api/items                -> list items (query: type)
- GET /api/items/:id            -> get item
- POST /api/items               -> create item
- PUT /api/items/:id            -> update item
- DELETE /api/items/:id         -> delete item

The Item model is generic and can represent tasks, notes, habits, expenses, and events using `type`.
