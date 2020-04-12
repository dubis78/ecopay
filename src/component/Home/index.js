import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";

import Logo from '../../images/logo.png';
import Ordinarios from '../../images/ordinarios.png';
import Metales from '../../images/metales.png';
import Organicos from '../../images/organicos.png';
import Papel from '../../images/papel.png';
import Plastico from '../../images/plastico.png';
import Vidrio from '../../images/vidrio.png';
import './home.css';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    signOut() {
        localStorage.clear();
        window.location.reload(false);
    }
    render() {
        let user = JSON.parse(localStorage.getItem('user')); //estamos recibiendo el formato json
        if (user != null && user.nombres != "") {
            return (
                <>

                    <div 
                        className="home"
                    >
                    <header>
                        <nav 
                            id="nav" 
                            className="navbar navbar-inverse navbar-static-top navbar-expand-lg justify-content-between"
                        >
                            <a 
                                className="navbar-brand text-white" 
                                href="#"
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
                                ECOPAY</h2>
                            </a>
                            <p
                                className="text-white"
                            >
                                        Bienvenid@ {user.nombres}!
                            </p>
                            <button 
                                className="navbar-toggler" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation">
                            </button>
                            {/*<div 
                                className="collapse navbar-collapse justify-content-end" 
                                id="navbarNavAltMarkup"
                            >*/}
                                <div 
                                    className="navbar-nav"
                                >
                                    <Link 
                                        to="/game"
                                    >
                                        <button 
                                            id="bntGame" 
                                            className="nav-item active text-white btn rounded-pill"
                                        >
                                            Jugar 
                                            <span
                                                className="sr-only"
                                            >
                                            </span>
                                        </button>
                                    </Link>
                                    <Link to="/Login1">
                                        <button 
                                            id="bntGame" 
                                            className="nav-item text-white btn rounded-pill" 
                                            onClick={this.signOut}
                                        >
                                            Salir
                                        </button>
                                    </Link>
                                </div>
                            {/*</div>*/}
                        </nav>
                    </header>
                        
                        <h1
                            className="text-center text-black text-wrap"
                        >
                            Selecciona la caneca que corresponde al residuo
                        </h1>

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
                                        className="btn1" to="/learning"
                                    >
                                        <button
                                            type="button"
                                            className="btn mr-1"
                                        >
                                            <img
                                                className="img-fluid"
                                                src={Ordinarios}
                                                alt=""
                                            />
                                        </button>
                                    </Link>
                                </div>
                                <div
                                    className="col d-flex justify-content-center"
                                >
                                    <Link
                                        className="btn1"
                                        to="/learning"
                                    >
                                        <button
                                            type="button"
                                            className="btn mr-1"
                                        >
                                            <img
                                                className="img-fluid"
                                                src={Metales}
                                                alt=""
                                            />
                                        </button>
                                    </Link>
                                </div>
                                <div
                                    className="col d-flex justify-content-center"
                                >
                                    <h2
                                        className="text-black text-center p-2 text-wrap"
                                    >
                                        Orgánicos
                                    </h2>
                                </div>
                                <div
                                    className="col d-flex justify-content-center"
                                >
                                    <h2
                                        className="text-black text-center p-2 text-wrap"
                                    >
                                        Metales
                                    </h2>
                                </div>
                            </div>
                            <div
                                className="row row-cols-2"
                            >
                                <div
                                    className="col d-flex justify-content-center"
                                >
                                    <Link
                                        className="btn1"
                                        to="/learning"
                                    >
                                        <button
                                            type="button"
                                            className="btn mr-1"
                                        >
                                            <img
                                                className="img-fluid"
                                                src={Organicos}
                                                alt=""
                                            />
                                        </button>
                                    </Link>
                                </div>
                                <div
                                    className="col d-flex justify-content-center"
                                >
                                    <Link
                                        className="btn1"
                                        to="/learning"
                                    >
                                        <button
                                            type="button"
                                            className="btn mr-1"
                                        >
                                            <img
                                                className="img-fluid"
                                                src={Papel}
                                                alt=""
                                            />
                                        </button>
                                    </Link>
                                </div>
                                <div
                                    className="col d-flex justify-content-center"
                                >
                                    <h2
                                        className="text-black text-center p-2 text-wrap"
                                    >
                                        Ordinarios
                                    </h2>
                                </div>
                                <div
                                    className="col d-flex justify-content-center"
                                >
                                    <h2
                                        className="text-black text-center p-2 text-wrap"
                                    >
                                        Papel y cartón
                                    </h2>
                                </div>
                            </div>
                            <div
                                className="row row-cols-2"
                            >
                                <div
                                    className="col d-flex justify-content-center"
                                >
                                    <Link
                                        className="btn1"
                                        to="/learning"
                                    >
                                        <button
                                            className="btn5"
                                            type="button"
                                            className="btn mr-1"
                                        >
                                            <img
                                                className="img-fluid"
                                                src={Plastico}
                                                alt=""
                                            />
                                        </button>
                                    </Link>
                                </div>
                                <div
                                    className="col d-flex justify-content-center"
                                >
                                    <Link
                                        className="btn1"
                                        to="/learning"
                                    >
                                        <button
                                            className="btn6"
                                            type="button"
                                            className="btn mr-1"
                                        >
                                            <img
                                                className="img-fluid"
                                                src={Vidrio}
                                                alt=""
                                            />
                                        </button>
                                    </Link>
                                </div>
                                <div
                                    className="col d-flex justify-content-center"
                                >
                                    <h2
                                        className="text-black text-center p-2 text-wrap"
                                    >
                                        Plástico
                                    </h2>
                                </div>
                                <div
                                    className="col d-flex justify-content-center"
                                >
                                    <h2
                                        className="text-black text-center p-2 text-wrap"
                                    >
                                        Vídrio
                                    </h2>
                                </div>
                            </div>
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
                </>
            );
        }
        else {
            return <Redirect to='/' />
        }
    }
}


export default Home;
