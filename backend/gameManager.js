function startGame() {
  return {
    board: [
      ['A-P1', 'A-P2', 'A-H1', 'A-H2', 'A-P3'],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      ['B-P3', 'B-H2', 'B-H1', 'B-P2', 'B-P1'],
    ],
    turn: 'A',
    moves:[]
  };
}

function checkWin(game, move) {
  let playerA = false;
  let playerB = false;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (game.board[i][j] && game.board[i][j].charAt(0) === 'A') {
        playerA = true;
      }
      if (game.board[i][j] && game.board[i][j].charAt(0) === 'B') {
        playerB = true;
      }
    }
  }
  if (playerA && !playerB) {
    return 'A';
  }
  if (playerB && !playerA) {
    return 'B';
  }
}
function pushMove(game, move,turn) {
  const newMove = {}
  if(move.character === '1' || move.character === '2' || move.character === '3'){
    newMove.character = turn+'-'+'P'+move.character;
  }
  else if(move.character === '4'){
    newMove.character = turn+'-'+'H1';
  }
  else if(move.character === '5'){
    newMove.character= turn+'-'+'H2';
  }
  newMove.move = move.move;
  game.moves.push(newMove);
  return game;
}

function movePawn(board, position, direction, turn) {
  if (turn === 'A') {
    switch (direction) {
      case 'L':
        if (position.x > 0) {
          if (
            board[position.y][position.x - 1] === null ||
            board[position.y][position.x - 1].charAt(0) !== turn
          ) {
            position.x -= 1;
          }
        }
        break;
      case 'R':
        if (position.x < 4) {
          if (
            board[position.y][position.x + 1] === null ||
            board[position.y][position.x + 1].charAt(0) !== turn
          ) {
            position.x += 1;
          }
        }
        break;
      case 'F':
        if (position.y < 4) {
          if (
            board[position.y + 1][position.x] === null ||
            board[position.y + 1][position.x].charAt(0) !== turn
          ) {
            position.y += 1;
          }
        }
        break;
      case 'B':
        if (position.y > 0) {
          if (
            board[position.y - 1][position.x] === null ||
            board[position.y - 1][position.x].charAt(0) !== turn
          ) {
            position.y -= 1;
          }
        }
        break;
      default:
        console.error('Invalid direction for Pawn:', direction);
        return;
    }
  } else {
    switch (direction) {
      case 'L':
        if (position.x > 0) {
          if (
            board[position.y][position.x - 1] === null ||
            board[position.y][position.x - 1].charAt(0) !== turn
          ) {
            position.x -= 1;
          }
        }
        break;
      case 'R':
        if (position.x < 4) {
          if (
            board[position.y][position.x + 1] === null ||
            board[position.y][position.x + 1].charAt(0) !== turn
          ) {
            position.x += 1;
          }
        }
        break;
      case 'F':
        if (position.y > 0) {
          if (
            board[position.y - 1][position.x] === null ||
            board[position.y - 1][position.x].charAt(0) !== turn
          ) {
            position.y -= 1;
          }
        }
        break;
      case 'B':
        if (position.y < 4) {
          if (
            board[position.y + 1][position.x] === null ||
            board[position.y + 1][position.x].charAt(0) !== turn
          ) {
            position.y += 1;
          }
        }
        break;
      default:
        console.error('Invalid direction for Pawn:', direction);
        return;
    }
  }
}

function moveHero1(board, position, direction, turn) {
  if (turn === 'A') {
    switch (direction) {
      case 'L':
        if (position.x > 1) {
          if (
            board[position.y][position.x - 2] === null ||
            board[position.y][position.x - 2].charAt(0) !== turn
          ) {
            position.x -= 2;
          }
        }
        break;
      case 'R':
        if (position.x < 3) {
          if (
            board[position.y][position.x + 2] === null ||
            board[position.y][position.x + 2].charAt(0) !== turn
          ) {
            position.x += 2;
          }
        }
        break;
      case 'F':
        if (position.y < 3) {
          if (
            board[position.y + 2][position.x] === null ||
            board[position.y + 2][position.x].charAt(0) !== turn
          ) {
            position.y += 2;
          }
        }
        break;
      case 'B':
        if (position.y > 1) {
          if (
            board[position.y - 2][position.x] === null ||
            board[position.y - 2][position.x].charAt(0) !== turn
          ) {
            position.y -= 2;
          }
        }
        break;
      default:
        console.error('Invalid direction for Hero1:', direction);
        return;
    }
  } else {
    switch (direction) {
      case 'L':
        if (position.x > 1) {
          if (
            board[position.y][position.x - 2] === null ||
            board[position.y][position.x - 2].charAt(0) !== turn
          ) {
            position.x -= 2;
          }
        }
        break;
      case 'R':
        if (position.x < 3) {
          if (
            board[position.y][position.x + 2] === null ||
            board[position.y][position.x + 2].charAt(0) !== turn
          ) {
            position.x += 2;
          }
        }
        break;
      case 'F':
        if (position.y > 1) {
          if (
            board[position.y - 2][position.x] === null ||
            board[position.y - 2][position.x].charAt(0) !== turn
          ) {
            position.y -= 2;
          }
        }
        break;
      case 'B':
        if (position.y < 3) {
          if (
            board[position.y + 2][position.x] === null ||
            board[position.y + 2][position.x].charAt(0) !== turn
          ) {
            position.y += 2;
          }
        }
        break;
      default:
        console.error('Invalid direction for Hero1:', direction);
        return;
    }
  }
}

