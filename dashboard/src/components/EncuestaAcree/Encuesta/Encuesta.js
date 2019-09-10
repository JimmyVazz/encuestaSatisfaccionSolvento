import React, {Component} from 'react'

class Encuesta extends Component {
    render(){
        return(
            <div className="col-12 col-sm-3">
            <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{this.props.folioCliente}</h5>
                  <p className="card-text">{this.props.respuesta1}</p>
                  <p className="card-text">{this.props.respuesta2}</p>
                  <p className="card-text">{this.props.respuesta3_justi}</p>
                  <p className="card-text">{this.props.respuesta4}</p>
                  

                </div>
              </div>
              </div>
        )
    }
}

export default Encuesta