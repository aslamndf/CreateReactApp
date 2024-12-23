import React from 'react';


const Prop = (props) => {
  return (
    <div>
      <h2>I am a {props.brand}!</h2>
      <h2>I am a {props.name}!</h2>
    </div>
  );
};

export default Prop