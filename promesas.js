const axios = require('axios');

const url_base='https://goodreads-devf-aaron.herokuapp.com/';

// de esta forma la reconoce como promesa
async function createAuthor(nombre, apellidos, nacionalidad, biografia, genero,edad, vivo){
  try {
    const respuesta = await axios.post(url_base + 'api/v1/authors/', {   //axios lo que nos responde es una promesa
      name: nombre,
      last_name: apellidos,
      nacionalidad: nacionalidad,
      biography: biografia,
      gender: genero,
      age: edad,
      is_alive: vivo
    });

    console.log(respuesta.data);

  } catch (e) {
    console.log(e);
  }   
}

async function consultaAutor(id) {
  try {
    const respuesta = await axios.get(url_base + '/api/v1/authors/' + id + '/');
    return respuesta.data;
  } catch(e) {
    console.log("Ups! Ocurrió un error al consultar el autor con id " + id);
  }
}

async function modificaAutor(id, autor) {
  const respuesta = await axios.put(url_base + '/api/v1/authors/' + id + '/', {
    id: id,
    name: autor.name,
    last_name: autor.last_name,
    nacionalidad: autor.nacionalidad,
    biography: autor.biography,
    gender: autor.gender,
    age: autor.age,
    is_alive: autor.is_alive
  });

  return respuesta.data;
}

async function main() {
  // console.log(await consultaAutor(5000));
  console.log(await modificaAutor(3382, {
    name: "Topiltzin",
    last_name: "Hernández",
    nacionalidad: "MX",
    biography: "Developer",
    gender: "M",
    age: 20,
    is_alive: true
  }));
}

main();