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
        if(numero == 1){
            this.setState({
                calculos:numero,
                completo:this.state.completo
            })
        }else {
            while(numero != 1){
                if(numero %2 == 0){
                    var operacion  = numero /2;
                    numero = operacion; 
                    this.state.completo.push(numero);
                    this.setState({
                        calculos:numero,
                        completo:this.state.completo
                    })
                }else{
                    var operacion  = numero * 3 + 1;
                    numero = operacion; 
                    this.state.completo.push(numero);
                    this.setState({
                        calculos:numero,
                        completo:this.state.completo
                    })
                }
            }
        } 
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
                    parseInt(this.state.calculos) == 1 && 
                    (
                        this.state.completo.map((valor,index) =>{
                            return(
                                    <li key={index}>{valor}</li>
        
                            )
                        })
                        
                    )
                }
                </ul>
                
            </div>
        </form>
      </div>
    )
  }
}

