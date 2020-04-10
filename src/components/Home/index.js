import React from 'react';
import { Link } from "react-router-dom";

import Logo from '../../images/logo.jpeg';
import Ordinarios from '../../images/ordinarios.png';
import Metales from '../../images/metales.png';
import Peligrosos from '../../images/peligrosos.png';
import Papel from '../../images/papel.png';
import Plastico from '../../images/plastico.png';
import Vidrio from '../../images/vidrio.png';


class Home extends React.Component {

    render() {
        
        return (

            <div>
                <header>
                    <nav
                        className="navbar w-auto nav-pills nav-fill flex-sm-row" 
                        style={{ 'background': '#0C927D' }}
                    >
                        <a className="navbar-brand text-white text-wrap" href="#">
                            <img id="logo" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                                ECOPAY
                        </a>
                        <button className="btn rounded-pill text-white" type="button" style={{ 'background': '#0F2943' }}>Jugar</button>
                    </nav>
                </header>
                <h1 className="text-center text-black text-wrap">Selecciona la caneca que corresponde al residuo</h1>

                <div className="container align-items-center justify-content-center">
                    <div className="row row-cols-2">
                        <div className="col d-flex justify-content-center">
                            <Link to="/learning">
                                <button
                                    id="btn1"
                                    type="button"
                                    className="btn mr-1"
                                >
                                    <img className="img-fluid rounded" src={Ordinarios} />
                                </button>
                            </Link>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <button 
                                id="btn2" 
                                type="button" 
                                className="btn mr-1"
                            >
                                <img className="img-fluid rounded" src={Metales} />
                            </button>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <h2 className="text-black text-center p-2 text-wrap">Orgánicos</h2>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <h2 className="text-black text-center p-2 text-wrap">Metales</h2>
                        </div>
                    </div>
                    <div className="row row-cols-2">
                        <div className="col d-flex justify-content-center">
                            <button id="btn3" type="button" className="btn mr-1"><img className="img-fluid rounded" src={Peligrosos} /></button>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <button id="btn4" type="button" className="btn mr-1"><img className="img-fluid rounded" src={Papel} /></button>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <h2 className="text-black text-center p-2 text-wrap">Peligrosos</h2>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <h2 className="text-black text-center p-2 text-wrap">Papel y cartón</h2>
                        </div>
                    </div>
                    <div className="row row-cols-2">
                        <div className="col d-flex justify-content-center">
                            <button id="btn5" type="button" className="btn mr-1"><img className="img-fluid rounded" src={Plastico} /></button>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <button id="btn6" type="button" className="btn mr-1"><img className="img-fluid rounded" src={Vidrio} /></button>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <h2 className="text-black text-center p-2 text-wrap">Plástico</h2>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <h2 className="text-black text-center p-2 text-wrap">Vídrio</h2>
                        </div>
                    </div>
                </div>
                <footer style={{ 'background': '#0F2943' }}>
                    <div className="card-footer bg-transparent border-success text-center text-white">By Team ECOPAY</div>
                </footer>
            </div>
        )
    }
}


export default Home;
