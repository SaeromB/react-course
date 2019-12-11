import React, {Component} from 'react';

// const obj = {
//   name: 'Saerom',
//   getName() {
//     return this.name;
//   }
// };

// const getName = obj.getName.bind(obj);

// console.log(getName())
// console.log(obj.name);

class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: ['Thing One', 'Thing Two', 'Thing Three', 'Thing Four']
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    this.setState((prevState) => {
      return {
        option: prevState.options.concat(option)
      }
    })
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick} />
         
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

class Header extends Component {
  render(){
    return (
    <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
    </div>
    )
  }
}

class Action extends Component {
  render(){
    return (
      <div>
        <button
         onClick={this.props.handlePick}
         disabled={!this.props.hasOptions}
         >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends Component {
  // it is inifficient to render this everytime 
  // solution make a constructor the 
  // the constructor props is same as this.props

  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // this binding happens when it is initialized
  }
  handleRemoveAll () {
    console.log(this.props.options)
    // alert('remove all')
  }
  render() {
    return(
      <div>
        {this.props.options.map((option)=> <Option key={option} optionText={option }>{option}</Option>)}
        <button onClick = {this.handleRemoveAll}> 
          Remove All
        </button>
      </div>
    )
  }
}

class Option extends Component {
  render() {
    return(
      <div>
        Option: {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends Component {
  constructor(props) {
    super(props);
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.element.option.value.trim();

    if(option) {
      this.props.handleAddOption(option)
    }
  }
  render() {
    return ( 
      <div>
        <form onSubmit={this.handleAddOption}>
        <label>{this.option}</label>
          <input type='text' value={this.option} />
            <button>
              Add Option
            </button>
        </form>
      </div>
    )
  }
}

// how to alow a child to communicate with parent by using functions like handlePick={this.handlePick} let the children get the data from the parent


export default IndecisionApp;
