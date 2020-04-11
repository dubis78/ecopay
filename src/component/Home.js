import React,{Component} from 'react';
import { Link, Redirect } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    signOut(){
        localStorage.clear();
        window.location.reload(false);
    }
    render() { 
        let user = JSON.parse(localStorage.getItem('user'));
        if(user != null && user.nombres != ""){
            return (  <div>
                <h1 className="text-white">Bienvenido {user.nombres}</h1>
                <button onClick={this.signOut} > Sign out </button>
            </div>);
        }else{
            return <Redirect to='/' />
        }
    }
}
 
export default Home;