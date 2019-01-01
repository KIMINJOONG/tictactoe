import React, { Component } from 'react';

class Square extends Component {
    render() {
        return(
            <button className="square">
                { this.props.value }  {/* props value를 렌더링 */}
            </button>
        );
    }
}

export default Square;