import React, { Component } from 'react';
import './Counter.css';
import propTypes from 'prop-types'

class Counter extends Component {

  constructor() {
    super()
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this)
    
  }
  render() {
    return (
      <div className="App">
        <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={10} incrementMethod={this.increment}  decrementMethod={this.decrement}/> 
        <span className="count">{this.state.counter}</span>
       <div> <button className="reset" onClick={this.reset}> reset</button></div>
      </div>
    );
  }
  increment(by) { 

    console.log(`increment from parent-${by}`)
    this.setState({
      counter: this.state.counter+by
    });
  }

  decrement(by) { 

    console.log(`decrement from parent-${by}`)
    this.setState({ 
      counter: this.state.counter-by
    });
  }
  reset(){
    console.log('reset to 0')
    this.setState({
      counter: 0
    });
  }
}

class CounterButton extends Component {
  //define initial state in a constructor
  //state=>0
  constructor() {
    super()
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this);

    this.decrement = this.decrement.bind(this);
  }
  
  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>
        <button onClick={this.decrement}>-{this.props.by}</button>
       {/*<span className="count">{this.state.counter}</span>*/} 
      </div>
    )
  }
  increment() { // update state - counterr++
    //console.log('increment');

    this.setState({
      counter: this.state.counter + this.props.by
    });
    this.props.incrementMethod(this.props.by);

  
  }


decrement() { 
  this.setState({
    counter: this.state.counter - this.props.by
  });
  this.props.decrementMethod(this.props.by);
  
}

}


CounterButton.defaultProps = {
  by: 1
}
CounterButton.propTypes = {
  by: propTypes.number
}

export default Counter;