import React from 'react';
import { Link, Redirect } from "react-router-dom";
import Logo from '../../images/logo.png';
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
        console.log(user)
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
                                    {user.nombres}!
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
                                            regresar
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
                        <br/>    
                        <br/>    
                        <br/>   
                        <br/>    
                        <br/>    
                        <br/>   
                        <br/>    
                        <br/>    
                        <br/>   
                        <br/>    
                        <br/>  
                        <h1 className='redimirtext'><b>TUS PUNTOS HAN SIDO REDIMIDOS A LA CIVICA {user.numeroCedula}</b></h1>
                        <br/>      
                        <br/>    
                        <br/>   
                        <br/>    
                        <br/>    
                        <br/>   
                        <br/>    
                        <br/>    
                        <br/>   
                        <br/>    
                        <br/>    
                        <br/>                                    
                        <footer
                            className="footer">
                            <div id="footerOne" className="row justify-content-center footer-one p-3 text-header text-white" >
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
                </>
            );
        }
        else {
            return <Redirect to='/' />
        }
    }
}


export default Home;
