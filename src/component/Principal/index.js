import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import ImgReciclyng from '../../images/img8.jpg';
import Im1 from '../../Imagenes/Im1.png'
import Im2 from '../../Imagenes/Im2.png'
import Im3 from '../../Imagenes/metro.png'
import facebook from '../../Imagenes/facebook.png'
import twitter from '../../Imagenes/twitter.png'
import inst from '../../Imagenes/inst.png'
import phone from '../../Imagenes/icons8-home-26.png'
import home from '../../Imagenes/icons8-phone-24.png'
import email from '../../Imagenes/email-icon.png'



class Principal extends Component {

    render() {
        return (
            <Fragment>
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
<<<<<<< HEAD
                        </a>
                        <div
                            className="navbar-nav" >
                            <Link to="/registro" >
                                <button
                                    id="bntGame"
                                    className="nav-item text-white btn rounded-pill mr-1">
                                    Registrarse
                                </button>
                            </Link>
                            <Link to="/login">
                                <button
                                    id="bntGame"
                                    className="nav-item text-white btn rounded-pill mr-1" >
                                    Iniciar sesión
=======
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
>>>>>>> alejandra
                                    </button>
                                </Link>
                            </div>
                        </nav>
                    </header>
                    <div className="valueProposal">
                        <div class="post-banner-category">
                            <div class="banner__icon" />
                            <span class="banner__category"> <h4 className="texto-header">RECICLA Y GANA</h4></span>
                            <div></div>

                            <Link to='/game'> <button className="btn btn-light btn-lg text-black boton"><h1>JUGAR</h1></button></Link>



                        </div>
<<<<<<< HEAD
                    </nav>
                </header>
                <div className="valueProposal">
                <div class="post-banner-category">
								<div class="banner__icon"/>
								<span class="banner__category"> <h4 className="texto-header">RECICLA Y GANA</h4></span>
                                <div></div>

                                <Link to='/prueba'> <button className="btn btn-light btn-lg text-black boton"><h1>JUGAR</h1></button></Link>
							

                               
							</div>
                </div>
                <div className="container">
                    <div className="row d-flex align-items-center p-5">
                        <div className="col-sm justify-content-center">
                            <h2 className="text-center p-2">
                                Aprende a reciclar jugando y gana
=======
                    </div>
                    <div className="container">
                        <div className="row d-flex align-items-center p-5">
                            <div className="col-sm justify-content-center">
                                <h2 className="text-center p-2">
                                    Aprende a reciclar jugando y gana
>>>>>>> alejandra
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
                </div>
                <footer
                    className="footer">
                    <div className="row justify-content-center footer-one" >
                        By Team ECOPAY
                        <i><img className="mx-2" width="30" height="auto" src={facebook}></img></i>
                        <i><img className="mx-2" width="30" height="auto" src={twitter}></img></i>
                        <i><img className="mx-2" width="30" height="auto" src={inst}></img></i>
                    </div>

                    <div class="container footer-dos">
                        <div class="row justify-content-center">
                            <div className="container">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <h5 className="texto-header text-responsive">Nuestros Aliados</h5>
                                        <ul className="listado ">
                                            <li>
                                                <i><img className="img-responsive mx-2" width="50" src={Im1}></img></i>
                                                Agile Innova

                                            </li>

                                            <li>
                                                <i><img className="img-responsive mx-2" width="50" src={Im2}></img></i>
                                                Makaia
                                            </li>

                                            <li>
                                                <i><img className="img-responsive mx-2" width="50" src={Im3}></img></i>
                                                Metro
                                            </li>
                                        </ul>

                                    </div>

                                    <div class="col-sm-4 ">
                                        <h5 className="texto-header text-responsive">Contactanos</h5>
                                        <ul className="listado">
                                            <li>
                                                <i><img className="img-responsive mx-2" width="20" src={home}></img></i>
                                                +573115991986

                                            </li>
                                            <li>
                                                <i><img className="img-responsive mx-2" width="20" src={phone}></img></i>
                                            Medellín, Colombia
                                            </li>
                                            <li>
                                                <i><img className="img-responsive mx-2" width="20" src={email}></img></i>
                                                 ecopay@gmail.com
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </Fragment>

        );
    }
}

export default Principal;