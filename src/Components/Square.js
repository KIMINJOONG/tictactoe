import React, { Component } from 'react';

class Square extends Component {
    state = {
        value: null
    }
    render() {
        return(
            <button 
                className="square"
                onClick= {() => { this.setState({ value: 'X'}) }}
                >
                { this.state.value }  {/* props value를 렌더링 */}
            </button>
        );
    }
}

export default Square;