import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Board from './Board';


class ToGame extends Component {
    render() {

        return (
            <div 
                className="game"
            >
                <header>
                    <nav 
                        id="nav" 
                        className="navbar navbar-inverse navbar-static-top navbar-expand-lg justify-content-between"
                    >
                        <a 
                            className="navbar-brand text-white"
                        >
                            <h2 
                                className="nombre text-responsive"
                            >
                                <img
                                    id="logo"
                                    src={Logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt=""
                                />
                                ECOPAY
                            </h2>
                        </a> 
                            <div 
                                className="navbar-nav"
                            >
                                <Link 
                                    to="/principal"
                                >
                                    <button 
                                        id="bntGame" 
                                        className="nav-item text-white btn rounded-pill mr-1"
                                    >
                                        Inicio
                                    </button>
                                </Link>
                            </div>
                    </nav>
                </header>
                <div 
                    className="App container"
                >        
                    <Board/>        
                 </div>
                <footer 
                    className="footer"
                >
                    <div 
                        className="card-footer bg-transparent border-success text-center text-white"
                    >
                        By Team ECOPAY
                    </div>
                </footer>
            </div>
        );
    }
}

export default ToGame;