const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const pino = require('pino-http')();
const governanceRoutes = require('./routes/governance');

const { startListener } = require('./services/blockchainListener');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Start Blockchain Listener
startListener();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(pino);

// Routes
app.use('/api/governance', governanceRoutes);

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dao_platform')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
