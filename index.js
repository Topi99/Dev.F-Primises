const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, resp) => {
  resp.send('<h1>hola mundo</h1>');
});

app.get('/json', (req, resp) => {
  resp.json({ mensaje: 'Mi primer respuesta como JSON.' });
});

app.get('/vars', (req, resp) => {
  const mensaje = req.query.mensaje;

  resp.send('El mensaje fue: ' + mensaje);
});

app.get('/post/:id', (req, resp) => {
  const id = req.params.id;

  if(!id) {
    return resp.send(400).json({ error: 'No se recibió ningún valor en el id.' });
  }

  resp.send('Se buscará un post con el id igual a ' + id);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});