require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
app.use('/', router);

app.use(cors());
app.use(express.json());

    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
