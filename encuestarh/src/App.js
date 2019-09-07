import React, { Component } from 'react';
import './App.css';
import logosol01 from './logosol01.svg'

class App extends Component{

  aleatorio = (minimo,maximo) => {
  return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}

  constructor(){
    super();
    this.state = {
      respuesta1:"Excelente",
      respuesta2_justi:"",
      respuesta3:"Sí",
      respuesta4:"Sí",
      respuesta5: "",
	latitude: "",
	longitude: ""
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
    const { respuesta1 , respuesta2_justi , respuesta3, respuesta4, respuesta5, latitude, longitude} = this.state
    let latitudes = String(latitude)
    let longitudes = String(longitude)
    let folioEmpresa = ""+latitudes+", "+longitudes
    fetch('https://solvento-encuesta.herokuapp.com/rh',{
        method:"POST",
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({folioEmpresa, respuesta1 , respuesta2_justi , respuesta3, respuesta4, respuesta5, latitude, longitude})
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
      respuesta1:"Excelente",
      respuesta2_justi:"",
      respuesta3:"Sí",
      respuesta4:"Sí",
      respuesta5: ""
  })

    
}
  render(){
    const { respuesta1 , respuesta2_justi , respuesta3, respuesta4, respuesta5} = this.state
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
    <label htmlFor="respuesta1">¿Cómo consideras el servicio que ofrece SOLVENTO a tu empresa?</label>
    <select className="form-control" id="respuesta1" name="respuesta1" required={true} value={respuesta1} onChange={this.handleChange}>
      <option>Excelente</option>
      <option>Bueno</option>
      <option>Regular</option>
      <option>Malo</option>
    </select>
  </div>
  <div className="form-group" align="center">
    <label htmlFor="respuesta2_justi">¿Porqué?, explica tu respuesta:</label>
    <textarea className="form-control" id="respuesta2_justi" rows="3" name="respuesta2_justi" required={true} value={respuesta2_justi} onChange={this.handleChange}></textarea>
  </div>
  <div className="form-group" align="center">
    <label htmlFor="respuesta3">¿Recomendarías a SOLVENTO con otra empresa?</label>
    <select className="form-control" id="respuesta3" name="respuesta4" required={true} value={respuesta3} onChange={this.handleChange}>
      <option>Sí</option>
      <option>No</option>
    </select>
  </div>
  <div className="form-group" align="center">
    <label htmlFor="respuesta4">¿Consideras que solvento constituye un valor agregado a tu organización?</label>
    <select className="form-control" id="respuesta4" name="respuesta4" required={true} value={respuesta4} onChange={this.handleChange}>
      <option>Sí</option>
      <option>No</option>
    </select>
  </div>
   <div className="form-group" align="center">
    <label htmlFor="respuesta5">¿Cómo podríamos mejorar nuestro servicio?</label>
    <textarea className="form-control" id="respuesta5" rows="3" name="respuesta5" required={true} value={respuesta5} onChange={this.handleChange}></textarea>
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

