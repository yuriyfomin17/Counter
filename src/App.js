import React, {useState} from 'react';


function App() {
    const [const1, setConst1] = useState(5);
    const [const2, setConst2] = useState(5);
    const [const3, setConst3] = useState(5);
    const [word, wordSetter] = useState(undefined);
    const [change, randomSetter] = useState(undefined);
    const increment = () => {
        setConst1(const1 + 1);
    };
    const decrement = () => {

        setConst1(const1 - 1);


    };
    const Add10 = () => {
        setConst2(const2 + 10);
    };
    const Subtract10 = () => {
        setConst2(const2 - 10);
    };

    const addRandom = () => {
        const curr_change = Math.floor(Math.random() * 11)
        setConst3(const3 + curr_change);
        wordSetter('was increased')
        randomSetter('by ' + curr_change + ' to equal')
    };
    const SubtractRandom = () => {
        const curr_change = Math.floor(Math.random() * 11)
        setConst3(const3 - curr_change);
        wordSetter('was decreased')
        randomSetter('by ' + curr_change + ' to equal')
    };

    return (
        <div>
            <div>
                <button onClick={increment}>Increment</button>
                One counter
                : {const1}
                <button onClick={decrement}>Decrement</button>
            </div>
            <br/>
            <div>
                <button onClick={Add10}>Add 10</button>
                10 Counter
                : {const2}
                <button onClick={Subtract10}>Subtract 10</button>
            </div>
            <br/>
            <div>
                <button onClick={addRandom}>Add random number</button>
                Random Counter {word} {change}
                : {const3}
                <button onClick={SubtractRandom}>Subtract random number</button>
            </div>

        </div>

    );
}

export default App;
