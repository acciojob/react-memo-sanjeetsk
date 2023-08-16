import React from "react";
import { useState, useEffect } from "react";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);
    const [inputText, setInputText] = useState('');

    const handleAddTodo = () => {
        setTodos([...todos, 'New todo']);
    };

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleMemoSubmit = () => {
        if (inputText.length > 5) {
            setTodos([...todos, inputText]);
            setInputText('');
        } else {
            alert('Text should be greater than 5 characters.');
        }
    };

    useEffect(() => {
        console.log('Todos:', todos);
    }, [todos]);

    return (
        <div id="main">
            <h1>React Memo App</h1>
            <div>
                <button onClick={handleAddTodo} id="add-todo-btn">Add Todo</button>
                <span>{todos.length}</span>
            </div>
            <div>
                <span>Count: <button onClick={handleIncrement} id="incr-cnt">{count}</button></span>
            </div>
            <div>
                <input
                    type="text"
                    id="skill-input"
                    value={inputText}
                    onChange={handleInputChange}
                />
                <button id="skill-btn" onClick={handleMemoSubmit}>Submit</button>
            </div>
            <div>
                <ul>
                    {todos.map((todo, index) => (
                        <li id={"todo-"+index} key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default App;