exports.zerosMatriz = function (n) {
  const matrizA = []
  const matrizB = []
  for (let i = 0; i < n; i++) {
    matrizA.push(0)
  }
  for (let j = 0; j < n; j++) {
    matrizB.push(matrizA)
  }
  return matrizB
}

exports.zerosArray = function (n) {
  const array = []
  for (let i = 0; i < n; i++) {
    array.push(0)
  }
  return array
}
