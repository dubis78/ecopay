import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import ImgReciclyng from '../../images/img8.jpg';
import Im1 from '../../Imagenes/Im1.png'
import Im2 from '../../Imagenes/Im2.png'
import Im3 from '../../Imagenes/Im1.png'
import facebook from '../../Imagenes/facebook.png'
import twitter from '../../Imagenes/twitter.png'
import inst from '../../Imagenes/inst.png'
import phone from '../../Imagenes/icons8-home-26.png'
import home from '../../Imagenes/icons8-phone-24.png'
import email from '../../Imagenes/email-icon.png'
import arbolito from '../../Imagenes/arbolito.jpg';
import aguita from '../../Imagenes/aguita.jpg';
import luz from '../../Imagenes/luz.jpg';
import './style.css';


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
                                    </button>
                                </Link>
                            </div>
                        </nav>
                    </header>
                    <div className="valueProposal">
                        <div class="post-banner-category">
                            <div class="banner__icon" />
                            <span class="banner__category"> <h4 className="texto-header">RECICLA Y GANA</h4></span>
                            <Link to='/prueba'> <button className="btn btn-light btn-lg text-black boton"><h1>JUGAR</h1></button></Link>
                        </div>
                    </div>
                    <div id="valuep" className="container p-5">
                        <div className="row d-flex align-items-center p-5">
                            <div className="col-sm justify-content-center">
                                <h2 className="text-center p-2">
                                    ¿No tienes saldo en tu cívica?, usa ECOPAY, juega, aprenge y GANA!
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
                    <div id="beneficio">
                        <div className="col-12 text-center p-5">
                            <h2 className="text-wrap d-inline-block">Beneficios del reciclaje</h2>

                        </div>
                        <br />
                        <br />

                        <div className="row p-5">
                            <div className="col-md-4 beneficio">

                                <div className="icono text-center">
                                    <img src="https://ecoembesdudasreciclaje.es/wp-content/uploads/2018/05/icono1-1.png" alt="Usamos menos materias primas" className="img-responsive" />
                                </div>
                                <div className="titulo text-center">
                                    <h4 className="titular text-wrap">Usamos menos materias primas</h4>
                                </div>
                                <div className="texto text-center">
                                    <p>Ahorramos recursos naturales<br />
                                    y conservamos muchos<br />
                                        espacios naturales.</p>
                                </div>

                            </div>
                            <div className="col-md-4">

                                <div className="icono text-center">
                                    <img src="https://ecoembesdudasreciclaje.es/wp-content/uploads/2018/05/icono2-1.png" alt="Ahorramos energía" className="img-responsive" />
                                </div>
                                <div className="titulo text-center">
                                    <h4 className="titular">Ahorramos energía</h4>
                                </div>
                                <div className="texto text-center">
                                    <p>Frenamos el <strong>cambio climático</strong>: el gasto de energía que supone tratar nuevas materias es muy superior al que se gasta cuando reciclamos. Generamos menos CO2, ahorramos agua… De esta forma ayudamos a preservar el medioambiente.</p>
                                </div>

                            </div>
                            <div className="col-md-4 beneficio">

                                <div className="icono text-center">
                                    <img src="https://ecoembesdudasreciclaje.es/wp-content/uploads/2018/05/icono3-1.png" alt="Generamos menos residuos" className="img-responsive" />
                                </div>
                                <div className="titulo text-center">
                                    <h4 className="titular">Generamos menos residuos</h4>
                                </div>
                                <div className="texto text-center">
                                    <p>Ayudamos a no contaminar nuestros espacios naturales y los hábitats de los animales acuáticos y terrestres.</p>
                                </div>

                            </div>
                        </div>

                        <div class="row">

                            <div className="row">
                                <div className="col-md-6 col-md-offset text-center">
                                    <div className="icono text-center">
                                        <img src="https://ecoembesdudasreciclaje.es/wp-content/uploads/2018/05/icono4.png" alt="Creamos puestos de trabajo" className="img-responsive" />
                                    </div>
                                    <div className="titulo text-center">
                                        <h4 className="titular">Creamos puestos de trabajo</h4>
                                    </div>
                                    <div className="texto text-center">
                                        <p>El reciclaje de residuos precisa de empresas y personas para llevar a cabo este proceso.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="icono text-center">
                                        <img src="https://ecoembesdudasreciclaje.es/wp-content/uploads/2018/05/icono5.png" alt="Fabricamos nuevos productos" className="img-responsive" />
                                    </div>
                                    <div className="titulo text-center">
                                        <h4 className="titular">Fabricamos nuevos productos</h4>
                                    </div>
                                    <div className="texto text-center">
                                        <p>Dar vida a productos usados para convertirlos en otros completamente distintos ¡puede ser fascinante!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />

                    <hr></hr>
                    <div class="col-12 text-center">

                        <h2 className="text-wrap d-inline-block">Otras maneras de cuidar nuestro planeta</h2>

                    </div>

                    <br />
                    <br />

                    <div className="container text-center containerCard">
                        <div class="row">
                            <div className="col-12 col-md-4 cardidea mt-4">
                                <img src={arbolito} />
                                <h4>Planta un árbol</h4>
                                <p>¿Sabías que plantar un árbol es una de las cosas más fáciles y poderosas que puedes hacer para tener un impacto positivo en el medio ambiente? Los árboles limpian el aire, te ayudan a ahorrar energía, evitan la escorrentía del agua de lluvia e incluso combaten el calentamiento global.</p>

                            </div>

                            <div className="col-12  col-md-4  cardidea mt-4">
                                <img src={aguita} />
                                <h4>Dale un buen manejo al agua</h4>
                                <p>El agua es un recurso necesario para la vida. Todavía hay gente que piensa que es inagotable. Lo cierto es que el agua es un recurso muy limitado y cada vez son más las zonas que sufren de escasez de este vital elemento. En la zona de Levante estamos muy concienciados con este tema pero nunca está de más recordarlo. </p>

                            </div>

                            <div className="col-12 col-md-4 cardidea mt-4">
                                <img src={luz} />
                                <h4>Ahorra energía</h4>
                                <p>Reducir el consumo eléctrico en casa tiene un doble beneficio: podemos contribuir a cuidar el medioambiente mientras ahorramos unos cuantos pesos en la factura de luz. Es mucho más sencillo de lo que pensamos si aprendemos algunos consejos sobre cómo ahorrar energía!</p>

                            </div>

                        </div>
                    </div>
                    <br />
                    <br />
                </div>
                <footer
                    className="footer">
                    <div id="#footerOne" className="row justify-content-center text-white" style={{'width': '100vw'}}>
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

            </Fragment>

        );
    }
}

export default Principal;