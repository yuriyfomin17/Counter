import React, {useState} from 'react';


function App() {
    const [const1, setConst1] = useState(0);
    const [const2, setConst2] = useState(0);
    const [const3, setConst3] = useState(0);
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
        wordSetter('was increased');
        randomSetter('by ' + curr_change + ' to equal');
    };
    const SubtractRandom = () => {
        const curr_change = Math.floor(Math.random() * 11)
        setConst3(const3 - curr_change);
        wordSetter('was decreased');
        randomSetter('by ' + curr_change + ' to equal');
    };

    const ResetAll = () => {
        setConst1(0);
        setConst2(0);
        setConst3(0);
        wordSetter('');
        randomSetter('');
    };

    return (
        <div>

            <center>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    One counter
                    : {const1}
                    <br/>
                    <button onClick={increment}>Add 1</button>
                    <button onClick={decrement}>Subtract 1</button>
                </div>
                <div>
                    <br/>
                    Ten Counter
                    : {const2}
                    <br/>
                    <button onClick={Add10}>Add 10</button>

                    <button onClick={Subtract10}>Subtract 10</button>
                </div>
                <br/>
                <br/>
                <div>
                    Random Counter {word} {change}
                    : {const3}
                    <br/>
                    <button onClick={addRandom}>Add random number</button>
                    <button onClick={SubtractRandom}>Subtract random number</button>
                </div>
                <div>
                    <br/>
                    <button onClick={ResetAll}>Reset All</button>
                </div>
            </center>


        </div>

    );
}

export default App;
