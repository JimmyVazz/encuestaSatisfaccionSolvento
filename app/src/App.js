import React, { Component } from 'react';
import './App.css';
import logosol01 from './logosol01.svg'

class App extends Component{

  constructor(){
    super();
    this.state = {
        respuesta1:"Rápido",
        respuesta2:"Sí",
        respuesta3_justi:"",
        respuesta4:"Sí"
    }
}

handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
}

handleSubmit = (event) => {
  

    event.preventDefault();
    console.log(this.state)
    const { respuesta1 , respuesta2 , respuesta3_justi , respuesta4} = this.state
    let folioCliente = 10
    fetch('https://solvento-encuesta.herokuapp.com/encuesta',{
        method:"POST",
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({folioCliente, respuesta1 , respuesta2 , respuesta3_justi , respuesta4})
    })
    .then(response => {
      if (response.status !== 200){
        console.error("error")
      }
        console.log(response)
    }).catch(err=>{
      console.error(err)
    })
}


  render(){
    const { respuesta1 , respuesta2 , respuesta3_justi , respuesta4} = this.state
    return (
      
  <div className="container">
  <img id="imagen" src={logosol01}/>
  {/* <div className="row"> */}
    <div className="col-12 col-sm-6 offset-sm-3 py-3">
  <form onSubmit={this.handleSubmit} >
  <div className="form-group" align="center">
    <label htmlFor="exampleFormControlInput1">Por favor, ayúdanos a mejorar tu experiencia llenando la siguiente encuesta de satisfacción:</label>
      </div>
  <div className="form-group">
    <label htmlFor="respuesta1">El tiempo del proceso de tu crédito con SOLVENTO fue:</label>
    <select className="form-control" id="respuesta1" name="respuesta1" value={respuesta1} onChange={this.handleChange}>
      <option>Rápido</option>
      <option>Moderado</option>
      <option>Lento</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="respuesta2">¿Consideras que el trámite de tu crédito fue sencillo?</label>
    <select className="form-control" id="respuesta2" name="respuesta2" value={respuesta2} onChange={this.handleChange}>
      <option>Sí</option>
      <option>No</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="respuesta3_justi">¿Porqué?</label>
    <textarea className="form-control" id="respuesta3_justi" rows="3" name="respuesta3_justi" value={respuesta3_justi} onChange={this.handleChange}></textarea>
  </div>
  <div className="form-group">
    <label htmlFor="respuesta4">¿Recomendarías a SOLVENTO con un compañero de trabajo?</label>
    <select className="form-control" id="respuesta4" name="respuesta4" value={respuesta4} onChange={this.handleChange}>
      <option>Sí</option>
      <option>No</option>
    </select>
  </div>
 
  <button type="submit" className="btn btn-outline-success">Enviar</button>
      
  </form>
  </div>
  {/* </div> */}
</div>
    );
  }
}

export default App;



