import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Acreeditado from '../Acreeditados/Acreeditados'
import RH from '../RH/RH'


class Navbar extends Component {
    render(){
        return(
          <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Encuestas de satisfacción</a>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                      <Link className="mx-3 text-white" to="/">Estadistícas Acreeditados</Link>
              </li>
              <li className="nav-item">
              <Link className="mx-3 text-white" to="/RH/">Estadistícas RH</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={Acreeditado}/>
        <Route path="/RH/" component={RH}/>
        </Router>
        )
    }
}

export default Navbar