export const pieceValidMethodMap = (prevX, prevY, x, y, pieceName, pieces) => {
  let validMove = new ValidMove(prevX, prevY, x, y, pieces);

  // console.log(prevX, x, prevY, y, pieceName);

  if (pieceName === "p") {
    return validMove.isPawn();
  }

  if (pieceName === "r") {
    return validMove.isRook();
  }

  if (pieceName === "b") {
    return validMove.isBishop();
  }

  if (pieceName === "n") {
    return validMove.isKnight();
  }

  if (pieceName === "q") {
    return validMove.isQueen();
  }

  if (pieceName === "k") {
    return validMove.isKing();
  }
};

class ValidMove {
  constructor(prevX, prevY, x, y, pieces) {
    this.prevX = prevX;
    this.prevY = prevY;
    this.x = x;
    this.y = y;
    this.pieces = pieces;
  }

  isPawn() {
    const pos = `${this.x}:${this.y}`;
    const prevPos = `${this.prevX}:${this.prevY}`;

    // Allow movement only in vertical or horizontal directions
    const isMovingVertically = this.prevX === this.x && Math.abs(this.prevY - this.y) === 1;
    const isMovingHorizontally = this.prevY === this.y && Math.abs(this.prevX - this.x) === 1;

    // Ensure no diagonal movement
    if (isMovingVertically || isMovingHorizontally) {
        // Check if the move is a valid non-attacking move (straight)
        if (!this.pieces[pos]) {
            return true;
        }
    }

    return false;
}


isRook() {
  if (
    Math.abs(this.prevX - this.x) > 2 || 
    Math.abs(this.prevY - this.y) > 2 || 
    (Math.abs(this.prevX - this.x) > 0 && Math.abs(this.prevY - this.y) > 0)
  ) {
    return false;
  }

  // Check for up direction
  if (this.prevX - this.x > 0 && this.prevY === this.y) {
    for (let i = this.prevX - 1; i >= this.x; i--) {
      let pos = i.toString() + ":" + this.y.toString();
      if (this.pieces[pos]) {
        if (i === this.x && this.pieces[pos].color !== this.pieces[`${this.prevX}:${this.prevY}`].color) {
          return true; // Capturing an opponent's piece
        }
        return false; // Obstacle in the way
      }
    }
    return true;
  }

  // Check for down direction
  if (this.x - this.prevX > 0 && this.prevY === this.y) {
    for (let i = this.prevX + 1; i <= this.x; i++) {
      let pos = i.toString() + ":" + this.y.toString();
      if (this.pieces[pos]) {
        if (i === this.x && this.pieces[pos].color !== this.pieces[`${this.prevX}:${this.prevY}`].color) {
          return true; // Capturing an opponent's piece
        }
        return false; // Obstacle in the way
      }
    }
    return true;
  }

  // Check for left direction
  if (this.prevY - this.y > 0 && this.prevX === this.x) {
    for (let i = this.prevY - 1; i >= this.y; i--) {
      let pos = this.x.toString() + ":" + i.toString();
      if (this.pieces[pos]) {
        if (i === this.y && this.pieces[pos].color !== this.pieces[`${this.prevX}:${this.prevY}`].color) {
          return true; // Capturing an opponent's piece
        }
        return false; // Obstacle in the way
      }
    }
    return true;
  }

  // Check for right direction
  if (this.y - this.prevY > 0 && this.prevX === this.x) {
    for (let i = this.prevY + 1; i <= this.y; i++) {
      let pos = this.x.toString() + ":" + i.toString();
      if (this.pieces[pos]) {
        if (i === this.y && this.pieces[pos].color !== this.pieces[`${this.prevX}:${this.prevY}`].color) {
          return true; // Capturing an opponent's piece
        }
        return false; // Obstacle in the way
      }
    }
    return true;
  }

  return false;
}



isBishop() {
  // Check if the bishop is moving exactly two blocks diagonally
  if (Math.abs(this.prevX - this.x) !== 2 || Math.abs(this.prevY - this.y) !== 2) {
    return false;
  }

  // Determine the direction of movement
  let rightUp = false,
    rightDown = false,
    leftUp = false,
    leftDown = false;

  if (this.prevX - this.x > 0 && this.prevY - this.y > 0) leftUp = true;
  if (this.prevX - this.x > 0 && this.prevY - this.y < 0) rightUp = true;
  if (this.prevX - this.x < 0 && this.prevY - this.y > 0) leftDown = true;
  if (this.prevX - this.x < 0 && this.prevY - this.y < 0) rightDown = true;

  // Check if the path is clear (since it's always 2 blocks, we just need to check the block in between)
  if (leftUp) {
    let pos = (this.prevX - 1).toString() + ":" + (this.prevY - 1).toString();
    if (this.pieces[pos]) return false;
  }

  if (rightUp) {
    let pos = (this.prevX - 1).toString() + ":" + (this.prevY + 1).toString();
    if (this.pieces[pos]) return false;
  }

  if (leftDown) {
    let pos = (this.prevX + 1).toString() + ":" + (this.prevY - 1).toString();
    if (this.pieces[pos]) return false;
  }

  if (rightDown) {
    let pos = (this.prevX + 1).toString() + ":" + (this.prevY + 1).toString();
    if (this.pieces[pos]) return false;
  }

  return true;
}

