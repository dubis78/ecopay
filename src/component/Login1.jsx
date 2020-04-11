import React,{ Component } from 'react';
import '../index.css';
import logo  from '../Imagenes/logo.png';
import { Link, Redirect} from 'react-router-dom';
import Login from './Login';
import axios from 'axios';



/*
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';


import GoogleLogin from 'react-google-login';*/
class Login1 extends Component {
  
  
  state={
    form:{
      email: '',
      password: ''
  }
  };

  handleChange=(event)=>{
    this.setState({
        form:{
            ...this.state.form,
            [event.target.name]:event.target.value
        }
    })
}

  handleSubmit = event => {
    event.preventDefault();     
    axios.get(`https://datosregistro.now.sh/datosUsuario/`)
      .then(res => {
       if(res!=null){
        res.data.forEach(element => {
          if(element.correo == this.state.form.email){
            if(element.contrasena == this.state.form.password){
              localStorage.setItem('user', JSON.stringify(element));
              this.props.history.push('/home');
            }
          }
        });
        }
      })
  }

  render() {
    let user = JSON.parse(localStorage.getItem('user'));

        if(user != null && user.nombres != ""){
          return <Redirect to='/home' />
        }else{

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
                <form class="form-signin" onSubmit={this.handleSubmit}>
                    <div class="text-center mb-4">
                        
                        <img class="mb-4 mt-4" src={logo} alt="" width="72" height="72"></img>
                        <h1 className="h3 mb-3 font-weight-normal text-center text-white">Iniciar Sesión</h1>

                    </div>
                 

                    <div class="form-label-group">
                    <label className="text-white"for="inputEmail">Correo Electrónico</label>
                        <input className="text-white" type="email" id="email" name="email" class="form-control" placeholder="Example@gmail.com"
                        onChange={this.handleChange} required
                        ></input>
                        
                    </div>

                    <div class="form-label-group">
                      
                    <label className="text-white" for="inputPassword">Contraseña</label>
                        <input type="password" id="password" name="password" class="form-control" placeholder="******" onChange={this.handleChange}
                        required></input>
                        
                    </div>
                    <div class="checkbox mb-3">
                        <label className="text-white">
                        <input className="text-white" type="checkbox" value="remember-me"/>Recordarme
                        
                        </label>
                        
                    </div>
                  
                    
                    <button className="btn btn-lg btn-primary rounded-pil  btn-block" type="submit" 
                    style={{
                        backgroundColor:'#0C927D' 
                      }}>Ingresar</button>
                    
                    
                     
                     
                   
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
}

export default Login1;
