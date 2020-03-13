const express = require('express');

const app = express();

const ctrl = require('./controller');

app.use(express.json())

const PORT = 5500;

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));