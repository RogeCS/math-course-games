export const xVector = (min, max, cardinality) => {
  let xVector = [];
  let step = (max - min) / (cardinality - 1);
  for (let i = 0; i < cardinality; i++) {
    let x = min + step * i;
    xVector.push(x);
  }
  return xVector;
};

export const yVector = (xVector, yMove, xMove) => {
  let yVector = xVector.map((x) => {
    return Math.pow(x + xMove, 2) + yMove;
  });
  return yVector;
};
