import React, { Component,Fragment } from 'react';
import logo from '../images/logo.png'
import axios from 'axios';
import '../index.css'


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

class Registro extends Component { 
   
    
    state = {
        form: {
            nombres:null,
            apellidos: null,
            correo: null,
            contrasena: null,
            ConfirmacionContrasena: null,
            numeroCedula: null,               
          
        },
        formErrors: {
            nombres: "",
            apellidos: "",
            correo: "",
            contrasena: "",
            ConfirmacionContrasena:"",
            numeroCedula:null,
        }
    }
    handleChange=(event)=>{
        this.setState({feedback: event.target.value})
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value }
        })
        const { name, value } = event.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "nombres":
                formErrors.nombres =
                    value.length < 3 ? "Mínimo 3 caracteres" : "";
                break;
            case "apellidos":
                formErrors.apellidos =
                    value.length < 3 ? "Mínimo 3 caracteres" : "";
                break;
            case "correo":
                formErrors.correo = emailRegex.test(value)
                    ? ""
                    : "Correo inválido";
                break;
            case "contrasena":
                formErrors.contrasena =
                    value.length < 4 ? "Mínimo 4 caracteres" : "";
                break;
           
            case "ConfirmacionContrasena":
                formErrors.ConfirmacionContrasena =
                    value.length < 4 ? "Mínimo 4 caracteres" : "";
                break;
                
            case "ConfirmacionContrasena":
                formErrors.ConfirmacionContrasena =
                    value.length < 4 ? "Mínimo 4 caracteres" : "";
                break;
            case Number("numeroCedula"):
              
                formErrors.numeroCedula=
               
                    isNaN(value) == false ? "Solo numeros" : "";
                    break;
                       
            default:
                break;
         }
            this.setState({ formErrors, [name]: value }, () => console.log(this.state));
        };

      
    handleSubmit = event => {
        event.preventDefault(); 
        var service_id = "default_service";
        const templateId = 'template_HDm5JSFo';
      
        this.sendFeedback(service_id,templateId,this.state.form);

	    if(this.state.form.nombres!=null && this.state.form.apellidos !=null && this.state.form.contrasena !=null &&
            this.state.form.ConfirmacionContrasena !=null && this.state.form.numeroCedula !=null){
            axios.post(`https://datosregistro.now.sh/datosUsuario/`, {...this.state.form})
            .then(res => {
            if(res!=null){
            localStorage.setItem('user', JSON.stringify(res.data)); //local storage de la data para asi llevarlos al home
            this.props.history.push('/home');
            }
            })
        }
        else {
            alert("Todos los campos son obligatorios")
              
        } 
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
        const { formErrors } = this.state;
        
        return (
            <Fragment>
                <header>
                    <nav className="navbar" style={{ 'background': '#0C927D' }}>
                        <a className="navbar-brand text-white" href="#">
                            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                                ECOPAY
                        </a>
                    </nav>

                </header>
                <div className="container-fluid d-flex justify-content-center align-item-center body-registro" >

                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <div className="text-center mb-2">

                            <img className="mb-2 mt-2" src={logo} alt="" width="72" height="72"></img>
                            <h1 className="h3 mb-2 font-weight-normal text-center text-white">Registro</h1>

                        </div>
                        <div className="form-row ">
                            <div className="col ">
                                <label className="text-white" for="validationCustom01" >Nombres</label>
                                <input
                                    type="text"
                                    name="nombres"
                                    placeholder="Ingrese nombres"
                                    onChange={this.handleChange}
                                    className="form-control "
                                    value={this.state.nombres}
                                    id="validationCustom01"
                                    required
                                    
                                  
                                ></input>
                                {formErrors.nombres.length > 0 && (
                                     <span  className="text-white errorMessage">{formErrors.nombres}</span>
                                 )}     

                            </div>
                            <div className="col ">
                                    <label className="text-white" for="validationCustom02">Apellidos</label>
                                    <input className="form-control"
                                        type="text"
                                        name="apellidos"
                                        placeholder="Ingrese Apellidos"
                                        onChange={this.handleChange}
                                        id="validationCustom02"
                                        required

                                    ></input>
                                     {formErrors.apellidos.length > 0 && (
                                        <span className=" text-white errorMessage">{formErrors.apellidos}</span>
                                    )}
                                     
                                   
                            </div>
                        </div>

                        <div className="row pl-3 pr-3">                           
                                <label className="text-white " for="validationCustom03" >Correo electrónico</label>
                                <input
                                
                                    className="form-control "
                                    type="email"
                                    name="correo"
                                    placeholder="Ingrese correo electronico"

                                    onChange={this.handleChange}
                                    id="validationCustom03"
                                    required
                                    >                                        
                                    </input>
                                     {formErrors.correo.length > 0 && (
                                        <span className=" text-white errorMessage">{formErrors.correo}</span>
                                    )}
                                   
                        </div>


                       
                        <div className="row pl-3 pr-3">                        
                                <label className="text-white" for="validationServer04">Número de cédula</label>
                                <input className="form-control "
                                    type="text"
                                    name="numeroCedula"
                                    placeholder="Numero de cedula"
                                    onChange={this.handleChange}
                                    id="validationServer04"
                                    required>

                                    </input>
                                    {Number(formErrors.numeroCedula) > 0 && (
                                        <span className=" text-white errorMessage">{formErrors.numeroCedula}</span>
                                    )}
                                    
                        </div>                      


                      
                        <div className="row pl-3 pr-3">
                          
                                <label className="text-white " for="validationServer05">Contraseña</label>
                                <input className="form-control "
                                    type="password"
                                    name="contrasena"
                                    placeholder="Ingrese contraseña"
                                    onChange={this.handleChange}
                                    id="validationServer05"
                                    required>
                                </input>
                                {formErrors.contrasena.length > 0 && (
                                    <span className=" text-white errorMessage">{formErrors.contrasena}</span>
                                )}
                                
                        </div>                   

                        <div className="row pl-3 pr-3">                        
                                <label className="text-white " for="validationServer06">Confirmar contraseña</label>
                                <input className="form-control "
                                    type="password"
                                    name="ConfirmacionContrasena"
                                    placeholder="Ingrese contraseña"
                                    onChange={this.handleChange}
                                    id="validationServer06"
                                    required>
                                 </input>
                                  {formErrors.ConfirmacionContrasena.length > 0 && (
                                    <span className=" text-white errorMessage">{formErrors.ConfirmacionContrasena}</span>
                                )}
                                                          
                        </div>
                        <div> 
                            <button className="btn btn-lg btn-primary rounded-pil  btn-block boton-registro mt-2 " type="submit"
                            style={{
                                backgroundColor: '#0C927D'
                            }}>Registrarse</button>
                            <h6 className="text-center text-white">© 2020</h6>
                        </div>  
                    </form>
                </div>
            </Fragment>



        );
    }
}


export default Registro;
