import React, { useContext, useState } from 'react';
import { TodosContext } from '../App';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';

function ToDoList() {
    const [todoText, setTodoText] = useState('')
    function handleSubmit(event) {
        event.preventDefault()
        dispatch({type: 'add', payload: todoText})
        setTodoText('')
    }

    // receive state and dispatch from index.js
    const { state, dispatch } = useContext(TodosContext);
    return (
        <div>
            <Form onSubmit={handleSubmit} className="my-3">
                <Row>
                    <Form.Group controlId="formBasicEmail">
                        <Col xs={5}>
                            <Form.Control
                                xs={7}
                                type="text"
                                placeholder="Enter To Do"
                                onChange={event => setTodoText(event.target.value)}
                                value={todoText} />
                        </Col>
                    <Button variant="primary" type="submit" className="my-3">
                        Add Todo
                    </Button>
                    </Form.Group>

                </Row>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>To Do</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {state.todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.text}</td>
                            <td>Edit</td>
                            <td onClick={() => dispatch({ type: 'delete', payload: todo })}>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default ToDoList;