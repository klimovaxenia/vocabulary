
import rightImg from '../img/right.png'
import wrongImg from '../img/wrong.png'
import emptyImg from '../img/empty.png'

function ResultPage({ onReturn, resultWords, onTryAgain }) {
    const handleTryAgClick = () => {
        onTryAgain();
    };
    const handleReturnClick = () => {
        onReturn();
    };
    let right = 0;
    let stateStyle = '';
    let img = '';

    // Converting resultWords into table of results
    const table = resultWords.map((word, index) => {
        if (word.ansState === 'right') {
            right = right + 1;
            stateStyle = 'state-right';
            img = rightImg;
        } else if (word.ansState === 'wrong') {
            stateStyle = 'state-wrong';
            img = wrongImg;
        } else if (word.ansState === 'empty') {
            stateStyle = 'state-empty';
            img = emptyImg;
        }
            return <tr key={index}>
                <td className={stateStyle}><img src={img}/></td>
                <td>
                    <div className='res-word'>{word.word}</div>
                    <div className='res-translt'>{word.translt}</div>
                </td>
            </tr>
    });
    
    return (
        <div className='result-div'>
            <div></div>
            <div className='table-div'>
                <h3>Result {right}/{resultWords.length}</h3>
                <table className="res-table">
                    
                        {table}
                    
                </table>
            </div>
            <div className='try-again-but'><button className='try-again' onClick={handleTryAgClick}>Try Again</button></div>
            <div className='try-again-but'><button className='try-again' onClick={handleReturnClick}>Return</button></div>
            
        </div>
        
    );
}

export default ResultPage;