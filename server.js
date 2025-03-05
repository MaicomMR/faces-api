require('dotenv').config();
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

const router = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
app.use('/', router);
app.use(errorHandler);

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
}

module.exports = app;