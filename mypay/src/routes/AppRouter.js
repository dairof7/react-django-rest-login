import React from 'react'
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { HomePage } from '../containers/HomePage'
import { Login } from '../containers/Login'
import { SignIn } from '../containers/SignIn'


export const AppRouter = () => {
  
  return (
    <Router>
        <div>
        <Switch>
          <Route exact path='/home' component={ HomePage } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/signin' component={ SignIn } />
          <Redirect to='/home'/>
        </Switch>
      </div>
    </Router>
  )
}
  
