import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { useSelector, Provider, connect } from 'react-redux';
import Buttons from './Buttons';

// Define the initial state for the Redux store
const initialState = {
  count: 0,
  components: []
};

function Text({text}) {
  return <div>This is some text: {text}</div>;
}

// Define a reducer function to handle state updates
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'TEXT':
      return {
        ...state,
        components: [...state.components, { type: 'text', props: { text: 'Hello World' } }]
      };
    default:
      return state;
  }
}

// Create the Redux store
const store = configureStore({
  reducer
});

// Create a component that displays the current count and has buttons to increment and decrement the count
function Counter(props) {
  const components = useSelector(state => state.components);

  return (
    <div>
      <p>Current count: {props.count}</p>
      <Buttons />
      {components.map((component, index) => {
        switch (component.type) {
          case 'text':
            return <Text key={index} {...component.props} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

// Map the Redux state to the component's props
function mapStateToProps(state) {
  return {
    count: state.count,
    components: state.components
  };
}

// Connect the component to the Redux store
const ConnectedCounter = connect(mapStateToProps, null)(Counter);

// Wrap the root component in a Provider component to make the store available to all components in the app
function App() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
}

export default App;