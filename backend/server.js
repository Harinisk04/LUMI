const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(express.json());

// ✅ Allow both local and deployed frontend
const allowedOrigins = [
  'http://localhost:3000', // local frontend
  'https://lumi-frontend.up.railway.app' // deployed frontend (optional)
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// ✅ Routes
app.use('/api/items', require('./routes/items'));

// ✅ Test route
app.get('/', (req, res) => {
  res.send('✅ Lumi API is running successfully!');
});

// ✅ Dynamic Port (important for Railway)
const PORT = process.env.PORT || 5000;

// ✅ Listen and show correct URL
app.listen(PORT, () => {
  const railwayURL = process.env.RAILWAY_PUBLIC_DOMAIN
    ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
    : `http://localhost:${PORT}`;
    
  console.log(`✅ Server running at: ${railwayURL}`);
});
