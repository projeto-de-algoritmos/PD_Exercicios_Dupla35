function minimizeTheDifference(mat, val) {
    const m = mat.length;
    const n = mat[0].length;
  
    let difMin = Infinity;
  
    function verAnt(linha, currSum, atualDif) {
      if (atualDif >= difMin) {
        return;
      }
  
      if (linha === m) {
        difMin = Math.min(difMin, atualDif);
        return;
      }
  
      for (let i = 0; i < n; i++) {
        const somaAtual = currSum + mat[linha][i];
        const novaDif = Math.abs(val - somaAtual);
        verAnt(linha + 1, somaAtual, novaDif);
      }
    }
    verAnt(0, 0, Math.abs(val));
    return difMin;
  }
  