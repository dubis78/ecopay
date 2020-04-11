import React, { Component } from 'react';
import Logo from '../../images/logo.png';
import Video from './movie';


class Learning extends Component {
    render() {
        
        return (
            <div>
                <header>
                    <nav
                        className="navbar w-auto nav-pills nav-fill flex-sm-row"
                        style={{ 'background': '#0C927D' }}
                    >
                        <a className="navbar-brand text-white text-wrap" href="#">
                            <img
                                id="logo"
                                src={Logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt=""
                            />
                                ECOPAY
                        </a>
                    </nav>
                </header>
                <main>
                    <Video />
                </main>                
                <footer style={{ 'background': '#0F2943' }}>
                    <div className="card-footer bg-transparent border-success text-center text-white">By Team ECOPAY</div>
                </footer>
            </div>
        );
    }
}

export default Learning;