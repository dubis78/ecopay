import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Board from './Board3';
import song from '../../music/Loneliness.mp3';
import Img1 from '../../Imagenes/Img1.png'
import Img2 from '../../Imagenes/Img2.png';
import Img3 from '../../Imagenes/Img3.png';
import facebook from '../../Imagenes/facebook.png';
import twitter from '../../Imagenes/twitter.png';
import inst from '../../Imagenes/inst.png';
import phone from '../../Imagenes/icons8-home-26.png';
import home from '../../Imagenes/icons8-phone-24.png';
import email from '../../Imagenes/email-icon.png';
import '../Home/home.css';

class ToGame extends Component {
    render() {

        return (
            
            <div className="togame" >
                <audio src={song} autoPlay='true'/>
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
                                to="/home"
                            >
                                <button
                                    id="bntGame"
                                    className="nav-item text-white btn rounded-pill mr-1"
                                >
                                    Inicio
                                    </button>
                            </Link>
                            <Link
                                to="/home"
                            >
                                <button
                                    id="bntGame"
                                    className="nav-item text-white btn rounded-pill mr-1"
                                >
                                    Aprendamos Juntos
                                    </button>
                            </Link>
                        </div>
                    </nav>
                </header>
                <div
                    className="bg"
                >
                    <h2 className="text-center text-white">BIENVENIDO AL NIVEL 3</h2>
                    <br/>
                    <h5 className="text-center text-white"> DEPOSITA LAS BASURAS CORRESPONDIENTES AL CONTENEDOR</h5>
                    <div className="p-5">
                        <Board />
                    </div>
                </div>
                <footer
                            className="footer">
                            <div className="row justify-content-center text-white p-1" 
                            >
                                By Team ECOPAY
                                <i><img className="mx-2" width="30" height="auto" src={facebook} alt="" /></i>
                                <i><img className="mx-2" width="30" height="auto" src={twitter} alt="" /></i>
                                <i><img className="mx-2" width="30" height="auto" src={inst} alt="" /></i>
                            </div>

                            <div id="footertwo" className="container">
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
                                                    Makaia
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

export default ToGame;