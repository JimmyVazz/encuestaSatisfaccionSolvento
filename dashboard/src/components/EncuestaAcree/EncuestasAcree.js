import React, { Component } from 'react'
import Encuesta from './Encuesta/Encuesta';

class EncuestasAcree extends Component{

    constructor(props){
        super(props)
        this.state = {
          encuestas: []
        }
      }

      componentDidMount () {
        console.log('hola')
        fetch('https://solvento-encuesta.herokuapp.com/')
          .then(response => response.json())
          .then(data => {
            console.log('data: ', data.data)
            this.setState({
              encuestas: data.data
            })
          })
          .catch(error => {
            console.error('Error: ', error)
          })
      }  

      render(){
        return(
            
            <div className="container">
                <div className="row">
                    {
                    this.state.encuestas.map( (encuesta, index) => {
                      return <Encuesta
                          folioCliente = {encuesta.folioCliente}
                          respuesta1 = {encuesta.respuesta1}
                          respuesta2 = {encuesta.respuesta2}
                          respuesta3_justi = {encuesta.respuesta3}
                          respuesta4 = {encuesta.respuesta4}
                          key = {index}
                      />
                    })
                    }
                </div>
            </div>
            
        )
    }
}

export default EncuestasAcree    

