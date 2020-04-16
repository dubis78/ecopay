import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import ImgReciclyng from '../../images/img8.jpg';
import JUGAR from '../../Imagenes/JUGAR-1.png'


class Principal extends Component {

    render() {
        return (

            <div className="principal">
                <header>
                    <nav
                        id="nav"
                        className="navbar navbar-inverse navbar-static-top navbar-expand-lg justify-content-between">
                        <a className="navbar-brand text-white" >
                            <h2 className="nombre text-responsive" >
                                <img
                                    id="logo"
                                    src={Logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="" />
                                  ECOPAY
                            </h2>
                        </a>
                        <div
                            className="navbar-nav" >
                            <Link
                                to="/registro" >
                                <button
                                    id="bntGame"
                                    className="nav-item text-white btn rounded-pill mr-1">
                                    Registrarse
                                    </button>
                            </Link>
                            <Link
                                to="/login"
                            >
                                <button
                                    id="bntGame"
                                    className="nav-item text-white btn rounded-pill mr-1" >
                                    Iniciar sesión
                                    </button>
                            </Link>
                        </div>
                    </nav>
                </header>
                <div className="valueProposal">
                <div class="post-banner-category">
								<div class="banner__icon"/>
								<span class="banner__category"> <h4 className="texto-header">RECICLA Y GANA</h4></span>
                                <div></div>

                                <Link to='/game'> <button className="btn btn-light btn-lg text-black boton"><h1>JUGAR</h1></button></Link>
							

                               
							</div>
                </div>
                <div className="container">
                    <div className="row d-flex align-items-center p-5">
                        <div className="col-sm justify-content-center">
                            <h2 className="text-center p-2">
                                Aprende a reciclar jugando y gana
                        </h2>
                            <p className="text-center">
                                En ECOPAY queremos incentivar el reciclaje y para ello ofrecemos herramientas
                                didáctivas e interactivas con las cuales aprender es muy fácil. Además si ganas
                                el juego obtienes dinero que se reflejará en el saldo de tu tarjeta cívica del Metro de
                                Medellín.
                        </p>
                        </div>
                        <div className="col-sm">
                            <img className="img-fluid mx-auto d-block" src={ImgReciclyng} alt="" />
                        </div>
                    </div>
                </div>
                <div class="col-12 text-center">

                    <h2 className="text-wrap d-inline-block">Beneficios del reciclaje</h2>

                </div>
                <br></br>
                <br></br>

                <div class="row">
                    <div class="col-md-4 beneficio">

                        <div class="icono text-center">
                            <img src="https://ecoembesdudasreciclaje.es/wp-content/uploads/2018/05/icono1-1.png" alt="Usamos menos materias primas" class="img-responsive" />
                        </div>
                        <div class="titulo text-center">
                            <h4 className="titular text-wrap">Usamos menos materias primas</h4>
                        </div>
                        <div class="texto text-center">
                            <p>Ahorramos recursos naturales<br />
                                y conservamos muchos<br />
                                    espacios naturales.</p>
                        </div>

                    </div>
                    <div class="col-md-4">

                        <div class="icono text-center">
                            <img src="https://ecoembesdudasreciclaje.es/wp-content/uploads/2018/05/icono2-1.png" alt="Ahorramos energía" class="img-responsive" />
                        </div>
                        <div class="titulo text-center">
                            <h4 class="titular">Ahorramos energía</h4>
                        </div>
                        <div class="texto text-center">
                            <p>Frenamos el <strong>cambio climático</strong>: el gasto de energía que supone tratar nuevas materias es muy superior al que se gasta cuando reciclamos. Generamos menos CO2, ahorramos agua… De esta forma ayudamos a preservar el medioambiente.</p>
                        </div>

                    </div>
                    <div class="col-md-4 beneficio">

                        <div class="icono text-center">
                            <img src="https://ecoembesdudasreciclaje.es/wp-content/uploads/2018/05/icono3-1.png" alt="Generamos menos residuos" class="img-responsive" />
                        </div>
                        <div class="titulo text-center">
                            <h4 class="titular">Generamos menos residuos</h4>
                        </div>
                        <div class="texto text-center">
                            <p>Ayudamos a no contaminar nuestros espacios naturales y los hábitats de los animales acuáticos y terrestres.</p>
                        </div>

                    </div>
                </div>
                <br />
                <br />
                <div class="row">
                    <div class="col-md-6 ml-5 col-md-offset text-center">

                        <div class="icono text-center">
                            <img src="https://ecoembesdudasreciclaje.es/wp-content/uploads/2018/05/icono4.png" alt="Creamos puestos de trabajo" class="img-responsive" />
                        </div>
                        <div class="titulo text-center">
                            <h4 class="titular">Creamos puestos de trabajo</h4>
                        </div>
                        <div class="texto text-center">
                            <p>El reciclaje de residuos precisa de empresas y personas para llevar a cabo este proceso.</p>
                        </div>

                    </div>
                    <div class="col-md-4 ">

                        <div class="icono text-center">
                            <img src="https://ecoembesdudasreciclaje.es/wp-content/uploads/2018/05/icono5.png" alt="Fabricamos nuevos productos" class="img-responsive" />
                        </div>
                        <div class="titulo text-center">
                            <h4 class="titular">Fabricamos nuevos productos</h4>
                        </div>
                        <div class="texto text-center">
                            <p>Dar vida a productos usados para convertirlos en otros completamente distintos ¡puede ser fascinante!</p>
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
        );
    }
}

export default Principal;