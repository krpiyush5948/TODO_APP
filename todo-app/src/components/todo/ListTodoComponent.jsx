import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment';

class ListTodosComponent extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
             todos: [],
             message:''
        }
        this.deleteTodoClicked=this.deleteTodoClicked.bind(this)
        this.refreshTodo=this.refreshTodo.bind(this)
        this.updateTodoClicked=this.updateTodoClicked.bind(this)
        this.addTodoClicked=this.addTodoClicked.bind(this)
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nestProps,nextState){
        console.log('shouldComponentUpdate')
        console.log(nestProps)
        console.log(nextState)
        return true 

    }
    componentDidMount(){
        console.log('componentDidMount')
       this.refreshTodo()
    }
    refreshTodo(){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(response => {
            //console.log(response)
            this.setState({
                todos:response.data
            })
        })
        
    }
    addTodoClicked(){
        this.props.history.push(`/todo/-1`)
    }
    updateTodoClicked(id){
      //  console.log("updateTodoClicked"+id)
        this.props.history.push(`/todo/${id}`)
    }
    deleteTodoClicked(id){
    
        let username = AuthenticationService.getLoggedInUserName()
        //console.log(username+"  "+ id)
        TodoDataService.deleteTodo(username,id)
        .then(
            response => {
                this.setState({
                    message:`delete of todo ${id} successful`
                })
                this.refreshTodo()
            }
        )
    }
    render() {
        console.log('render')
        return (
            <div>
                <h1> List todos</h1>
               {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                            <th> Description</th>
                                <th> TargetDate</th>
                                <th> status</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.todos.map(todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                            <td>{todo.status}</td>
                                            <td><button className="btn btn-success" onClick={()=>this.updateTodoClicked(todo.id)}> Update</button></td>
                                            <td><button className="btn btn-warning" onClick={()=>this.deleteTodoClicked(todo.id)}> Delete</button></td>

                                        </tr>
                                    )
                                }
                            </tbody>
                        
                    </table>
                    <div className="row">
                        <button className="btn btn-success " onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }

}
export default ListTodosComponent