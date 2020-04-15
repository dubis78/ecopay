import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Video from './movie';



class Learning extends Component {
    render() {

        return (
            <div 
                className="learning"
            >
                <header>
                    <nav 
                        id="nav" 
                            className="navbar navbar-inverse navbar-static-top navbar-expand-lg navbar-light justify-content-between"
                        >
                            <a 
                                className="navbar-brand text-white"
                            >
                                <h2 
                                    className="text-responsive"
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
                            <button 
                                className="navbar-toggler"
                                type="button"
                            >
                            </button>
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
                                <Link to="/game"
                                >
                                    <button 
                                        id="bntGame" 
                                        className="nav-item text-white btn rounded-pill mr-1"
                                        >
                                            Juego
                                    </button>
                                </Link>
                            </div>
                    </nav>
                </header>
                <main>
                    <Video />
                </main>
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

export default Learning;