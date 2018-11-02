require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const app = express();
const port = 5090;
const massive = require('massive');

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('Connected to the db')
})
.catch((err) => {
    console.log(err)
})

app.get('/api/houses', ctrl.getHouses);
app.post('/api/houses', ctrl.addHouse);
// app.put('/api/houses', ctrl.getHouses);
app.delete('/api/houses/:id', ctrl.deleteHouse);


app.listen( port, () => console.log(`We are live on port ${port}`));