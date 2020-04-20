import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import ImgGlass from '../../images/glass.jpg';
import Img1 from '../../Imagenes/Img1.png';
import Img2 from '../../Imagenes/Img2.png';
import Img3 from '../../Imagenes/Img3.png';
import facebook from '../../Imagenes/facebook.png';
import twitter from '../../Imagenes/twitter.png';
import inst from '../../Imagenes/inst.png';
import phone from '../../Imagenes/icons8-home-26.png';
import home from '../../Imagenes/icons8-phone-24.png';
import email from '../../Imagenes/email-icon.png';

class Glass extends Component {
    render() {
        return (

            <div
                className="glass" 
                id="glass"
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
                <article 
                    className="bg"
                >
                    <div 
                        className="container p-5">
                        <div className="row d-flex align-items-center p-5">                            
                            <div className="col-sm">
                                <img className="img-fluid mx-auto d-block border border-dark" src={ImgGlass} alt="" />
                            </div>
                            <div className="col-sm justify-content-center">
                                <h2 className="text-center p-2">
                                    Residuos de Vidrio
                                </h2>
                                <p className="text-center justify-content-center">
                                Este contenedor está destinado al reciclaje de vidrio, y antes que nada debemos 
                                quitar aquellos materiales que no lo son: tapones de plástico, chapas o elementos decorativos. 
                                <br />
                                Puedes ingresar elementos como: Botellas de vino, cerveza, refrescos, licores, zumos, etc.
                                Tarros de alimentos como conservas, mermeladas, aceitunas, etc, Frascos de cosmética; colonia 
                                y perfumes, Desodorantes o ambientadores, etc.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
                <footer
                        className="footer">
                        <div id="footerOne" className="row justify-content-center footer-one p-3 text-header text-white" >
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
                                                    <i><img className="img-responsive mx-2" width="50" src={Img1} alt="" /></i>
                                                    Agile Innova
                                                </li>
                                                <li>
                                                    <i><img className="img-responsive mx-2" width="50" src={Img2} alt="" /></i>
                                                    Makaia
                                                </li>

                                                <li>
                                                    <i><img className="img-responsive mx-2" width="50" src={Img3} alt="" /></i>
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

export default Glass;