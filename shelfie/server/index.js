require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const ctrl = require('./controller');
const {SERVER_PORT, CONNECTION_STRING} = process.env;


app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(db => {
    app.set('db', db)
    console.log('DB Connected')
})

app.get('/api/inventorylist', ctrl.getInventory)
app.get('/api/product/:id', ctrl.getOneProduct)
app.post('/api/product', ctrl.addProduct)
app.put('/api/product/:id', ctrl.editProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)

const PORT = 5533;
app.listen(SERVER_PORT, () => console.log(`SERVER RUNNING ON PORT ${SERVER_PORT}`));