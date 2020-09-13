import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const NewTodo = (props) =>  {

    const [taskName, setTaskName] = useState('');

    const addTask = (e) => {
        props.addTask(taskName);
        setTaskName('')
    }

    return (
        <Row>
            <Col sm={10}>
                <input className="form-control" type="text" onChange={e => {setTaskName(e.target.value)}} value={taskName}></input>
            </Col>
            <Col sm={2}>
                <Button onClick={addTask}>add</Button>
            </Col>
        </Row>
    )
}

export default NewTodo;