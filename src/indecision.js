import React, {Component} from 'react';

class Indecision extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.state = {
      options: ['One', 'Two', 'Three', 'Four']
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
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(randomNum) 
  }

  render(){
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a Computer'
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        {/* if there is options do not disable button */}
        <Action hasOptions={this.state.options.length > 0}/>
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
        <AddOption />
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

class Action extends Component {
  render() {
    return(
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

class AddOption extends Component {

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim()

    if (option) {
      alert(option);
    }
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleAddOption}>  
          <input type='text' name='option'/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

export default Indecision;
