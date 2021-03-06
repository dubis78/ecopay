import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Logo from '../../images/logo.png';
import Pikachu from '../../images/pikachu.png';
import Bullbasaur from '../../images/bullbasaur.png';
import Jigglypuff from '../../images/jigglypuff.png';

class Game extends Component {
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
                                <span>
                                    ECOPAY
                                </span>
                            </h2>
                        </a>
                        <div 
                            className="navbar-nav"
                        >
                            <Link 
                                to="/home"
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
                <h1 
                    className="text-center p-5 text-white"
                >
                    SELECCIONA EL NIVEL
                </h1>
                <article className="bg">
                    <div 
                        className="container align-items-center justify-content-center"
                    >
                        <div 
                            className="row row-cols-2"
                        >
                            <div 
                                className="col d-flex justify-content-center"
                            >
                                <Link 
                                    className="btn1 bg-transparent" 
                                    to="/togame1"
                                >
                                    <button
                                        type="button"
                                        className="btn mr-1 p-4"
                                    >
                                        <img 
                                            className="img-fluid" 
                                            src={Pikachu} 
                                            alt=""
                                        />
                                    </button>
                                </Link>
                            </div>
                            <div 
                                className="col d-flex justify-content-center"
                            >
                            <Link className="btn1 bg-transparent" 
                                to="/togame2">
                                <button
                                    type="button"
                                    className="btn mr-1 p-4"
                                >
                                    <img 
                                        className="img-fluid" 
                                        src={Bullbasaur} 
                                        alt=""
                                    />
                                </button>
                                </Link>
                            </div>
                            <div 
                                className="col d-flex justify-content-center"
                            >
                                <h2 
                                    className="text-white text-center p-2 text-wrap"
                                >
                                    Nivel 1
                                </h2>
                            </div>
                            <div 
                                className="col d-flex justify-content-center">
                                <h2 
                                    className="text-white text-center p-2 text-wrap"
                                >
                                    Nivel 2
                                </h2>
                            </div>
                        </div>
                        <div 
                            className="row row-cols-1"
                        >
                            <div 
                                className="col d-flex justify-content-center">                                
                                <Link 
                                    className="btn1 bg-transparent" 
                                    to="/togame3">
                                <button
                                    type="button"
                                    className="btn mr-1 p-4"
                                >
                                    <img 
                                        className="img-fluid" 
                                        src={Jigglypuff} 
                                        alt=""
                                    />
                                </button>
                                </Link>
                            </div>
                            <div 
                                className="col d-flex justify-content-center"
                            >
                                <h2 
                                    className="text-white text-center p-2 text-wrap"
                                >
                                    Nivel 3
                                </h2>
                            </div>
                        </div>
                    </div>
                </article>
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

export default Game;