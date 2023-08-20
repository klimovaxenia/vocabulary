import { useState } from "react";


let count = 0;
let arg = false;
let flag1 = true;

let flCount = 0;
let ansState = 'empty';

function TestList({ words, onRecord, onFinish }) {
    const [nextWord, setNextWord] = useState(words[count].word);
    const [wordIn, setWordIn] = useState('');
    const [status, setStatus] = useState('empty');
    
    let nextFinBut;
    let banner = '';
    let skip;
    
    // Changing banner
    if (status === 'empty') {
        banner = <div className="banner-empty"></div>;
    } else if (status === 'wrong') {
        banner = <div className="banner-wrong">Wrong!</div>;
    } else if (status === 'right') {
        banner = <div className="banner-right">Well Done!</div>;
        
    }
    
    const handleInput = (event) => {
        setWordIn(event.target.value);
    };

    // calling callBack function onFinish to change to reSultPage
    // FINISH
    const handleFinishClick = () => {
        
        // if we try to check and finish
        if (arg === false) { 
            if (wordIn === words[count].translt) {
                
                ansState = 'right';
                onRecord(flCount, ansState);
    
                count = 0;
                flCount = 0;
                ansState = 'empty';
                onFinish();
            } else {                
                ansState = 'wrong';
                setStatus('wrong');
                flCount = flCount + 1;
                console.log('finish fail count', flCount);
                // need this flag, or hndlFinishClick fires two times in a row
                flag1 = false;
            }
        // Finish with Skip button
        } else { 
            count = 0;
            onFinish();
            arg = false;
        }
    };
    
    // Rerendering next word changing nextWord and status
    // SKIP
    const handleScipClick = (event) => {
        event.preventDefault();
        
        setWordIn('');
        onRecord(flCount, ansState);
        
        flCount = 0;
        ansState = 'empty';

        if (count < words.length-1) {
            count = count + 1;
            setNextWord(words[count].word);
            setStatus('empty');

        // If finishing with Skip button
        } else if (count === words.length-1) {
            arg = true;
            handleFinishClick();
        } 
    };
    
    // Rerendering next word changing nextWord and status
    // NEXT
    const handleNextClick = (event) => {
        // Next
        event.preventDefault();
        console.log('Fire NEXT!!!')
        if (wordIn === words[count].translt) {    
            if (count < words.length-1) {
                count = count + 1;
                ansState = 'right';
                onRecord(flCount, ansState);

                flCount = 0;
                ansState = 'empty';

                setNextWord(words[count].word);
                setStatus('right');
                setWordIn('');
            }
        } else {
            setStatus('wrong');
            flCount = flCount + 1;
            console.log('next fail count', flCount);
            ansState = 'wrong';
        }
    };
    
    // Showing next word or resultPage if we submit with enter click
    const onSubmit = (event) => {
        event.preventDefault();
        if (count < words.length-1) {
            console.log('Next on submit');
            handleNextClick();

        // checking flag for debugging. handleFinishClick fire two times. We need just one
        } else if (count === words.length-1 && flag1 === true) { 
            console.log('Finish on submit');
            handleFinishClick();
        }
    };
    
    // At last word show Finish button instead of Next button
    if (count < words.length-1) {
        skip = 'Skip';
        nextFinBut = <button className="next-but" type='submit' onClick={handleNextClick}>Next</button>;
    } else if (count === words.length-1) {
        skip = 'Skip';
        nextFinBut = <button className="finish-but" type='submit' onClick={handleFinishClick}>Finish</button>;
    }
    return (
        <div className="test-div">
            <div className="banner-vr">{banner}</div>
            <form className="test-is" onSubmit={onSubmit}>
                <label className="mylabel">{nextWord}</label>
                <input value={wordIn} onChange={handleInput} />
                <button className="skip-but" type='button' onClick={handleScipClick}>{skip}</button>
                {nextFinBut}
            </form>
            
        </div>
        
    );
}

export default TestList;