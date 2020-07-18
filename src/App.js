import React, {useState} from 'react';


function App() {
    const [const1, setConst1] = useState(5);
    const [const2, setConst2] = useState(5);
    const [const3, setConst3] = useState(5);
    const [change, randomSetter] = useState();
    const [word, wordSetter] = useState();
    let h = 0;
    const increment = () => {
        console.log('Increment', const1);
        setConst1(const1 + 1);
        setConst2(const2 + 10)
        let curr_change = Math.floor(Math.random() * 11)
        randomSetter(curr_change)
        setConst3(const3 + curr_change)
        wordSetter('increased')
    };
    const decrement = () => {
        console.log('Minus One', const1);
        setConst1(const1 - 1);
        setConst2(const2 - 10)
        let curr_change = Math.floor(Math.random() * 11)
        randomSetter(curr_change)
        setConst3(const3 - curr_change)
        wordSetter('decreased')
    };

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <div>
                One counter: {const1}

            </div>
            Ten counter: {const2}
            <div>
            </div>
            Random Counter: {const3} was {word} by {change}
            <div>

                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
}

export default App;
