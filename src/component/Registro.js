import React, { Component,Fragment } from 'react';
import Logo from '../Imagenes/logo.png'
import axios from 'axios';
import Im1 from '../Imagenes/Im1.png';
import Im2 from '../Imagenes/Im2.png';
import Im3 from '../Imagenes/metro.png';
import facebook from '../Imagenes/facebook.png';
import twitter from '../Imagenes/twitter.png';
import inst from '../Imagenes/inst.png';
import phone from '../Imagenes/icons8-home-26.png';
import home from '../Imagenes/icons8-phone-24.png';
import email from '../Imagenes/email-icon.png';
import '../index.css'


class Registro extends Component {
    state = {
        form: {
            nombres: '',
            apellidos: '',
            correo: '',
            contrasena: 0,
            ConfirmacionContrasena: 0,
            numeroCedula: 0,           
          
        }
    };
    handleChange=(event)=>{
        this.setState({feedback: event.target.value})
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }
    handleSubmit = event => {
        event.preventDefault(); 
        var service_id = "default_service";
        const templateId = 'template_HDm5JSFo';
        //this.send(service_id,templateId,this.state,userId);
        this.sendFeedback(service_id,templateId,this.state.form);
	//this.sendFeedback(templateId,{message_html: this.state.feedback, from_name: this.state.nombres, reply_to: this.state.correo})
        axios.post(`https://datosregistro.now.sh/datosUsuario/`, {...this.state.form})
          .then(res => {
           if(res!=null){
            localStorage.setItem('user', JSON.stringify(res.data)); //local storage de la data para asi llevarlos al home
            this.props.history.push('/home');
            }
          })
        
      }

      sendFeedback (serviceId,templateId, variables) {
          console.log("Enviado a: " + variables.correo);
 
          window.emailjs.send(serviceId,templateId,variables)
          .then((response) => {
            console.log("Enviado",response.status,response.text);
          }, (err) => {
            console.log("Error: ",err);
          })
      }
      
    render(){
        return (
            <Fragment>
                <header>
                    <nav className="navbar" style={{ 'background': '#0C927D' }}>
                        <a className="navbar-brand text-white" href="#">
                            <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                                ECOPAY
                        </a>
                    </nav>

                </header>
                <div className="container-fluid d-flex justify-content-center align-item-center body-registro " >

                    <form className="form-signin" onSubmit={this.handleSubmit}
                    >
                        <div className="text-center mb-4">

                            <img className="mb-4 mt-4" src={Logo} alt="" width="72" height="72"></img>
                            <h1 className="h3 mb-3 font-weight-normal text-center text-white">Registro</h1>

                        </div>
                        <div className="form-row">
                            <div className="col mb-3">
                                <label className="text-white " for="validationServer01">Nombres</label>
                                <input
                                    type="text"
                                    name="nombres"
                                    placeholder="Ingrese nombres"
                                    onChange={this.handleChange}
                                    className="form-control "
                                ></input>
                                <div className="valid-feedback">
                                    Looks good!
                            </div>
                            </div>

                            <div className="col mb-3">
                                <label className="text-white " for="validationServer02">Apellidos</label>
                                <input className="form-control"
                                    type="text"
                                    name="apellidos"

                                    placeholder="Ingrese Apellidos"

                                    onChange={this.handleChange}
                                ></input>
                                <div className="valid-feedback">
                                    Looks good!
                            </div>
                            </div>



                        </div>
                        <div className="form-row">
                            <div className="col mb-3">
                                <label className="text-white " for="validationServer02">Correo electrónico</label>
                                <input
                                    className="form-control "
                                    type="email"
                                    name="correo"

                                    placeholder="Ingrese correo electronico"

                                    onChange={this.handleChange}
                                ></input>
                                <div className="valid-feedback">
                                    Looks good!
                            </div>


                            </div>

                            <div className="col mb-3">
                                <label className="text-white " for="validationServer02">Numero de cedula</label>
                                <input className="form-control "
                                    type="text"
                                    name="numeroCedula"

                                    placeholder="Numero de cedula"
                                    onChange={this.handleChange}
                                ></input>
                                <div className="valid-feedback">
                                    Looks good!
                            </div>

                            </div>


                        </div>
                        <div className="form-row">
                            <div className="col mb-3">
                                <label className="text-white " for="validationServer02">Contraseña</label>
                                <input className="form-control "
                                    type="password"
                                    name="contrasena"

                                    placeholder="Ingrese contraseña"
                                    onChange={this.handleChange}

                                ></input>
                                <div className="valid-feedback">
                                    Looks good!
                            </div>


                            </div>

                            <div className="col mb-3">
                                <label className="text-white " for="validationServer02">Confirmar contraseña</label>
                                <input className="form-control "
                                    type="password"
                                    name="ConfirmacionContrasena"
                                    placeholder="Ingrese contraseña"
                                    onChange={this.handleChange}

                                ></input>
                                <div className="valid-feedback">
                                    Looks good!
                            </div>

                            </div>

                        </div>

                        <button className="btn btn-lg btn-primary rounded-pil  btn-block" type="submit"
                            style={{
                                backgroundColor: '#0C927D'
                            }}>Registrarse</button>



                        <p className="mt-5 mb-3 text-muted text-center text-white">© 2020</p>
                    </form>
                </div>
                <footer
                        className="footer">
                        <div className="row justify-content-center footer-one p-3 text-header text-white" >
                            By Team ECOPAY
                        <i><img className="mx-2" width="30" height="auto" src={facebook} alt="" /></i>
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


export default Registro;
