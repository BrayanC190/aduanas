const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());


const MetodosGet = require('./MetodosGet'); // Selects
const MetodosPost = require('./MetodosPost'); //Inserts
const MetodosPut = require('./MetodosPut'); //Update


app.get('/tabla/:tableName', MetodosGet.getTabla);
app.get('/tablaReferencia', MetodosGet.getTablaReferencia);
app.get('/VerTablaOperacion', MetodosGet.getVerTablaOperacion);

app.post('/registro', MetodosPost.registro);
app.post('/registroMercancia', MetodosPost.registroMercancia);
app.post('/registroBuque', MetodosPost.registroBuque);
app.post('/registroTransportista', MetodosPost.registroTransportista);
app.post('/registroVehiculo', MetodosPost.registroVehiculo);
app.post('/registroOperacion', MetodosPost.registroOperacion);
app.post('/Aumentoestatus', MetodosPost.aumentoEstatus);

app.put('/UpdateOperacion', MetodosPut.updateOperacion);


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/`);
});
