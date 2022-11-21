import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';

//Counter App using useReducer to manage the states

const Counter = () => {
	const initialState = {
		count: 0
	}
	const [state, dispatch] = useReducer(reducer, initialState)

	function reducer(state, action) {
		switch (action.type) {
			case "increment":
				return { count: state.count + 1 }
			case "decrement":
				return { count: state.count - 1 }
			case "reset":
				return initialState
			default:
				return initialState
		}
	}

	return (
		<div><h1>Count : {state} </h1> <br />
			<Button variant='danger' onClick={() => dispatch({ type: 'decrement' })}>Decrement</Button> <br />
			<Button variant='primary' onClick={() => dispatch({ type: 'reset' })}>Reset</Button> <br />
			<Button variant='success' onClick={() => dispatch({ type: 'increment' })}>Increment</Button></div>
	)
}

export default Counter