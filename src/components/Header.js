import React from 'react';

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

export default Header;

