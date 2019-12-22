import axios from 'axios'
class HelloWorldService{
    executeHelloWorldService(){
        console.log('in retrieveWelcomeMessage')
      return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService(){
       // console.log('in retrieveWelcomeMessage')
      return axios.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloWorlPathVariableService(name){
        // console.log('in retrieveWelcomeMessage')
        // let username='in28minutes'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":"+ password)
        // console.log("in Hello world service basic auth header  "+basicAuthHeader)
       return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`
      //  {
      //    headers : {
      //             authorization:basicAuthHeader
      //    }
      //  }
       );
    }
}
export default new HelloWorldService()