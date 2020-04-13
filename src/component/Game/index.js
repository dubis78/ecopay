import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Logo from '../../images/logo.png';
import Pikachu from '../../images/pikachu.png';
import Bullbasaur from '../../images/bullbasaur.png';
import Charmander from '../../images/charmander.png';
import Jigglypuff from '../../images/jigglypuff.png';

class Game extends Component {
    render() {

        return (
            <div className="game">
                <header>
                    <nav id="nav" className="navbar navbar-inverse navbar-static-top navbar-expand-lg navbar-light justify-content-between text-responsive">
                        <a className="navbar-brand text-white" href="#">
                            <h2 className="nombre text-responsive"><img
                                id="logo"
                                src={Logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt=""
                            />
                            ECOPAY</h2>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            {/*<span className="navbar-toggler-icon"></span>*/}
                        </button>
                        {/*<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">*/}
                            <div className="navbar-nav">
                            <Link to="/home">
                                    <button id="bntGame" className="nav-item active text-white btn rounded-pill">Inicio {/*<span
                                        className="sr-only"></span>*/}</button>
                            </Link>
                            <Link to="/learning">
                                <button id="bntGame" className="nav-item text-white btn rounded-pill">Aprendamos Juntos</button>
                            </Link>
                            </div>
                        {/*</div>*/}
                    </nav>
                </header>
                <h1 className="text-center p-4">Selecciona el nivel</h1>
                <article>
                    <div className="container align-items-center justify-content-center">
                        <div className="row row-cols-2">
                            <div className="col d-flex justify-content-center">
                                <Link className="btn1" to="/togame">
                                    <button
                                        type="button"
                                        className="btn mr-1 p-4"
                                    >
                                        <img className="img-fluid" src={Pikachu} alt=""/>
                                    </button>
                                </Link>
                            </div>
                            <div className="col d-flex justify-content-center">
                                {/* <Link className="btn1" to="/game">*/}
                                <button
                                    type="button"
                                    className="btn mr-1 p-4"
                                >
                                    <img className="img-fluid" src={Bullbasaur} alt=""/>
                                </button>
                                {/*</Link>*/}
                            </div>
                            <div className="col d-flex justify-content-center">
                                <h2 className="text-black text-center p-2 text-wrap">Nivel 1</h2>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <h2 className="text-black text-center p-2 text-wrap">Nivel 2</h2>
                            </div>
                        </div>
                        <div className="row row-cols-2">
                            <div className="col d-flex justify-content-center">
                                {/* <Link className="btn1" to="/game">*/}
                                <button
                                    type="button"
                                    className="btn mr-1 p-4"
                                >
                                    <img className="img-fluid" src={Charmander} alt=""/>
                                </button>
                                {/*</Link>*/}
                            </div>
                            <div className="col d-flex justify-content-center">
                                {/* <Link className="btn1" to="/game">*/}
                                <button
                                    type="button"
                                    className="btn mr-1 p-4"
                                >
                                    <img className="img-fluid" src={Jigglypuff} alt=""/>
                                </button>
                                {/*</Link>*/}
                            </div>
                            <div className="col d-flex justify-content-center">
                                <h2 className="text-black text-center p-2 text-wrap">Nivel 3</h2>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <h2 className="text-black text-center p-2 text-wrap">Nivel 4</h2>
                            </div>
                        </div>
                    </div>
                </article>
                <footer className="footer">
                    <div className="card-footer bg-transparent border-success text-center text-white">By Team ECOPAY</div>
                </footer>
            </div>
        );
    }
}

export default Game;