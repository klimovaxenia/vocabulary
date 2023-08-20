function DictList({ onChoose }) {
    const words1 = [
        { word: 'livre', translt: 'book' },
        { word: 'maison', translt: 'house' },
        { word: 'chien', translt: 'dog' },
        { word: 'garçon', translt: 'boy' }
    ];

    const words2 = [
        { word: 'lundi', translt: 'monday' },
        { word: 'dimanche', translt: 'sunday' },
        { word: 'voisin', translt: 'neighbor' }
    ];

    const handleLiClick1 = () => {
        onChoose(words1);
    };
    const handleLiClick2 = () => {
        onChoose(words2);
    };
    return(
        <div>DictList
            <ul>
                <li onClick={handleLiClick1}>Test 1</li>
                <li onClick={handleLiClick2}>Test 2</li>
            </ul>
        </div>
    );
}

export default DictList;