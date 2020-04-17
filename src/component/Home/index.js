import React from 'react';
import { Link, Redirect } from "react-router-dom";

import Logo from '../../images/logo.png';
import Ordinarios from '../../images/ordinarios.png';
import Metales from '../../images/metales.png';
import Organicos from '../../images/organicos.png';
import Papel from '../../images/papel.png';
import Plastico from '../../images/plastico.png';
import Vidrio from '../../images/vidrio.png';
import Im1 from '../../Imagenes/Im1.png';
import Im2 from '../../Imagenes/Im2.png';
import Im3 from '../../Imagenes/metro.png';
import facebook from '../../Imagenes/facebook.png';
import twitter from '../../Imagenes/twitter.png';
import inst from '../../Imagenes/inst.png';
import phone from '../../Imagenes/icons8-home-26.png';
import home from '../../Imagenes/icons8-phone-24.png';
import email from '../../Imagenes/email-icon.png';
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
        if (user !== null && user.nombres !== "") {
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
                                            className="nav-item text-white btn rounded-pill mr-1"
                                        >
                                            Jugar
                                        </button>
                                    </Link>
                                    <a href="https://ecopay.netlify.com">
                                        <button
                                            id="bntGame"
                                            className="nav-item text-white btn rounded-pill"
                                            onClick={this.signOut}
                                        /* <Link to="/Login1">
                                                <button
                                                    id="bntGame"
                                                    className="nav-item text-white btn rounded-pill mr-1"
                                                    onClick={this.signOut}*/
                                        >
                                            Salir
                                            </button>
                                    </a>
                                </div>
                            </nav>
                        </header>
HOLA PERRA
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
                                        className="btn1 mr-2 p-3 text-body"
                                        to="/infoorganic"
                                    >

                                        <img
                                            className="img-fluid"
                                            src={Ordinarios}
                                            alt=""
                                        />
                                        <h2
                                            className="text-body text-center p-2"
                                        >
                                            Ordinarios
                                        </h2>
                                    </Link>
                                </div>
                                <div
                                    className="col-sm d-flex justify-content-center"
                                >
                                    <Link
                                        className="btn1 mr-2 p-3 text-body"
                                        to="/infometals"
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
                                        to="/infoordinary"
                                    >
                                        <img
                                            className="img-fluid"
                                            src={Organicos}
                                            alt=""
                                        />
                                        <h2
                                            className="text-body text-center p-2"
                                        >
                                            Orgánicos
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
                                        to="/infopaper"
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
                                        to="/infoplastic"
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
                                        to="/infoglass"
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
                            className="footer">
                            <div className="row justify-content-center footer-one p-3 text-header text-white" >
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
                </>
            );
        }
        else {
            return <Redirect to='/' />
        }
    }
}


export default Home;
