import React, {Component} from 'react'

class Counter extends Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: props.count
    }
  }

  handleAddOne(){
    this.setState((prevState) => {
      return{
        count: prevState.count + 1 
      }
    })
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return{
        count: prevState.count - 1
      }
    })
  }
  //how does this work?
  //react will only render once 
  handleReset() {
    this.setState(() => {
      return{
        count: 0
      }
    })
    this.setState((prevState) => {
      return{
        count: prevState.count + 1
      }
    })
    // setState is asnync 
    // this.setState({
    //   count: 0
    // });
    // this.setState({
    //   count: this.state.count + 1
    // })
  }

  render(){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count : 0
}

export default Counter;

