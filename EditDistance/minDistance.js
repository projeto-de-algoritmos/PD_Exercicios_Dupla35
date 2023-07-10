var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;
  
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Inicializar a primeira coluna
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    
    // Inicializar a primeira linha
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // Preencher a matriz dp
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                dp[i][j - 1] + 1,       // Inserção
                dp[i - 1][j] + 1,       // Remoção
                dp[i - 1][j - 1] + 1    // Substituição
                );
            }
        }
    }

  return dp[m][n];
};