import React, { Component,useState,Fragment } from 'react';
import Logo from '../Imagenes/logo.png'
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

    

class Registro extends Component {
    state={
        form:{
            nombres:'',
            apellidos:'',
            correo:'',
            contrasena:0,
            ConfirmacionContrasena:0,
            numeroCedula:0 ,
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
        axios.post(`https://datosregistro.now.sh/datosUsuario/`, {...this.state.form})
          .then(res => {
            console.log(res);
            console.log(res.data);
            this.props.history.push('/home');
           if(res!=null){

            }
            else {}

            
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
               
            
            
            <div className="container-fluid d-flex justify-content-center align-item-center " >
              
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
                               type="nombres"
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
                            <label  className="text-white " for="validationServer02">Apellidos</label>
                            <input  className="form-control"
                                type="apellidos"
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
                                type="correo"
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
                            <input  className="form-control "
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
                            <label  className="text-white " for="validationServer02">Contraseña</label>
                            <input  className="form-control "
                                type="contrasena"
                                name="contrasena"
                             
                                placeholder="Ingrese contraseña"
                                onChange={this.handleChange}
                             
                                 ></input>
                            <div className="valid-feedback">
                                Looks good!
                            </div>


                        </div>

                        <div className="col mb-3">
                            <label className="text-white " for="validationServer02">Confirmación de contraseña</label>
                            <input className="form-control "
                                type="ConfirmacionContrasena"
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
                            backgroundColor:'#0C927D' 
                        }}>Registrarse</button>

                  
                   
                    <p className="mt-5 mb-3 text-muted text-center text-white">© 2020</p>
                </form>
            </div>


            </Fragment>
           
            

        );
    }
}


export default Registro;
