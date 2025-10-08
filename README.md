Lumi - Personal Utility App (Fullstack scaffold)
================================================

What's included:
- /backend : Node + Express API with a generic Item model supporting tasks, notes, habits, expenses, events.
- /frontend: React + Redux Toolkit single-page app with simple UI and pages (Dashboard, Activities, New, Edit).

Quick local run (no Git required)
--------------------------------
1. Backend:
   - cd backend
   - copy .env.example to .env and set MONGO_URI to your MongoDB connection string (do NOT commit secrets).
   - npm install
   - npm run dev

2. Frontend:
   - cd frontend
   - copy .env.example to .env if you need to change API URL (defaults to http://localhost:5000/api)
   - npm install
   - npm start

Deployment notes:
- Backend can be deployed to Render, Heroku, or any Node hosting. Set MONGO_URI in environment.
- Frontend can be deployed to Vercel; set REACT_APP_API_URL in environment to point to backend's /api.

Project structure (short):
/backend
  server.js
  config/db.js
  models/Item.js
  routes/items.js
  package.json
/frontend
  src/
    App.js
    api.js
    store/
      store.js
      itemsSlice.js
    pages/
      Dashboard.js
      Activities.js
      NewItem.js
      EditItem.js
  public/index.html
  package.json

Notes:
- This scaffold is intentionally minimal to give you a clean starting point.
- Customize UI, add authentication, and expand models per Lumi features.
