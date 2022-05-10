//Let's play Rock, Paper, Scissors! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
    if(p1 === p2){
      return 'Draw!'
    } else if(p1 === 'scissors'){
        if(p2 === 'rock'){
          return 'Player 2 won!'
      } else {
          return 'Player 1 won!'
        } 
    } else if(p1 === 'rock'){
        if(p2 === 'paper'){
          return 'Player 2 won!'
      } else {
          return 'Player 1 won!'
        }
    } else {
        if(p2 === 'scissors'){
          return 'Player 2 won!'
      } else {
          return 'Player 1 won!'
        }
    }
  };