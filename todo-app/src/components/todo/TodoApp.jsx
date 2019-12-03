import React, {Component} from 'react'


class TodoApp extends Component{
    render(){
    return(
        <div className="todoApp">

            <LoginComponent/>   
        </div>
    )
    }
}

class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'in28minutes',
            password:'',
            hasLoginFailed:false,
            showSuccessfulMessage:false
        }
    //    this.handleUsernameChanege = this.handleUsernameChanege.bind(this)
    //    this.handlePasswordChange=this.handlePasswordChange.bind(this)
          this.handleChange=this.handleChange.bind(this)
          this.loginClicked=this.loginClicked.bind(this)
    }
    handleChange(event){
        console.log(this.state)
        this.setState({
           [event.target.name]:event.target.value
        })
    }
    // handleUsernameChanege(event){
    //     console.log(event.target.value)
    //     this.setState({
    //         username:event.target.value
    //     })
    // }
    // handlePasswordChange(event){
    //     this.setState({
    //         password:event.target.value
    //     })
    // }
    loginClicked(){
        //in28minutes/dummy
        // console.log(this.state.username)
        // console.log(this.state.password)
        if(this.state.username==='in28minutes' && this.state.password==='dummy')
        {
        
            this.setState({showSuccessfulMessage:true})
            this.setState({ hasLoginFailed:false  })
        }
            else{
                this.setState({hasLoginFailed:true })
                this.setState({showSuccessfulMessage:false})
            
            }
    }
   
    render(){
        return(
            <div>
                <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
               <ShowSuccessfulMessage showSuccessfulMessage={this.state.showSuccessfulMessage}/>
               UserName: <input type="text" name="username" value={this.state.username}  onChange={this.handleChange}/>
               Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/> 
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}
function ShowInvalidCredentials(props){
    console.log(props)
if(props.hasLoginFailed){
  
    return <div> Invalid Credential</div>
}
    return null
}
function ShowSuccessfulMessage(props){
    if(props.showSuccessfulMessage){
    return  <div>login successful</div>
    }
    else
    return null
}

export default TodoApp;
