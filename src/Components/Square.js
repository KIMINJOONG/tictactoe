import React from 'react';

function Square(props) {
    return(
        <button 
            className="square"
            onClick= {() => props.onClick() }
            >
            { props.value }  {/* props value를 렌더링 */}
        </button>
    );
};

export default Square;