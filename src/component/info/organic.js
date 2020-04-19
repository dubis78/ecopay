import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Canecaverde from '../../images/canecaverde.jpg';
import Im1 from '../../Imagenes/Im1.png';
import Im2 from '../../Imagenes/Im2.png';
import Im3 from '../../Imagenes/metro.png';
import facebook from '../../Imagenes/facebook.png';
import twitter from '../../Imagenes/twitter.png';
import inst from '../../Imagenes/inst.png';
import phone from '../../Imagenes/icons8-home-26.png';
import home from '../../Imagenes/icons8-phone-24.png';
import email from '../../Imagenes/email-icon.png';

class Organic extends Component {
    render() {
        return (

            <div
                className="organic"
                id="organic"
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
                            <div className="col-sm justify-content-center">
                                <h2 className="text-center p-2">
                                    Residuos Ordinarios
                                </h2>
                                <p className="text-center justify-content-center">
                                Este es el contenedor para todos aquellos residuos que no se reciclan, 
                                pero tampoco pueden usarse para hacer compost. Esta fracción de residuos 
                                que no pueden ser reutilizados se depositan en los vertederos o rellenos 
                                sanitarios.
                                <br />
                                Juguetes, biberones, chupetes, utensilios de cocina, pañales, objetos 
                                cerámicos, compresas, arena para mascotas, pelo, polvo, colillas, etc. 
                                Es decir, todo aquello que no puede ser reutilizado.
                                </p>
                            </div>
                            <div className="col-sm">
                                <img className="img-fluid mx-auto d-block border border-dark" src={Canecaverde} alt="" />
                            </div>
                        </div>
                    </div>
                </article>
                
                <footer
                        className="footer p-3">
                        <div id="footerOne" className="row justify-content-center footer-one p-5 text-header text-white" style={{'background': 'rgba(12, 146, 125, 0.9)', 'width': '100vw'}}>
                            By Team ECOPAY
                        <i><img className="mx-2" width="30" height="auto" src={facebook} alt="" /></i>
                            <i><img className="mx-2" width="30" height="auto" src={twitter} alt="" /></i>
                            <i><img className="mx-2" width="30" height="auto" src={inst} alt="" /></i>
                        </div>

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h5 id="textfooter" className="texto-header text-uppercase text-responsive">Nuestros Aliados</h5>
                                            <ul className="listado">
                                                <li>
                                                    <i><img className="img-responsive mx-2" width="50" src={Im1} alt="" /></i>
                                                    Agile Innova
                                                </li>
                                                <li>
                                                    <i><img className="img-responsive mx-2" width="50" src={Im2} alt="" /></i>
                                                    Makaia
                                                </li>

                                                <li>
                                                    <i><img className="img-responsive mx-2" width="50" src={Im3} alt="" /></i>
                                                    Academia Geek
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="col-sm-4 ">
                                            <h5 id="textfooter" className="texto-header text-uppercase text-responsive justify-content-center">Contactanos</h5>
                                            <ul className="listado justify-content-left">
                                                <li>
                                                    <i><img className="img-responsive mx-2" width="20" src={home} alt="" /></i>
                                                    +573115991986

                                                </li>
                                                <li>
                                                    <i><img className="img-responsive mx-2" width="20" src={phone} alt="" /></i>
                                                Medellín, Colombia
                                                </li>
                                                <li>
                                                    <i><img className="img-responsive mx-2" width="20" src={email} alt="" /></i>
                                                    ecopay@gmail.com
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
            </div>

        );
    }
}

export default Organic;