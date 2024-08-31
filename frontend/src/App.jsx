import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ChessBoard from './ChessBoard';
import Player from './Player';
const socket = io('http://localhost:3000');

const App = () => {
  const [gameId, setGameId] = useState('');
  const [gameState, setGameState] = useState(null);
  const [playerNumber, setPlayerNumber] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    socket.on('gameState', (state) => {
      setGameState(state);
      if (state.players[0] === socket.id) {
        setPlayerNumber('A');
      } else if (state.players[1] === socket.id) {
        setPlayerNumber('B');
      }
    });

    socket.on('fullGame', (message) => {
      alert(message);
    });
  }, [playerNumber]);

  const createGame = () => {
    const id = Math.random().toString(36).substring(2, 7);
    setGameId(id);
    socket.emit('createGame', id);
    setGameStarted(true);
  };

  const joinGame = (id) => {
    socket.emit('joinGame', id);
    setGameStarted(true);
  };
  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  const makeMove = (moveData) => {
    if (gameState.turn !== playerNumber) return;
    socket.emit('makeMove', { gameId: gameId, move: moveData });
  };
  if (gameState && gameState.winner) {
    if (gameState.winner === playerNumber) {
      return <h1 className='text-center'>Congratulations! You Win</h1>;
    } else {
      return <h1 className='text-center'>You Lose,Try Again!</h1>;
    }
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      {!gameStarted && (
        <>
          <div className='mb-4'>
            <button
              onClick={createGame}
              className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700'
            >
              Create Game
            </button>
          </div>
          <div className='mb-4'>
            <input
              type='text'
              value={gameId}
              onChange={(e) => setGameId(e.target.value)}
              placeholder='Game ID'
              className='px-4 py-2 border rounded-md'
            />
          </div>
          <div className='mb-4'>
            <button
              onClick={() => joinGame(gameId)}
              className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700'
            >
              Join Game
            </button>
          </div>
        </>
      )}
      {!gameStarted && (
        <div className='flex gap-2'>
          <div>Simply press</div>
          <div className='px-2 bg-black w-fit rounded-sm'>Enter</div>
          <div>{`To Skip your turn (Created For Development/Testing Purpose)`}</div>
        </div>
      )}
      {gameState && (
        <h1
          className={`mb-4 ${
            playerNumber === 'A' ? 'text-green-400' : 'text-red-400'
          }`}
        >
          Player {playerNumber}
        </h1>
      )}
      {gameState && (
        <div className='flex flex-row gap-5  items-center justify-center mb-4 p-2 bg-violet-500 rounded-lg w-fit '>
          GameID:
          <p className='font-bold text-xl'> {gameId}</p>
          <button
            onClick={() => copyToClipboard(gameId)}
            className='px-4 py-2 bg-grey-500 rounded-md hover:bg-green-700'
          >
            Copy ID
          </button>
        </div>
      )}
      {gameState && (
        <p className='mb-4 font-bold text-lg'>Turn: {gameState.turn}</p>
      )}
      <div className='flex flex-col gap-10'>
        {gameState && (
          <div
            className={`${
              gameState.turn === 'A'
                ? 'shadow-green-500  shadow-2xl'
                : 'shadow-red-500 shadow-2xl'
            }`}
          >
            <ChessBoard
              board={gameState.board}
              makeMove={makeMove}
              player={playerNumber}
            />
          </div>
        )}
      </div>
      {gameState && <Player gameState={gameState} />}
    </div>
  );
};

export default App;
