export const moveTrackerMap = (x, y, pieceName, pieces) => {
  let pieceTracker = new PieceTracker(x, y, pieces);

  if (pieceName === "p") {
    return pieceTracker.isPawn();
  }

  if (pieceName === "r") {
    return pieceTracker.isRook();
  }

  if (pieceName === "b") {
    return pieceTracker.isBishop();
  }

  if (pieceName === "n") {
    return pieceTracker.isKnight();
  }

  if (pieceName === "q") {
    return pieceTracker.isQueen();
  }

  if (pieceName === "k") {
    return pieceTracker.isKing();
  }
};

class PieceTracker {
  constructor(x, y, pieces) {
    this.x = x;
    this.y = y;
    this.pieces = pieces;
    this.moveTrack = {};
  }

  isPawn() {
    if (this.x - 1 >= 0) {
      let pos = (this.x - 1).toString() + ":" + this.y.toString();
      if (!this.pieces[pos]) {
        this.moveTrack[pos] = true;
      }
    }

    // Move down
    if (this.x + 1 < 5) {
      let pos = (this.x + 1).toString() + ":" + this.y.toString();
      if (!this.pieces[pos]) {
        this.moveTrack[pos] = true;
      }
    }

    // Move left
    if (this.y - 1 >= 0) {
      let pos = this.x.toString() + ":" + (this.y - 1).toString();
      if (!this.pieces[pos]) {
        this.moveTrack[pos] = true;
      }
    }

    // Move right
    if (this.y + 1 < 5) {
      let pos = this.x.toString() + ":" + (this.y + 1).toString();
      if (!this.pieces[pos]) {
        this.moveTrack[pos] = true;
      }
    }

    return this.moveTrack;
  }

  isRook() {
    this.moveTrack = {}; // Initialize the move track object

    // up
    for (let i = 1; i <= 2; i++) {
        let posX = this.x - i;
        if (posX < 0) break;
        let pos = posX.toString() + ":" + this.y.toString();
        if (this.pieces[pos]) break;
        this.moveTrack[pos] = true;
    }

    // down
    for (let i = 1; i <= 2; i++) {
        let posX = this.x + i;
        if (posX >= 8) break;
        let pos = posX.toString() + ":" + this.y.toString();
        if (this.pieces[pos]) break;
        this.moveTrack[pos] = true;
    }

    // left
    for (let i = 1; i <= 2; i++) {
        let posY = this.y - i;
        if (posY < 0) break;
        let pos = this.x.toString() + ":" + posY.toString();
        if (this.pieces[pos]) break;
        this.moveTrack[pos] = true;
    }

    // right
    for (let i = 1; i <= 2; i++) {
        let posY = this.y + i;
        if (posY >= 8) break;
        let pos = this.x.toString() + ":" + posY.toString();
        if (this.pieces[pos]) break;
        this.moveTrack[pos] = true;
    }

    return this.moveTrack;
}

isBishop() {
  // Reset moveTrack
  this.moveTrack = {};

  // left up
  for (let i = this.x - 1, j = this.y - 1, steps = 1; i >= 0 && j >= 0 && steps <= 2; i--, j--, steps++) {
    let pos = i.toString() + ":" + j.toString();

    if (this.pieces[pos]) {
      break;
    }
    this.moveTrack[pos] = true;
  }

  // left down
  for (let i = this.x + 1, j = this.y - 1, steps = 1; i < 8 && j >= 0 && steps <= 2; i++, j--, steps++) {
    let pos = i.toString() + ":" + j.toString();

    if (this.pieces[pos]) {
      break;
    }
    this.moveTrack[pos] = true;
  }

  // right up
  for (let i = this.x - 1, j = this.y + 1, steps = 1; i >= 0 && j < 8 && steps <= 2; i--, j++, steps++) {
    let pos = i.toString() + ":" + j.toString();

    if (this.pieces[pos]) {
      break;
    }
    this.moveTrack[pos] = true;
  }

  // right down
  for (let i = this.x + 1, j = this.y + 1, steps = 1; i < 8 && j < 8 && steps <= 2; i++, j++, steps++) {
    let pos = i.toString() + ":" + j.toString();

    if (this.pieces[pos]) {
      break;
    }
    this.moveTrack[pos] = true;
  }

  return this.moveTrack;
}


