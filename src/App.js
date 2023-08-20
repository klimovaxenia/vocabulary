import { useState } from "react";
import TestApp from "./components/TestApp";
import DictList from "./components/DictList";



function App() {
    const [testState, setTestState] = useState("list");
    const [words, setWords] = useState([]);

    const handleChoose = (arr) => {
        setTestState('test');
        setWords(arr);
    };
    const handleReturn = () => {
        setTestState('list');
    };

    let page;
    if (testState === 'list') {
        page = <DictList onChoose={handleChoose} />
    } else if (testState === 'test') {
        page = <TestApp words={words} onReturn={handleReturn} />
    } 
    return (
        <div className="main-div">{page}</div>
        
    );
}

export default App;