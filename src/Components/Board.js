import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    state= {
        squares: Array(9).fill(null)
        , xIsNext: true
    }
    handleClick(i) {
        const squares = this.state.squares.slice();

        //승자 발생 or 사각형 만칸 시
        if(calcaulateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({ 
            squares: squares 
            , xIsNext: !this.state.xIsNext
        });
    }
    renderSquare(i) {
        return <Square 
                    value={this.state.squares[i]} 
                    onClick={() => this.handleClick(i) }    
                />; // value를 props(i)로
    }
    render() {
        const winner = calcaulateWinner(this.state.squares);
        let status;
        if(winner) {
            status = '승자 : ' + winner;
        } else {
            status = "다음 순서 : " + (this.state.xIsNext ? 'X' : 'O') + '님';
        }
        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    { this.renderSquare(0) }
                    { this.renderSquare(1) }
                    { this.renderSquare(2) }
                </div>
                <div className="board-row">
                    { this.renderSquare(3) }
                    { this.renderSquare(4) }
                    { this.renderSquare(5) }
                </div>
                <div className="board-row">
                    { this.renderSquare(6) }
                    { this.renderSquare(7) }
                    { this.renderSquare(8) }
                </div>

            </div>
        );
    }

}

function calcaulateWinner(squares) {
    const lines = [
        [0,1,2]
        , [3, 4, 5]
        , [6, 7, 8]
        , [0, 3, 6]
        , [1, 4, 7]
        , [2, 5, 8]
        , [0, 4, 8]
        , [2, 4, 6]
    ];

    for(let i=0; i<lines.length; i++) {
        const [a, b, c] = lines[i];

        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c] && squares[c]) {
            return squares[a];
        }
    }

    return null;
}

export default Board;