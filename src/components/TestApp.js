import StartPage from "./StartPage";
import TestList from "./TestList";
import ResultPage from "./ResultPage";
import { useState } from "react";

let count = 0;
let resultWords = [];

function TestApp({ words, onReturn }) {
    const [testCond, setTestCond] = useState("start");
    //let words = [
    //    { word: 'livre', translt: 'book' },
    //    { word: 'maison', translt: 'house' },
    //    { word: 'chien', translt: 'dog' },
    //    { word: 'garçon', translt: 'boy' },
    //    { word: 'lundi', translt: 'monday' },
    //    { word: 'dimanche', translt: 'sunday' },
    //    { word: 'voisin', translt: 'neighbor' }
    //];
    
    let instObj;
    

    const handleStart = () => {
        setTestCond('test');
        
    };

    const handleFinish = () => {
        setTestCond('result');
        
    };

    const handleTryAgain = () => {
        setTestCond('start');
        count = 0;
        resultWords = [];
    };

    const handleReturn = () => {
        //setTestCond('start');
        count = 0;
        resultWords = [];
        onReturn();
    };    

    const recordWords = (flCount, ansState) => {
        if (count < words.length-1 || count === words.length-1) {
            instObj = words[count];
            instObj.flCount = flCount;
            instObj.ansState = ansState;
            resultWords.push(instObj);
            console.log('App count', count);
            console.log('recording flCount:', flCount, 'ansState:', ansState);
            console.log('recordWords', resultWords[count]);
            console.log('recordWords', resultWords);

            count = count + 1;

        }
        

    };

    let page;
   
    if (testCond === 'start') {
        page = <StartPage onStart={handleStart} />
    } else if (testCond === 'test') {
        page = <TestList words={words} onRecord={recordWords} onFinish={handleFinish} />
    } else if (testCond === 'result') {
        page = <ResultPage onReturn={handleReturn} resultWords={resultWords} onTryAgain={handleTryAgain} />
    }
    return (
        <div className="main-div">{page}</div>
        
    );
    
}

export default TestApp;