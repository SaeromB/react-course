import React, {Component} from 'react';
import Header from './Header';
import Action from './Actions';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class Indecision extends Component {

  state = {
    options: [],
    selectedOption: undefined
  }

  handleDeleteOptions = () => {
    // this.setState(() => {
    //   return {
    //   options: []
    //   }
    // })
    // If we want to return an object inside the function arrow is used as the function body so it need to be wrapped in ()
    this.setState (()=> ({options: []}));
  }

  //Remove indivisual item
  handleDeleteOption =(optionToRemove)=>{
    this.setState((prevState) => ({
    // update options array
    options : prevState.options.filter((option) => optionToRemove !== option)
    }))
  }
  
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum]
    alert(option)
  }

  handleAddOption = (option) => {
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

  
  render(){
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
        <OptionModal />
      </div>
    )
  }
}

export default Indecision