function moveHero2(board, position, direction, turn) {
  if (turn === 'A') {
    switch (direction) {
      case 'FL':
        if (position.x > 0 && position.y < 4) {
          if (
            board[position.y + 1][position.x - 1] === null ||
            board[position.y + 1][position.x - 1].charAt(0) !== turn
          ) {
            position.x -= 1;
            position.y += 1;
          }
        }
        break;
      case 'FR':
        if (position.x < 4 && position.y < 4) {
          if (
            board[position.y + 1][position.x + 1] === null ||
            board[position.y + 1][position.x + 1].charAt(0) !== turn
          ) {
            position.x += 1;
            position.y += 1;
          }
        }
        break;
      case 'BL':
        if (position.x > 0 && position.y > 0) {
          if (
            board[position.y - 1][position.x - 1] === null ||
            board[position.y - 1][position.x - 1].charAt(0) !== turn
          ) {
            position.x -= 1;
            position.y -= 1;
          }
        }
        break;
      case 'BR':
        if (position.x < 4 && position.y > 0) {
          if (
            board[position.y - 1][position.x + 1] === null ||
            board[position.y - 1][position.x + 1].charAt(0) !== turn
          ) {
            position.x += 1;
            position.y -= 1;
          }
        }
        break;
      default:
        console.error('Invalid direction for Hero2:', direction);
        return;
    }
  } else {
    switch (direction) {
      case 'FL':
        if (position.x > 0 && position.y > 0) {
          if (
            board[position.y - 1][position.x - 1] === null ||
            board[position.y - 1][position.x - 1].charAt(0) !== turn
          ) {
            position.x -= 1;
            position.y -= 1;
          }
        }
        break;
      case 'FR':
        if (position.x < 4 && position.y > 0) {
          if (
            board[position.y - 1][position.x + 1] === null ||
            board[position.y - 1][position.x + 1].charAt(0) !== turn
          ) {
            position.x += 1;
            position.y -= 1;
          }
        }
        break;
      case 'BL':
        if (position.x > 0 && position.y < 4) {
          if (
            board[position.y + 1][position.x - 1] === null ||
            board[position.y + 1][position.x - 1].charAt(0) !== turn
          ) {
            position.x -= 1;
            position.y += 1;
          }
        }
        break;
      case 'BR':
        if (position.x < 4 && position.y < 4) {
          if (
            board[position.y + 1][position.x + 1] === null ||
            board[position.y + 1][position.x + 1].charAt(0) !== turn
          ) {
            position.x += 1;
            position.y += 1;
          }
        }
        break;
      default:
        console.error('Invalid direction for Hero2:', direction);
        return;
    }
  }
}

function play(game, move) {
  console.log(move);
  if (
    move.character === '1' ||
    move.character === '2' ||
    move.character === '3'
  ) {
    let position = { x: null, y: null };
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (game.board[i][j] === `${game.turn}-P${move.character}`) {
          position.x = j;
          position.y = i;
        }
      }
    }
    if (position.x !== null && position.y !== null) {
      game.board[position.y][position.x] = null;
      movePawn(game.board, position, move.move.toUpperCase(), game.turn);
      pushMove(game, move,game.turn);
      game.board[position.y][position.x] = `${game.turn}-P${move.character}`;
      console.log(game.board);
    }
  }
  if (move.character === '4') {
    let position = { x: null, y: null };
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (game.board[i][j] === `${game.turn}-H1`) {
          position.x = j;
          position.y = i;
        }
      }
    }
    if (position.x !== null && position.y !== null) {
      game.board[position.y][position.x] = null;
      moveHero1(game.board, position, move.move.toUpperCase(), game.turn);
      pushMove(game, move,game.turn);
      game.board[position.y][position.x] = `${game.turn}-H1`;
      console.log(game.board);
    }
  }
  if (move.character === '5') {
    let position = { x: null, y: null };
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (game.board[i][j] === `${game.turn}-H2`) {
          position.x = j;
          position.y = i;
        }
      }
    }
    if (position.x !== null && position.y !== null) {
      game.board[position.y][position.x] = null;
      moveHero2(game.board, position, move.move.toUpperCase(), game.turn);
      pushMove(game, move,game.turn);
      game.board[position.y][position.x] = `${game.turn}-H2`;
      console.log(game.board);
    }
  }

  game.winner = checkWin(game, move);
  console.log(game.winner, 'is the winner');
  game.turn = game.turn === 'A' ? 'B' : 'A';
  return game;
}

module.exports = { startGame, play };
