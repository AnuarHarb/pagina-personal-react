import React, { Component, Fragment } from 'react';

class InfoForm extends Component {
  constructor() {
    super()
  }

  onSubmit(event) {
    event.preventDefault();
    const nombre = event.target.nombre.value;
    const apellido = event.target.apellido.value;
    const edad = event.target.edad.value;

    const infoBody = {
      nombre,
      apellido,
      edad
    }
    const url = 'http://localhost:8000/api';
    const config = {
      method: 'post',
      body: JSON.stringify(infoBody),
      headers: {
        "Content-Type": "application/json"
      }
    }

    fetch(`${url}/info`, config)
      .then(resp => {
        alert('Se creó correctamente');
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Fragment>
        <p> Crear nuevo usuario </p>
        <form onSubmit={this.onSubmit}>
          <input
            name="nombre"
            placeholder= "nombre"
          />
          <input
            name="apellido"
            placeholder= "apellido"
          />
          <input
            name="edad"
            placeholder= "edad"
          />
          <input
            type="submit"
            value="crear"
          />
        </form>
      </Fragment>
    )
  }
}

export default InfoForm;
