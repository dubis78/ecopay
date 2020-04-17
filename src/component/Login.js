import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import { Link, Redirect} from 'react-router-dom';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
     
      } = this.props;
      console.log(user)
    
      return (
        <div>
           
            {
           

            
 
              user   
            ? 
          
          localStorage.setItem('user', JSON.stringify(user.displayName))
           
            
                : <p></p>
            }
  
            {
              user

                ? 
                <Redirect to='/hm' />
                : 
                <div className="col-12 ml-2">
                <button onClick={signInWithGoogle}>Sign in with Google</button>
                </div>
            }
          
        </div>
      );
    }
  }

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);