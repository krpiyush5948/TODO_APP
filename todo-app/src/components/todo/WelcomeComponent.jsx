import React, { Component } from 'react'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

import {  Link } from 'react-router-dom'
class WelcomeComponent extends Component {
    constructor(props){
        super(props)
        this.state=({
            welcomeMessage:''
        })
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this)
        this.handleErrorResponse=this.handleErrorResponse.bind(this)
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    welcome {this.props.match.params.name} you can manage you todos <Link to="/todo">here</Link>
                </div>
                
                <div className="container">
                     click here to get the customized welcome message
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">get welcome message</button>
                </div>
                <div>
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }
    retrieveWelcomeMessage(){
       // console.log('in retrieveWelcomeMessage')
        // HelloWorldService.executeHelloWorldService()
        // .then(response=>this.handleSuccessfulResponse(response))
       // .catch()

    //    HelloWorldService.executeHelloWorldBeanService()
    //    .then(response=>this.handleSuccessfulResponse(response))

    HelloWorldService.executeHelloWorlPathVariableService(this.props.match.params.name)
    
     .then(response=>this.handleSuccessfulResponse(response))
 
     .catch(error=>this.handleErrorResponse(error));
    
    
    }
    handleSuccessfulResponse(response){
             console.log(response)
        this.setState({
            welcomeMessage:response.data.message
        })
    }
    handleErrorResponse(error){
        console.log("in Welcome component "+error.response);
        

        let errorMessage = '';

        if(error.message)
        errorMessage+= error.message

        if(error.response && error.response.data){
            errorMessage+= error.response.data.message
        }




        this.setState({welcomeMessage:errorMessage })
    }

}
export default WelcomeComponent