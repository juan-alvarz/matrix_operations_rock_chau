exports.transposeMatrix = function (matrixA) {
  const matrixT = []
  for (let i = 0; i < matrixA.length; i++) {
    const matrixpT = []
    for (let j = 0; j < matrixA.length; j++) {
      matrixpT.push(matrixA[j][i])
    }
    matrixT.push(matrixpT)
  }
  return matrixT
}

exports.scalarProduct = function (matrixA, e) {
  const matrixC = []
  const n = matrixA.length
  const m = matrixA[0].length
  for (let i = 0; i < n; i++) {
    const matrixpC = []
    for (let j = 0; j < m; j++) {
      matrixpC.push(e * matrixA[i][j])
    }
    matrixC.push(matrixpC)
  }
  return matrixC
}
