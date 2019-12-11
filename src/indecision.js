import React, {Component} from 'react';

class Indecision extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: []
    }
  }
  // We can delete the options by making a method and passing it down to a child component(<Option/>) and having it called down in the child component
  // that alow to reverse the data flow and the child component can do somthing in the parent component ex)handleDeleteOptions

  handleDeleteOptions() {
    this.setState(() => {
      return {
      options: []
      }
    })
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum]
    alert(option)
  }

  handleAddOption(option){
    if(!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1 ) {
      return 'This option exist'
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render(){
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a Computer'
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        {/* if there is options do not disable button */}
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        {/* this will rerender (this is a prop)*/}
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}


class Header extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

// class Action extends Component {
//   render() {
//     return(
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         > 
//           What should I do?
//         </button>
//       </div>
//     )
//   }
// }
// change class Action to a stateless component

const Action = (props) => {
  return (
    <div>
      <button
       onClick={props.handlePick}
       disabled={props.hasOptions}>
       What should I do?
      </button>
    </div>
  )
}

class Options extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
          {this.props.options.map((option) => <Option key={option} optionText={option} />)}
      </div>
    )
  }
}

class Option extends Component {
  render(){
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

// addOption 처럼 parent의 데이터를 바꿔야할 상황이 있다
class AddOption extends Component {
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    // if (option) {
    //   this.props.handleAddOption(option)
    // }

    this.setState(() => {
      return {
        error
      }
    })
  }
  render() {
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>  
          <input type='text' name='option'/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

// stateless functional components can use 
// (props) is the same as this.props
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>age: </p>
//     </div>
//   )
// }

export default Indecision
