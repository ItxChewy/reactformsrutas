import React, { Component } from 'react'

export default class FormSimple extends Component {

    cajaNombre = React.createRef();
    cajaEdad = React.createRef();

    state ={
        user:null
    }
    
    peticionForm = (e) => {
        e.preventDefault();
        console.log("peticion lista")
        var nombre = this.cajaNombre.current.value;
        var edad = parseInt(this.cajaEdad.current.value);
        this.setState({
            user:{
                nombre:nombre,
                edad:edad
            }
        })
    }


  render() {
    return (
      <div>
        <h1>Formulario Simple React</h1>
        {
            this.state.user &&
            (
            <h2 style={{color:"blueviolet"}}>
                Nombre: {this.state.user.nombre}<br/>
                Edad: {this.state.user.edad}
            </h2>
            )
        }
        <form onSubmit={this.peticionForm}>
            <label>Nombre: </label>
            <input type='text' ref={this.cajaNombre}></input><br/>
            <label>Edad: </label>
            <input type='text' ref={this.cajaEdad}></input><br/>
            <button>Enviar Datos</button>
        </form>
      </div>
    )
  }
}
