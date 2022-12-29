import React from 'react';
import { connect } from 'react-redux';

function Buttons(props) {
  return (
    <div>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.text}>Text</button>
    </div>
  );
}

export default connect(null, dispatch => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    text: () => dispatch({ type: 'TEXT' })
  }))(Buttons);
  
  
  
  
  
