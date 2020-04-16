import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Canecasmetales from '../../images/metales.jpg'

class Metals extends Component {
    render() {
        return (

            <div
                className="metales"
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
                <article className="bg">
                    <div className="container p-5">
                        <div className="row d-flex align-items-center p-5">                            
                            <div className="col-sm">
                                <img className="img-fluid mx-auto d-block border border-dark" src={Canecasmetales} alt="" />
                            </div>
                            <div className="col-sm justify-content-center">
                                <h2 className="text-center p-2">
                                    Residuos Metálicos
                                </h2>
                                <p className="text-center justify-content-center">
                                    Los residuos férricos son fundamentalmente el hierro,
                                    el acero y los residuos de fundición. Estos residuos son
                                    muy valorados para el reciclaje, ya que ahorran, por un
                                    lado, una gran cantidad de energía (alrededor del 62%)
                                    respecto a la producción con el mineral de hierro y, por
                                    el otro, una cantidad importante de agua.
                                    En cuanto a los no férricos, hay un gran abanico de
                                    materiales como el aluminio, el cobre, el magnesio, el
                                    plomo, el estaño, el zinc y el níquel, de los cuales el
                                    aluminio es el material más reciclado. Estos residuos
                                    tienen un gran valor económico, ya que su recuperación
                                    ahorra grandes cantidades de materias primas que,
                                    en este caso, tienen un precio elevado y además son
                                    difíciles de extraer.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
                <footer
                    className="footer p-4"
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

export default Metals;