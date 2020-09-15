import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import AllTodos from './components/AllTodos';
import ActiveTodos from './components/ActiveTodos';
import CompletedTodos from './components/CompletedTodos';

function App() {

    const [currentTab, setCurrentTab] = useState("all");
    const [tasks, updateTasks] = useState([]);
    const [currentTasks, setCurrentTasks] = useState([]);

    useEffect(() => {

        let currentTasks = []
        switch(currentTab) {
            case "all": {
                currentTasks = [...tasks];
                break;
            }
            case "active": {
                currentTasks = tasks.filter( el => !el.done)
                break;
            }
            case "completed": {
                currentTasks = tasks.filter (el => el.done)
                break;
            }
        }
        
        setCurrentTasks(currentTasks);
    },[tasks, currentTab]);

    function changeTab(key) {
        setCurrentTab(key)
    }

    const styles = {
        'title': {
        textAlign: 'center'
        },
        'nav': {
            borderBottom: '1px solid grey'
        }
    };

    function toggleTask(id) {
        let taskClickedIndex = tasks.findIndex(el => el.id === id)
        tasks[taskClickedIndex].done = !tasks[taskClickedIndex].done;
        updateTasks([...tasks]);
    }

    function addTask(taskName) {
        tasks.push({
            name: taskName,
            done: false,
            id: getRandomId()
        });
        updateTasks([...tasks]);
    }

    function deleteTask(id) {
        let remainingTasks = tasks.filter(task => task.id !== id);
        updateTasks([...remainingTasks]);
    }
    
    function deleteAllCompletedTask() {
        updateTasks([...(tasks.filter(task => task.done === false))])
    }

    function getRandomId() {
        return Math.floor(Math.random() * Math.floor(1000000));
    }

    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12} style={styles.title}>
                        <h1>#todo</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={6}>
                        <Row>
                            <Col sm={12}>
                                <Tab.Container 
                                    id="custom-todo-tab-container" 
                                    defaultActiveKey={currentTab}
                                    onSelect={(key) => changeTab(key) }>
                                    <Row>
                                        <Nav className="w-100" style={styles.nav}>
                                            <Col>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="all">All</Nav.Link>
                                                </Nav.Item>
                                            </Col>
                                            <Col>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="active">Active</Nav.Link>
                                                </Nav.Item>
                                            </Col>
                                            <Col>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="completed">Completed</Nav.Link>
                                                </Nav.Item>
                                            </Col>
                                        </Nav>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="all">
                                                    <AllTodos tasks={currentTasks} addTask={addTask} toggleTask={toggleTask}/>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="active">
                                                    <ActiveTodos toggleTask={toggleTask} addTask={addTask} tasks={currentTasks}/>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="completed">
                                                    <CompletedTodos deleteAllCompletedTask={deleteAllCompletedTask} deleteTask={deleteTask} tasks={currentTasks}/>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <footer class="footer">
                <div class="container">
                    <span class="text-muted">Inquiloper @ devchallenges.io</span>
                </div>
            </footer>
        </>
  );
}

export default App;
