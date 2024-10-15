import React, { Component } from 'react'

export default class Collatz extends Component {
    
    state ={
        calculos:null,
        completo:[]
    }
    
    cajaNumero = React.createRef();

    calculosCollatz = (e) =>{
        e.preventDefault();
        var numero = parseInt(this.cajaNumero.current.value)
        this.state.completo.push(numero);
        while (numero !== 1) {
            if (numero % 2 === 0) {
                numero = numero / 2;
            } else {
                numero = numero * 3 + 1;
            }
            this.state.completo.push(numero); 
        }
        this.setState({
            calculos: numero,
            completo: this.state.completo
        }); 
    }

    render() {
    return (
      <div>
        <h1>Collatz</h1>
        <form onSubmit={this.calculosCollatz}>
            <label>Inserte el numero:</label>
            <input type='text' ref={this.cajaNumero}></input><br/>
            <button>Calcular...</button>
            <div>
                <ul>
                {
                    this.state.completo.map((valor,index) =>{
                        return(
                            <li key={index}>{valor}</li>
                            )
                        })  
                }
                </ul>
            </div>
        </form>
      </div>
    )
  }
}

