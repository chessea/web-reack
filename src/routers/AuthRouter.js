import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
  return (
  <div className="auth__main">  
    <div className="auth__box-container">
    <Switch>
        <Route 
            exact
            path="/auth/login"
            component={LoginScreen}
            
        />
           <Route 
            exact
            path="/auth/register"
            component={RegisterScreen}
            
        />
        <Redirect to='/auth/login'></Redirect>

    </Switch>
    </div>
  </div>  
  )
}
