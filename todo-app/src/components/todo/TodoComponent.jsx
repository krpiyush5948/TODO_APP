import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService.js'

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD'),
            status:''
        }
        this.onSubmit=this.onSubmit.bind(this)
        this.validate=this.validate.bind(this)

    }
    componentDidMount(){
        if(this.state.id===-1){
            return
        }
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveTodo(username,this.state.id)
        .then(response => this.setState({
            description:response.data.description,
            targetDate:moment(response.data.targetDate).format('YYYY-MM-DD'),
             status:response.data.status
        }))

    }
    validate(values){
        let errors = {}
        if(!values.description){
            errors.description='Enter a Description'
        }else if(values.description.length<5){
        errors.description='Enter At least 5 character in Description'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate='Enter the valid Target Date'
        }
        return errors;
    }
    onSubmit(values){
         let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate,
            status:values.status
         }
        if (this.state.id === -1) {
            let username = AuthenticationService.getLoggedInUserName()
            TodoDataService.createTodo(username,todo
               
            ).then(response => this.props.history.push('/todo'))
        } else {

            let username = AuthenticationService.getLoggedInUserName()
            TodoDataService.updateTodo(username, this.state.id, todo    
               
            ).then(response => this.props.history.push('/todo'))
        }
        console.log(values)
    }
    render() {
        //destructuring in javascript
        let {description,targetDate,status} = this.state
       // let targetDate = this.state.targetDate

        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{ description, targetDate,status}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >

                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"></ErrorMessage>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Date</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Status</label>
                                        <Field className="form-control" type="text" name="status" />
                                    </fieldset>
                                    <button type="submit" className="btn btn-success">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>

            </div>
        )
    }
}

export default TodoComponent