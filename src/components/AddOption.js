import React, {Component} from 'react';


// addOption 처럼 parent의 데이터를 바꿔야할 상황이 있다
class AddOption extends Component {
  state = {
    error: undefined
  }
  
  // The arrow function do not have their own this binding
  // Instead they use what ever this binding in the parent scope and for classes that is the class instance

  handleAddOption = (e) => {
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

export default AddOption;

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