  isKnight() {
    if (this.x + 2 < 8 && this.y + 1 < 8) {
      let pos = (this.x + 2).toString() + ":" + (this.y + 1).toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }

    if (this.x + 2 < 8 && this.y - 1 >= 0) {
      let pos = (this.x + 2).toString() + ":" + (this.y - 1).toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }

    if (this.x - 2 >= 0 && this.y - 1 >= 0) {
      let pos = (this.x - 2).toString() + ":" + (this.y - 1).toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }

    if (this.x - 2 >= 0 && this.y + 1 < 8) {
      let pos = (this.x - 2).toString() + ":" + (this.y + 1).toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }

    if (this.x - 1 >= 0 && this.y + 2 < 8) {
      let pos = (this.x - 1).toString() + ":" + (this.y + 2).toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }

    if (this.x - 1 >= 0 && this.y - 2 >= 0) {
      let pos = (this.x - 1).toString() + ":" + (this.y - 2).toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }

    if (this.x + 1 < 8 && this.y + 2 < 8) {
      let pos = (this.x + 1).toString() + ":" + (this.y + 2).toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }

    if (this.x + 1 < 8 && this.y - 2 >= 0) {
      let pos = (this.x + 1).toString() + ":" + (this.y - 2).toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }

    return this.moveTrack;
  }

  isQueen() {
    // up
    for (let i = this.x - 1; i >= 0; i--) {
      let pos = i.toString() + ":" + this.y.toString();

      if (this.pieces[pos]) {
        break;
      }
      this.moveTrack[pos] = true;
    }

    // down
    for (let i = this.x + 1; i < 8; i++) {
      let pos = i.toString() + ":" + this.y.toString();

      if (this.pieces[pos]) {
        break;
      }
      this.moveTrack[pos] = true;
    }

    // left
    for (let i = this.y - 1; i >= 0; i--) {
      let pos = this.x.toString() + ":" + i.toString();

      if (this.pieces[pos]) {
        break;
      }
      this.moveTrack[pos] = true;
    }

    // right
    for (let i = this.y + 1; i < 8; i++) {
      let pos = this.x.toString() + ":" + i.toString();

      if (this.pieces[pos]) {
        break;
      }
      this.moveTrack[pos] = true;
    }

    // left up
    for (let i = this.x - 1, j = this.y - 1; i >= 0 && j >= 0; i--, j--) {
      let pos = i.toString() + ":" + j.toString();

      if (this.pieces[pos]) {
        break;
      }
      this.moveTrack[pos] = true;
    }

    // left down
    for (let i = this.x + 1, j = this.y - 1; i < 8 && j >= 0; i++, j--) {
      let pos = i.toString() + ":" + j.toString();

      if (this.pieces[pos]) {
        break;
      }
      this.moveTrack[pos] = true;
    }

    // right up
    for (let i = this.x - 1, j = this.y + 1; i >= 0 && j < 8; i--, j++) {
      let pos = i.toString() + ":" + j.toString();

      if (this.pieces[pos]) {
        break;
      }
      this.moveTrack[pos] = true;
    }

    // right down
    for (let i = this.x + 1, j = this.y + 1; i < 8 && j < 8; i++, j++) {
      let pos = i.toString() + ":" + j.toString();

      if (this.pieces[pos]) {
        break;
      }
      this.moveTrack[pos] = true;
    }

    return this.moveTrack;
  }

  isKing() {
   
    //up
    if (this.x - 1 >= 0) {
      let pos = (this.x - 1).toString() + ":" + this.y.toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }
    //down
    if (this.x + 1 < 8) {
      let pos = (this.x + 1).toString() + ":" + this.y.toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }

    //left

    if (this.y - 1 >= 0) {
      let pos = this.x.toString() + ":" + (this.y - 1).toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }

    // right

    if (this.y + 1 < 8) {
      let pos = this.x.toString() + ":" + (this.y + 1).toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }

    //left up

    if (this.x - 1 >= 0 && this.y - 1 >= 0) {
      let pos = (this.x - 1).toString() + ":" + (this.y - 1).toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }

    //right down

    if (this.x + 1 < 8 && this.y + 1 < 8) {
      let pos = (this.x + 1).toString() + ":" + (this.y + 1).toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }

    // left down

    if (this.x + 1 < 8 && this.y - 1 >= 0) {
      let pos = (this.x + 1).toString() + ":" + (this.y - 1).toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }

    // right up

    if (this.x - 1 >= 0 && this.y + 1 < 8) {
      let pos = (this.x - 1).toString() + ":" + (this.y + 1).toString();

      if (!this.pieces[pos]) this.moveTrack[pos] = true;
    }

    return this.moveTrack;
  }
}
