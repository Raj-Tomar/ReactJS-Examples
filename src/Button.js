import React, {useState} from 'react';

function Button (props) {
    // [a, b] = useState();
    // [counter, setCounter] = useState();
    
    // Moved to App Component
    //const [counter, setCounter] = useState(0);
    
    const handleClick = () => props.onClickFunction(props.increment);

    return (
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    ) ;
}

export default Button;