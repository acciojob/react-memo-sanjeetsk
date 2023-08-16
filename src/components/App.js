import React from "react";
import { useState, useEffect } from "react";

const App = () => {
    const [todos, setTodos] = useState([]);
      
    const [calculation, setCalculation] = useState("10");
    const [count, setCount] = useState(0);
    const [textValue, setTextValue] = useState('');
    const [inputText, setInputText] = useState([]);

    const handleAddTodo = () => {
        setTodos([...todos, 'New Todo']);
    };

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
        setCalculation(prevCount => prevCount + "0");
    };

    const handleInputChange = (event) => {
        setTextValue(event.target.value);
    };

    const handleMemoSubmit = () => {
        if (textValue.length > 5) {
            setInputText([...inputText, textValue]);
            setTextValue('');
        } else {
            alert('Text should be greater than 5 characters.');
        }
    };

    useEffect(() => {
        setInputText(["HTML", "CSS", "JavaScript", "React"]);
    }, []);

    return (
        <div id="main">
            <h1>React.useMemo</h1>
            <h2>My todos</h2>
            <>
                {todos.map((todo, index) => (
                    <li id={"todo-" + index} key={index}>{todo}</li>
                ))}
            </>
            <button onClick={handleAddTodo} id="add-todo-btn">Add Todo</button>
            <hr></hr>
            <div>
                <span>Count: {count}<button onClick={handleIncrement} id="incr-cnt">+</button></span>
                <h2>Expensive Calculation</h2>
                <p id="calc">{calculation}</p>
            </div>
            <hr></hr>
            <div>
                <h2>React.memo</h2>
                <input
                    type="text"
                    id="skill-input"
                    value={textValue}
                    onChange={handleInputChange}
                />
                <button id="skill-btn" onClick={handleMemoSubmit}>Submit</button>
                <div id="#item-jumbotron">
                    {inputText.map((todo, index) => (
                        <li id={"todo-" + index} key={index}>{todo}</li>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default App;