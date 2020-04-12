import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";

import Logo from '../../images/logo.png';
import Ordinarios from '../../images/ordinarios.png';
import Metales from '../../images/metales.png';
import Organicos from '../../images/organicos.png';
import Papel from '../../images/papel.png';
import Plastico from '../../images/plastico.png';
import Vidrio from '../../images/vidrio.png';


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

                    <div className="home">
                        <header>
                            <nav
                                id="nav"
                                className="navbar w-auto nav-pills nav-fill flex-sm-row"
                            >
                                <a className="navbar-brand text-white text-wrap" href="#">
                                    <img id="logo" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                                ECOPAY
                        </a>
                                <p className="text-white">Bienvenid@{user.nombres}!</p>


                                <Link className="bntGame" to="/game">
                                    <button id="bntGame" className="nav-item text-white btn rounded-pill" href="#quien-soy">Jugar</button>

                                </Link>
                                <Link to="/Login1">
                                    <button id="bntGame" className="nav-item text-white btn rounded-pill bntGame" onClick={this.signOut}>Salir</button>
                                </Link>
                            </nav>
                        </header>
                        <h1 className="text-center text-black text-wrap">Selecciona la caneca que corresponde al residuo</h1>

                        <div className="container align-items-center justify-content-center">
                            <div className="row row-cols-2">
                                <div className="col d-flex justify-content-center">
                                    <Link className="btn1" to="/learning">
                                        <button
                                            type="button"
                                            className="btn mr-1"
                                        >
                                            <img className="img-fluid" src={Ordinarios} />
                                        </button>
                                    </Link>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <Link className="btn1" to="/learning">
                                        <button
                                            type="button"
                                            className="btn mr-1"
                                        >
                                            <img className="img-fluid" src={Metales} />
                                        </button>
                                    </Link>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <h2 className="text-black text-center p-2 text-wrap">Orgánicos</h2>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <h2 className="text-black text-center p-2 text-wrap">Metales</h2>
                                </div>
                            </div>
                            <div className="row row-cols-2">
                                <div className="col d-flex justify-content-center">
                                    <Link className="btn1" to="/learning">
                                        <button
                                            type="button"
                                            className="btn mr-1"
                                        >
                                            <img className="img-fluid" src={Organicos} alt="" />
                                        </button>
                                    </Link>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <Link className="btn1" to="/learning">
                                        <button
                                            type="button"
                                            className="btn mr-1"
                                        >
                                            <img className="img-fluid" src={Papel} alt="" />
                                        </button>
                                    </Link>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <h2 className="text-black text-center p-2 text-wrap">Ordinarios</h2>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <h2 className="text-black text-center p-2 text-wrap">Papel y cartón</h2>
                                </div>
                            </div>
                            <div className="row row-cols-2">
                                <div className="col d-flex justify-content-center">
                                    <Link className="btn1" to="/learning">
                                        <button
                                            className="btn5"
                                            type="button"
                                            className="btn mr-1"
                                        >
                                            <img className="img-fluid" src={Plastico} />
                                        </button>
                                    </Link>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <Link className="btn1" to="/learning">
                                        <button
                                            className="btn6"
                                            type="button"
                                            className="btn mr-1"
                                        >
                                            <img className="img-fluid" src={Vidrio} />
                                        </button>
                                    </Link>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <h2 className="text-black text-center p-2 text-wrap">Plástico</h2>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <h2 className="text-black text-center p-2 text-wrap">Vídrio</h2>
                                </div>
                            </div>
                        </div>
                        <footer className="footer">
                            <div className="card-footer bg-transparent border-success text-center text-white">By Team ECOPAY</div>
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
