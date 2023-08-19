function StartPage({ onStart }) {
    const handleClick = () => {
        onStart();
    };
    return (
        <div className="start-is">
            <button className="start-but" onClick={handleClick}>Start</button>
        </div>
        
    );
}

export default StartPage;