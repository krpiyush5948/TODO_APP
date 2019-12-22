import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodoComponent.jsx'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent '
import ErrorComponent from './ErrorComponent'
import LogoutComponent from './LogoutComponent'
import TodoComponent from './TodoComponent'
import AuthenticatedRoute from './AuthenticatedRoute'

class TodoApp extends Component {
    render() {

        return (
            <div className="todoApp">
                <Router>
                    <div>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/todo/:id" component={TodoComponent}/>
                            <AuthenticatedRoute path="/todo" component={ListTodosComponent} />
                            {/* routing to error component when no correct path is matched */}
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </div>
                </Router>
                {/* <LoginComponent/> 
            <WelcomeComponent/>   */}
            </div>
        )
    }
}



export default TodoApp;
