import React,{ Component } from 'react';
import '../index.css';
import logo  from '../images/logo.png';
import { Link, Redirect} from 'react-router-dom';
import Login from './Login';
import axios from 'axios';
import Img1 from '../Imagenes/Img1.png'
import Img2 from '../Imagenes/Img2.png';
import Img3 from '../Imagenes/Img3.png';
import facebook from '../Imagenes/facebook.png';
import twitter from '../Imagenes/twitter.png';
import inst from '../Imagenes/inst.png';
import phone from '../Imagenes/icons8-home-26.png';
import home from '../Imagenes/icons8-phone-24.png';
import email from '../Imagenes/email-icon.png';
import '../App.css'

class Login1 extends Component {
  
  //creamos el state de los campos del formulario que vamos a usar
  state={
    form:{
      email: '',
      password: ''
  }
  };

  //esto es lo mismo para todo, estamos tomando con el target name los valores del formulario
  handleChange=(event)=>{
    this.setState({
        form:{
            ...this.state.form,
            [event.target.name]:event.target.value
        }
    })
}

//realizamos con axios el get de la api, donde si su respuesta es distinta a null, con un foreach recorremos todos los elementos que hayan en la api para asi lograr hacer loguin,comparamos que los datos  que ingresamos si existan mediante  el foreach.
  handleSubmit = event => {
    event.preventDefault();     
    axios.get(`https://datosregistro.now.sh/datosUsuario/`)
      .then(res => {
       if(res!=null){
        res.data.forEach(element => {
          if(element.correo === this.state.form.email){ //condicional que nos ayuda a buscar si el correo existe
            if(element.contrasena === this.state.form.password){ //condicional que nos ayuda a buscar si la contraseña existe
              localStorage.setItem('user', JSON.stringify(element)); //convertimos en formato json el array que nos lanza el for each element
              this.props.history.push('/home'); //nos redirecciona al home
            }
          }
          {/*else if(element.correo !== this.state.form.email){
            window.alert("el correo que ingresaste no se encuentra registrado :(")
          }*/}
        });
        }
      })
  }
  

  render() {
    //estamos pasando que los datos de usser se conviertan en formato json mediante el localstorage
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user)

        if(user !== null && user.nombres !== ""){ //estamos validando que  tengamos datos en el formulario de login
          return <Redirect to='/' /> //si no está vacio y si si existen en nuestra api,nos redirecciona al home
          
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
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <div className="text-center mb-4">
                        
                        <img className="mb-4 mt-4" src={logo} alt="" width="72" height="72"></img>
                        <h1 className="h3 mb-3 font-weight-normal text-center text-white">Iniciar Sesión</h1>

                    </div>
                 

                    <div className="form-label-group">
                    <label className="text-white"htmlFor="inputEmail">Correo Electrónico</label>
                        <input className="text-white" type="email" id="email" name="email" className="form-control" placeholder="Example@gmail.com"
                        onChange={this.handleChange}
                        ></input>
                        
                    </div>

                    <div className="form-label-group">
                      
                    <label className="text-white" htmlFor="inputPassword">Contraseña</label>
                        <input type="password" id="password" name="password" className="form-control" placeholder="******" onChange={this.handleChange}
                        ></input>
                        
                    </div>
                    <div className="checkbox mb-3">
                        <label className="text-white">
                        <input className="text-white" type="checkbox" value="remember-me"/>Recordarme
                        
                        </label>
                        
                    </div>
                  
                    
                    <button className="btn btn-lg btn-primary rounded-pil  btn-block" type="submit" 
                    style={{
                        backgroundColor:'#0C927D' 
                      }}>Ingresar</button>                   
                   
                    <Link to="/registro">

                    <p className="create-account-callout mt-3">
                        No tienes una cuenta, crear Una.
                    </p>
                      </Link>                  
                    <Login/>      
                </form>
            </div>
            <footer
                        className="footer">
                        <div className="row justify-content-center footer-one p-3 text-header text-white" >
                            By Team ECOPAY
                        <i>                            
                            <a href="https://www.facebook.com/ecopaygeek" target="_blank">
                                <img className="mx-2" width="30" height="auto" src={facebook} alt="" />
                            </a>
                        </i>
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
                                                    <i><img className="img-responsive mx-2" width="50" src={Img1} alt="" /></i>
                                                    Agile Innova
                                                </li>
                                                <li>
                                                    <i><img className="img-responsive mx-2" width="50" src={Img2} alt="" /></i>
                                                    Makaia
                                                </li>

                                                <li>
                                                    <i><img className="img-responsive mx-2" width="50" src={Img3} alt="" /></i>
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
      </>
    );
  }
  }
}

export default Login1;
