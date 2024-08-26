/* eslint-disable react/prop-types */

import { useEffect } from 'react';

const ChessBoard = ({ board, makeMove }) => {
  let movement = { move: '' };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key === '1' ||
        event.key === '2' ||
        event.key === '3' ||
        event.key === '4' ||
        event.key === '5'
      ) {
        movement.character = event.key;
      }
      if (
        event.key === 'f' ||
        event.key === 'b' ||
        event.key === 'l' ||
        event.key === 'r'
      ) {
        movement.move += event.key;
        if (
          movement.move !== 'f' &&
          movement.move !== 'b' &&
          movement.move !== 'l' &&
          movement.move !== 'r' &&
          movement.move !== 'fl' &&
          movement.move !== 'fr' &&
          movement.move !== 'bl' &&
          movement.move !== 'br'
        ) {
          movement.move = event.key;
        }
      }
      if (event.key === 'Escape') {
        movement = { move: '' };
      }
      if (event.key === 'Enter') {
        console.log(movement);
          makeMove(movement);
        movement = { move: '' };
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  return (
    <div className='grid grid-cols-5 gap-1 bg-gray-800 p-2'>
      {board.flat().map((piece, index) => (
        <div
          key={index}
          className={`w-[100px] h-[100px] flex items-center justify-center text-xl 
                                border border-gray-600  ${
                                  String(
                                    board[parseInt(index / 5)][
                                      parseInt(index % 5)
                                    ]
                                  ).substring(0, 1) === 'A'
                                    ? 'bg-green-400'
                                    : String(
                                        board[parseInt(index / 5)][
                                          parseInt(index % 5)
                                        ]
                                      ).substring(0, 1) === 'B'
                                    ? 'bg-red-300'
                                    : index % 2 === 0
                                    ? 'bg-gray-200'
                                    : 'bg-gray-400'
                                }`}
        >
          {board[parseInt(index / 5)][parseInt(index % 5)]}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
