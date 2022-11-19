import React, { useReducer } from 'react'

const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const initialState = { count: 0 }
	function reducer (state, action){
	Switch(actiontype){
	Case "increment":
	return{count: state.count + 1}
	Case "decrement":
	return{count: state.count  1}
	Case "reset":
	return initialState
	default:
	return initialState
	}
	}

  return (
    <div>Counter</div>
  )
}

export default Counter