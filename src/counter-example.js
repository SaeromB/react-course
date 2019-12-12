import React, {Component} from 'react'

class Counter extends Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    //get the string out of localstorage
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10)

    //count is a number not NaN
    //isNaN(count) will return true we need false to show it is not a number
    if (!isNaN(count)) {
      //if a object property has the same variable name we can shorten it ex)({count: count}) 
      this.setState(() => ({count}))
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.count !== this.state.count){
      // 'count' is key and value is this.state.count
      localStorage.setItem('count', this.state.count)
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

// Counter.defaultProps = {
//   count : 0
// }

export default Counter;

