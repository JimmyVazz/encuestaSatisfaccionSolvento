import React, { Component } from 'react'
import Encuesta from './Encuesta/Encuesta';

class EncuestasRH extends Component{

    constructor(props){
        super(props)
        this.state = {
          encuestas: []
        }
      }

      componentDidMount () {
        console.log('hola')
        fetch('https://solvento-encuesta.herokuapp.com/rh')
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
                          folioEmpresa = {encuesta.folioEmpresa}
                          respuesta1 = {encuesta.respuesta1}
                          respuesta2_justi = {encuesta.respuesta2}
                          respuesta3 = {encuesta.respuesta3}
                          respuesta4 = {encuesta.respuesta4}
                          respuesta5 = {encuesta.respuesta5}
                          key = {index}
                      />
                    })
                    }
                </div>
            </div>
            
        )
    }
}

export default EncuestasRH   

