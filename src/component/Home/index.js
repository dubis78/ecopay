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
        if (user != null && user.nombres !== "") {
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
                                >
                                    <h2
                                        className="text-responsive"
                                    >
                                        <img
                                            id="logo"
                                            src={Logo}
                                            width="30"
                                            height="30"
                                            className="d-inline-block"
                                            alt=""
                                        />
                                        <span>
                                            ECOPAY
                                    </span>
                                    </h2>
                                </a>
                                <p
                                    className="text-white"
                                >
                                    Bienvenid@ {user.nombres}!
                            </p>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                >
                                </button>
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
                            </nav>
                        </header>

                        <h1
                            className="text-center text-black text-wrap p-5"
                        >
                            Selecciona la caneca que corresponde al residuo
                        </h1>

                        <div class="container">
                            <div class="row p-4">
                                <div
                                    className="col-sm d-flex justify-content-center"
                                >
                                    <Link
                                        className="btn1 mr-1 p-3 text-body"
                                        to="/learning"
                                    >

                                        <img
                                            className="img-fluid"
                                            src={Ordinarios}
                                            alt=""
                                        />
                                        <h2
                                            className="text-body text-center p-2"
                                        >
                                            Orgánicos
                                        </h2>
                                    </Link>
                                </div>
                                <div
                                    className="col-sm d-flex justify-content-center"
                                >
                                    <Link
                                        className="btn1 mr-1 p-3 text-body"
                                        to="/learning"
                                    >
                                        <img
                                            className="img-fluid"
                                            src={Metales}
                                            alt=""
                                        />
                                        <h2
                                            className="text-body text-center p-2"
                                        >
                                            Metales
                                        </h2>
                                    </Link>
                                </div>
                                <div
                                    className="col-sm d-flex justify-content-center"
                                >
                                    <Link
                                        className="btn1 mr-1 p-3 text-body"
                                        to="/learning"
                                    >
                                        <img
                                            className="img-fluid"
                                            src={Organicos}
                                            alt=""
                                        />
                                        <h2
                                            className="text-body text-center p-2"
                                        >
                                            Ordinarios
                                        </h2>
                                    </Link>
                                </div>
                            </div>
                            <div class="row p-4">
                                <div
                                    className="col-sm d-flex justify-content-center"
                                >
                                    <Link
                                        className="btn1 mr-1 p-3 text-body"
                                        to="/learning"
                                    >
                                        <img
                                            className="img-fluid"
                                            src={Papel}
                                            alt=""
                                        />
                                        <h2
                                            className="text-body text-center p-2"
                                        >
                                            Papel y cartón
                                        </h2>
                                    </Link>
                                </div>
                                <div
                                    className="col-sm d-flex justify-content-center"
                                >
                                    <Link
                                        className="btn1 mr-1 p-3 text-body"
                                        to="/learning"
                                    >
                                        <img
                                            className="img-fluid"
                                            src={Plastico}
                                            alt=""
                                        />

                                        <h2
                                            className="text-body text-center p-2"
                                        >
                                            Plástico
                                            </h2>
                                    </Link>
                                </div>
                                <div
                                    className="col-sm d-flex justify-content-center"
                                >
                                    <Link
                                        className="btn1 mr-1 p-3 text-body"
                                        to="/learning"
                                    >
                                        <img
                                            className="img-fluid"
                                            src={Vidrio}
                                            alt=""
                                        />
                                        <h2
                                            className="text-body text-center p-2"
                                        >
                                            Vídrio
                                            </h2>
                                    </Link>
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
