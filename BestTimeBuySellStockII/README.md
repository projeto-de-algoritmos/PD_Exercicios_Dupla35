function maxProfit(prices) {
  const n = prices.length;
  if (n <= 1) {
    return 0;
  }

  // Cria uma matriz para armazenar os lucros máximos para cada dia e estado (0: sem ação, 1: com ação)
  const dp = new Array(n).fill(null).map(() => new Array(2).fill(0));

  dp[0][0] = 0; // Sem ação no primeiro dia
  dp[0][1] = -prices[0]; // Com ação no primeiro dia (comprando a ação)

  for (let i = 1; i < n; i++) {
    // Se estivermos sem ação no dia anterior, podemos comprar a ação no dia atual ou continuar sem ação
    dp[i][0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0]);
    // Se estivermos com ação no dia anterior, podemos vender a ação no dia atual ou continuar com a ação
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
  }

  // Retorna o lucro máximo no último dia sem ação
  return dp[n - 1][0];
}
