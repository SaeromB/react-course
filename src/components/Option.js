import React from 'react';

// the button arrow function will pass in a reference to the function
// this will invoke when the onClick event is tiggered
const Option = (props) => (
  <div className="option">
    {props.optionText}
    <button className="button button--link" onClick={(e) => {
      props.handleDeleteOption(props.optionText)}}> Remove</button>
    {/* the button will not work and call the option function change to a arrow function */}
  </div>
)

  // When the remove button gets clicked
  // the method does not work directly because than we will pass the event argument up
  // instad the fucntion calls optiontext is sent to handleDeleteOption?

export default Option;