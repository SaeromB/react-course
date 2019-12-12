import React, {Component} from 'react';

class Indecision extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: props.options
    }
  }
  componentDidMount(){
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json);

      // this.setState(() => {
      //   return {
      //     options:options
      //   }
      // })
      if(options){
        this.setState(() => ({options}))
      }
    } catch(e){
      // do nothing
    }
  }

  //componentDidUpdate will work after props or state changes ex)change options
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json);
    }
  }
  // if there is a web with different pages and render something new Unmount will work
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  // We can delete the options by making a method and passing it down to a child component(<Option/>) and having it called down in the child component
  // that alow to reverse the data flow and the child component can do somthing in the parent component ex)handleDeleteOptions

  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //   options: []
    //   }
    // })
    // If we want to return an object inside the function arrow is used as the function body so it need to be wrapped in ()
    this.setState (()=> ({options: []}));
  }

  //Remove indivisual item
  handleDeleteOption(optionToRemove){
    this.setState((prevState) => ({
    // update options array
    options : prevState.options.filter((option) => optionToRemove !== option)
    }))
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
    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat(option)
    //   }
    this.setState ((prevState)=> ({ options: prevState.options.concat(option)}))
    // })
  }

  

  render(){
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a Computer'
    return(
      <div>
        <Header subtitle={subtitle}/>
        {/* if there is options do not disable button */}
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        {/* this will rerender (this is a prop)*/}
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

// give default to the title
Header.defaultProps = {
  title: 'Indecision'
}

Indecision.defaultProps ={
  options : []
}

const Action = (props) => {
  return (
    <div>
      <button
       onClick={props.handlePick}
       disabled={!props.hasOptions}>
       What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.map((option) => (
        <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />))}
    </div>
  )
}

// the button arrow function will pass in a reference to the function
// this will invoke when the onClick event is tiggered
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e) => {
        props.handleDeleteOption(props.optionText)}}> Remove</button>
      {/* the button will not work and call the option function
          change to a arrow function */}
    </div>
  )
}
// When the remove button gets clicked
// the method does not work directly because than we will pass the event argument up
// instad the fucntion calls optiontext is sent to handleDeleteOption?


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

    this.setState(() => ({error}));
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
