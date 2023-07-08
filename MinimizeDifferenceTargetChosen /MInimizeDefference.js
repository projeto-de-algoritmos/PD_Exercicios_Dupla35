function minimizeTheDifference(mat, target) {

    const m = mat.length;
    const n = mat[0].length;
    const somaMax = 70 * m; 
  

    const somas = new Array(m + 1).fill(null).map(() => new Array(somaMax + 1).fill(false));
    somas[0][0] = true;
  
  
    for (let i = 1; i <= m; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k <= somaMax; k++) {
          if (somas[i - 1][k]) {
            somas[i][k + mat[i - 1][j]] = true;
          }
        }
      }
    }
  
   
    let difMin = Infinity;
    for (let sum = 0; sum <= somaMax; sum++) {
      if (somas[m][sum]) {
        difMin = Math.min(difMin, Math.abs(target - sum));
      }
    }
  
    return difMin;
  }
  