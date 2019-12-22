import React,{Component} from 'react'
import { Route,Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isUserLoggedIn()){
           // Authenticated user can use the router
        return <Route {...this.props}/>
        }else
        // redirect to login component
         return <Redirect to="/login"/>
    }
}

export default AuthenticatedRoute