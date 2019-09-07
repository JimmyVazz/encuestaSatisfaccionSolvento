import React, { Component } from 'react';
import './App.css';
import logosol01 from './logosol01.svg'
import Contactanos from './components/Contactanos/Contactanos'
import { geolocated } from "react-geolocated";

class App extends Component{

  aleatorio = (minimo,maximo) => {
  return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}

  constructor(){
    super();
    this.state = {
        respuesta1:"Rápido",
        respuesta2:"Sí",
        respuesta3_justi:"",
        respuesta4:"Sí",
        latitude: "",
        longitud: ""
    }
    this.getMyLocation = this.getMyLocation.bind(this)
}


componentDidMount() {
  this.getMyLocation()
}

getMyLocation() {
  const location = window.navigator && window.navigator.geolocation
  
  if (location) {
    location.getCurrentPosition((position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    }, (error) => {
      this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
    })
  }

}



handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
}

handleSubmit = (event) => {
  
  alert("¡Gracias por tus comentarios!. Ya puedes cerrar esta página.")
  event.preventDefault();
  
    console.log(this.state)
    const { respuesta1 , respuesta2 , respuesta3_justi , respuesta4, latitude, longitude} = this.state
    let latitudes = String(latitude)
    let longitudes = String(longitude)
    let folioCliente = ""+latitudes+", "+longitudes
    fetch('https://solvento-encuesta.herokuapp.com/encuesta',{
        method:"POST",
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({folioCliente, respuesta1 , respuesta2 , respuesta3_justi , respuesta4, latitude, longitude})
    })
    .then(response => {
      if (response.status !== 200){
        console.error("error")
      }
        console.log(response)
        
    }).catch(err=>{
      console.error(err)
    })
    this.setState({
      respuesta1:"Rápido",
      respuesta2:"Sí",
      respuesta3_justi:"",
      respuesta4:"Sí"
  })

    
}

handleNext = (event) => {
  event.preventDefault();
  this.render(
    <Contactanos />
  )
}




  render(){
    const { respuesta1 , respuesta2 , respuesta3_justi , respuesta4} = this.state
    // const variable = respuesta3_justi
    // if(variable !== ""){
    //   return <Redirect to="/home" />
    // }
    return (
      
  <div>
  <img id="imagen" src={logosol01}/>
  <div className="container">
  <div className="row">
    <div className="col-12 col-sm-6 offset-sm-3 py-3">
  <form onSubmit={this.handleSubmit} className="border border-dark shadow rounded p-3">
  <div className="form-group" align="center">
    <label htmlFor="exampleFormControlInput1">Por favor, ayúdanos a mejorar tu experiencia llenando la siguiente encuesta de satisfacción:</label>
      </div>
  <div className="form-group" align="center">
    <label htmlFor="respuesta1">El tiempo del proceso de tu crédito con SOLVENTO fue:</label>
    <select className="form-control" id="respuesta1" name="respuesta1" required={true} value={respuesta1} onChange={this.handleChange}>
      <option>Rápido</option>
      <option>Moderado</option>
      <option>Lento</option>
    </select>
  </div>
  <div className="form-group" align="center">
    <label htmlFor="respuesta2">¿Consideras que el trámite de tu crédito fue sencillo?</label>
    <select className="form-control" id="respuesta2" name="respuesta2" required={true} value={respuesta2} onChange={this.handleChange}>
      <option>Sí</option>
      <option>No</option>
    </select>
  </div>
  <div className="form-group" align="center">
    <label htmlFor="respuesta3_justi">¿Porqué?</label>
    <textarea className="form-control" id="respuesta3_justi" rows="3" name="respuesta3_justi" required={true} value={respuesta3_justi} onChange={this.handleChange}></textarea>
  </div>
  <div className="form-group" align="center">
    <label htmlFor="respuesta4">¿Recomendarías a SOLVENTO con un compañero de trabajo?</label>
    <select className="form-control" id="respuesta4" name="respuesta4" required={true} value={respuesta4} onChange={this.handleChange}>
      <option>Sí</option>
      <option>No</option>
    </select>
  </div>
  <div className="form-group" align="center">
  <button type="submit" className="btn btn-outline-info">Enviar</button>
   </div>   
  </form>
  </div>
  </div>
  </div>
</div>
    );
  }
}

export default App;



