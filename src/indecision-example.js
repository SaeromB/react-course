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
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing Two', 'Thing Three']
    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  handlePick() {
    alert('handlePick')
  }

  render(){
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
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
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.element.option.value;

    if(option) {
      alert(option)
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



export default IndecisionApp;
