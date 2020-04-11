import React, { Component } from 'react';
import '../styles/style.css';
import logo  from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import Login from '../login.js';




import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';


import GoogleLogin from 'react-google-login';
class Login1 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
    };
  }
  

  _handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      rememberMe: e.target.checked,
    });
  };
  
  
_handleSubmit = (e) => {
    e.preventDefault();
    if (
     
      this.state.email !== '' &&
      this.state.password !== ''
    ) {
      localStorage.setItem('myUser', this.state.email);
      localStorage.setItem('myRemember', this.state.rememberMe);
      this.props.history.push('/home');
    }else{
        alert('Ingrese toda la información');
    }
  };

  

  render() {
    

    return (
      <>
  <nav className="navbar" style={{ 'background': '#0C927D' }}>
                <a className="navbar-brand text-white" href="#">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                        ECOPAY
                </a>
            
            </nav>

            <div className="container-fluid d-flex justify-content-center align-item-center p-3" style={{
                backgroundColor: '#0F2943'
            }}>
                <form class="form-signin">
                    <div class="text-center mb-4">
                        
                        <img class="mb-4 mt-4" src={logo} alt="" width="72" height="72"></img>
                        <h1 className="h3 mb-3 font-weight-normal text-center text-white">Iniciar Sesión</h1>

                    </div>
                 

                    <div class="form-label-group">
                    <label className="text-white"for="inputEmail">Correo Electrónico</label>
                        <input className="text-white" type="email" id="inputEmail" class="form-control" placeholder="Example@gmail.com" required
                        ></input>
                        
                    </div>

                    <div className="form-label-group">
                      
                    <label className="text-white" for="inputPassword">Contraseña</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="******" 
                        required></input>
                        
                    </div>
                    <div class="checkbox mb-3">
    <label className="text-white">
      <input className="text-white" type="checkbox" value="remember-me"/>Recordarme
      
    </label>
    
  </div>
                  
                    <Link to="/home">
                    <button className="btn btn-lg btn-primary rounded-pil  btn-block" type="submit" 
                    style={{
                        backgroundColor:'#0C927D' 
                      }}>Ingresar</button>
                    
                    </Link>
                     
                     
                   
                    <Link to="/registro">

                    <p class="create-account-callout mt-3">
        No tienes una cuenta?
        <a  href="">Crear Una</a>.
      </p>
                      </Link>
                    
                    
         <Login/>
      
                </form>
            </div>



      </>
    );
  }
}

export default Login1;
