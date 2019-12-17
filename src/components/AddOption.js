import React, {Component} from 'react';


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