  isKnight() {
    if (
      (this.prevX + 2 === this.x && this.prevY + 1 === this.y) ||
      (this.prevX - 2 === this.x && this.prevY + 1 === this.y) ||
      (this.prevX + 2 === this.x && this.prevY - 1 === this.y) ||
      (this.prevX - 2 === this.x && this.prevY - 1 === this.y) ||
      (this.prevX + 1 === this.x && this.prevY + 2 === this.y) ||
      (this.prevX - 1 === this.x && this.prevY + 2 === this.y) ||
      (this.prevX + 1 === this.x && this.prevY - 2 === this.y) ||
      (this.prevX - 1 === this.x && this.prevY - 2 === this.y)
    ) {
      return true;
    }

    return false;
  }

  isQueen() {
    return this.isBishop() || this.isRook();
  }

  isKing() {
    if (
      Math.abs(this.prevX - this.x) <= 1 &&
      Math.abs(this.prevY - this.y) <= 1
    )
      return true;

    return false;
  }
}

export const isValidMoveForCheckMate = (kingPosX, kingPosY, pieces) => {
  let grabPos = kingPosX.toString() + ":" + kingPosY.toString();

  console.log("checkmate->" + grabPos);

  // up

  let checkMateCount = 0;

  try {
    for (let i = kingPosX - 1; i >= 0; i--) {
      let pos = i.toString() + ":" + kingPosY.toString();

      if (pieces[pos] && pieces[pos].color === pieces[grabPos].color) {
        break;
      }

      if (pieces[pos] && pieces[pos].color !== pieces[grabPos].color) {
        if (pieces[pos].pieceName === "r" || pieces[pos].pieceName === "q") {
          console.log("up");

          checkMateCount++;
          break;
        } else break;
      }
    }

    // down

    for (let i = kingPosX + 1; i < 8; i++) {
      let pos = i.toString() + ":" + kingPosY.toString();

      if (pieces[pos] && pieces[pos].color === pieces[grabPos].color) {
        break;
      }

      if (pieces[pos] && pieces[pos].color !== pieces[grabPos].color) {
        if (pieces[pos].pieceName === "r" || pieces[pos].pieceName === "q") {
          console.log("down");
          checkMateCount++;
          break;
        } else break;
      }
    }

    // left

    for (let i = kingPosY - 1; i >= 0; i--) {
      let pos = kingPosX.toString() + ":" + i.toString();

      if (pieces[pos] && pieces[pos].color === pieces[grabPos].color) {
        break;
      }

      if (pieces[pos] && pieces[pos].color !== pieces[grabPos].color) {
        if (pieces[pos].pieceName === "r" || pieces[pos].pieceName === "q") {
          console.log("left");
          checkMateCount++;
          break;
        } else break;
      }
    }

    // right

    for (let i = kingPosY + 1; i < 8; i++) {
      let pos = kingPosX.toString() + ":" + i.toString();

      if (pieces[pos] && pieces[pos].color === pieces[grabPos].color) {
        break;
      }

      if (pieces[pos] && pieces[pos].color !== pieces[grabPos].color) {
        if (pieces[pos].pieceName === "r" || pieces[pos].pieceName === "q") {
          console.log("right");
          checkMateCount++;
          break;
        } else break;
      }
    }

    // leftup

    for (let i = kingPosX - 1, j = kingPosY - 1; i >= 0 && j >= 0; i--, j--) {
      let pos = i.toString() + ":" + j.toString();

      if (pieces[pos] && pieces[pos].color === pieces[grabPos].color) {
        break;
      }

      if (pieces[pos] && pieces[pos].color !== pieces[grabPos].color) {
        if (
          pieces[pos].pieceName === "b" ||
          pieces[pos].pieceName === "q" ||
          (pieces[pos].pieceName === "p" &&
            kingPosX - i === 1 &&
            kingPosY - j === 1)
        ) {
          console.log("leftup");
          checkMateCount++;
          break;
        } else break;
      }
    }

    // leftDown

    for (let i = kingPosX + 1, j = kingPosY - 1; i < 8 && j >= 0; i++, j--) {
      let pos = i.toString() + ":" + j.toString();

      if (pieces[pos] && pieces[pos].color === pieces[grabPos].color) {
        break;
      }

      if (pieces[pos] && pieces[pos].color !== pieces[grabPos].color) {
        if (pieces[pos].pieceName === "b" || pieces[pos].pieceName === "q") {
          console.log("leftdown");
          checkMateCount++;
          break;
        } else break;
      }
    }

    // RightUp

    for (let i = kingPosX - 1, j = kingPosY + 1; i >= 0 && j < 8; i--, j++) {
      let pos = i.toString() + ":" + j.toString();

      if (pieces[pos] && pieces[pos].color === pieces[grabPos].color) {
        break;
      }

      if (pieces[pos] && pieces[pos].color !== pieces[grabPos].color) {
        if (
          pieces[pos].pieceName === "b" ||
          pieces[pos].pieceName === "q" ||
          (pieces[pos].pieceName === "p" &&
            kingPosX - i === 1 &&
            j - kingPosY === 1)
        ) {
          console.log("rightup");
          checkMateCount++;
          break;
        } else break;
      }
    }

    // RightDown

    for (let i = kingPosX + 1, j = kingPosY + 1; i < 8 && j < 8; i++, j++) {
      let pos = i.toString() + ":" + j.toString();

      if (pieces[pos] && pieces[pos].color === pieces[grabPos].color) {
        break;
      }

      if (pieces[pos] && pieces[pos].color !== pieces[grabPos].color) {
        if (pieces[pos].pieceName === "b" || pieces[pos].pieceName === "q") {
          console.log("rightdown");
          checkMateCount++;
          break;
        } else break;
      }
    }

    // knight attack

    let allKnightPos = [
      [2, 1],
      [-2, 1],
      [2, -1],
      [-2, -1],
      [1, 2],
      [-1, 2],
      [-1, -2],
      [1, -2],
    ];

    for (let i = 0; i < 8; i++) {
      let pos =
        (kingPosX + allKnightPos[i][0]).toString() +
        ":" +
        (kingPosY + allKnightPos[i][1]).toString();

      if (pieces[pos] && pieces[pos].color === pieces[grabPos].color) {
        continue;
      }

      if (pieces[pos] && pieces[pos].color !== pieces[grabPos].color) {
        if (pieces[pos].pieceName === "n") {
          console.log("knight");
          checkMateCount++;
          break;
        } else break;
      }
    }
  } catch (e) {
    console.log("Error while validating move for checkmate", e.message);
  }

  // console.log(checkMateCount)

  return checkMateCount;
};
