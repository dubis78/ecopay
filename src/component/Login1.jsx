import React,{ Component } from 'react';
import '../index.css';
import logo  from '../images/logo.png';
import { Link, Redirect} from 'react-router-dom';
import Login from './Login';
import axios from 'axios';
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

            <div className="container-fluid d-flex justify-content-center align-item-center p-3 body-registro" style={{
                backgroundColor: '#0F2943'
            }}>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <div className="text-center mb-2">
                        
                        <img className="mb-2 mt-2" src={logo} alt="" width="72" height="72"></img>
                        <h1 className="h3 mb-2 font-weight-normal text-center text-white">Iniciar Sesión</h1>

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
                    <div className="checkbox mb-2">
                        <label className="text-white">
                        <input className="text-white" type="checkbox" value="remember-me"/>Recordarme
                        
                        </label>
                        
                    </div>
                  
                    
                    <button className="btn btn-lg btn-primary rounded-pil  btn-block" type="submit" 
                    style={{
                        backgroundColor:'#0C927D' 
                      }}>Ingresar</button>                   
                   
                    <Link to="/registro">

                    <p className="create-account-callout mt-2">
                        No tienes una cuenta, crear Una.
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
