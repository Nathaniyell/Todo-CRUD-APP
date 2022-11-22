import React, { useContext, useState } from 'react';
import { TodosContext } from '../App';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';

function ToDoList() {
    // receive state and dispatch from app.js
    const { state, dispatch } = useContext(TodosContext);
    const [todoText, setTodoText] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [editTodo, setEditTodo] = useState(null)
    const buttonTitle = editMode ? "Edit" : "Add";
    const handleSubmit = event => {
        event.preventDefault();
        if (todoText === '') {
            return
        }
        if (editMode) {
            dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } })
            setEditMode(false)
            setEditTodo(null)
        }
        else {
            dispatch({ type: 'add', payload: todoText })
        }
        /* 
        Do a conditional check if editMode is true, dispatch the ‘edit’ action
    with a changed todo payload payload:{...editTodo,text:todoText} to reflect the edited
    todo text. After the dispatch, we set editMode back to false and editTodo to
    null.
        */
        setTodoText("")
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} className="p-1">
                <Row>
                    <Form.Group controlId="formBasicEmail">
                        <Col>
                            <Form.Control
                                xs='7'
                                type="text"
                                placeholder="Enter To Do"
                                onChange={event => setTodoText(event.target.value)}
                                value={todoText} />
                        </Col>
                    </Form.Group>
                    <Col className='my-3 text-center'>
                        <Button variant="outline-dark" type="submit" className="">
                            {buttonTitle}
                        </Button>
                    </Col>

                </Row>
            </Form>
            <Table striped bordered hover responsive size='lg'>
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
                            <td onClick={() => {
                                setTodoText(todo.text)
                                setEditTodo(todo)
                                setEditMode(true)
                            }}>Edit</td>
                            <td onClick={() => dispatch({ type: 'delete', payload: todo })}>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default ToDoList;