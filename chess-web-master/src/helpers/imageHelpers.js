export const initialPieces = {
  "0:0": { image: require("../assets/A-P1.png"), color: "w", pieceName: "p" },
  "0:1": { image: require("../assets/A-P2.png"), color: "w", pieceName: "p" },
  "0:2": { image: require("../assets/A-H1.png"), color: "w", pieceName: "r" },
  "0:3": { image: require("../assets/A-H2.png"), color: "w", pieceName: "b" },
  "0:4": { image: require("../assets/A-P3.png"), color: "w", pieceName: "p" },


  "4:0": { image: require("../assets/B-P3.png"), color: "b", pieceName: "p" },
  "4:1": { image: require("../assets/B-H2.png"), color: "b", pieceName: "b" },
  "4:2": { image: require("../assets/B-H1.png"), color: "b", pieceName: "r" },
  "4:3": { image: require("../assets/B-P2.png"), color: "b", pieceName: "p" },
  "4:4": { image: require("../assets/B-P1.png"), color: "b", pieceName: "p" },
  

  
};

export const initialPiecesOpponent = {
  "0:0": { image: require("../assets/B-P1.png"), color: "b", pieceName: "p" },
  "0:1": { image: require("../assets/B-P2.png"), color: "b", pieceName: "p" },
  "0:2": { image: require("../assets/B-H1.png"), color: "b", pieceName: "r" },
  "0:3": { image: require("../assets/B-H2.png"), color: "b", pieceName: "b" },
  "0:4": { image: require("../assets/B-P3.png"), color: "b", pieceName: "p" },
 

  "4:0": { image: require("../assets/A-P3.png"), color: "w", pieceName: "p" },
  "4:1": { image: require("../assets/A-H2.png"), color: "w", pieceName: "b" },
  "4:2": { image: require("../assets/A-H1.png"), color: "w", pieceName: "r" },
  "4:3": { image: require("../assets/A-P2.png"), color: "w", pieceName: "p" },
  "4:4": { image: require("../assets/A-P1.png"), color: "w", pieceName: "p" },
  
};

export const gridConstants = {
  gridSize: 350,
};

export const h = [1, 2, 3, 4, 5];
export const v = ["a", "b", "c", "d", "e"];

export const pawnReachedOtherSidePieces = [
  { image: require("../assets/br.png"), color: "b", pieceName: "r" },
  { image: require("../assets/bn.png"), color: "b", pieceName: "n" },
  { image: require("../assets/bb.png"), color: "b", pieceName: "b" },
  { image: require("../assets/bq.png"), color: "b", pieceName: "q" },
];

export const opponentPawnReachedOtherSidePieces = [
  { image: require("../assets/wr.png"), color: "w", pieceName: "r" },
  { image: require("../assets/wn.png"), color: "w", pieceName: "n" },
  { image: require("../assets/wb.png"), color: "w", pieceName: "b" },
  { image: require("../assets/wq.png"), color: "w", pieceName: "q" },
];

export const tempInitialPieces = {
  "0:0": { image: require("../assets/wr.png"), color: "w", pieceName: "r" },
  "0:1": { image: require("../assets/wn.png"), color: "w", pieceName: "n" },
  "0:2": { image: require("../assets/wb.png"), color: "w", pieceName: "b" },
  "0:3": { image: require("../assets/wk.png"), color: "w", pieceName: "k" },
  "0:4": { image: require("../assets/wq.png"), color: "w", pieceName: "q" },
 
 
  "4:0": { image: require("../assets/br.png"), color: "b", pieceName: "r" },
  "4:1": { image: require("../assets/bn.png"), color: "b", pieceName: "n" },
  "4:2": { image: require("../assets/bb.png"), color: "b", pieceName: "b" },
  "4:3": { image: require("../assets/bk.png"), color: "b", pieceName: "k" },
  "4:4": { image: require("../assets/bq.png"), color: "b", pieceName: "q" },

  
};

export const tempInitialPiecesOpponent = {
  "0:0": { image: require("../assets/br.png"), color: "b", pieceName: "r" },
  "0:1": { image: require("../assets/bn.png"), color: "b", pieceName: "n" },
  "0:2": { image: require("../assets/bb.png"), color: "b", pieceName: "b" },
  "0:3": { image: require("../assets/bq.png"), color: "b", pieceName: "q" },
  "0:4": { image: require("../assets/bk.png"), color: "b", pieceName: "k" },
 

  
  "4:0": { image: require("../assets/wr.png"), color: "w", pieceName: "r" },
  "4:1": { image: require("../assets/wn.png"), color: "w", pieceName: "n" },
  "4:2": { image: require("../assets/wb.png"), color: "w", pieceName: "b" },
  "4:3": { image: require("../assets/wq.png"), color: "w", pieceName: "q" },
  "4:4": { image: require("../assets/wk.png"), color: "w", pieceName: "k" },
  
  
};
