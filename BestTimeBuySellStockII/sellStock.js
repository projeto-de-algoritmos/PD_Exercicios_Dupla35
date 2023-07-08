function maxProfit(prices) {
    const n = prices.length;
    if (n <= 1) {
      return 0;
    }
  
    
    const lucroDia = new Array(n).fill(null).map(() => new Array(2).fill(0));
  
    lucroDia[0][0] = 0; 
    lucroDia[0][1] = -prices[0]; 
  
    for (let i = 1; i < n; i++) {
      
      lucroDia[i][0] = Math.max(lucroDia[i - 1][1] + prices[i], lucroDia[i - 1][0]);
     
      lucroDia[i][1] = Math.max(lucroDia[i - 1][0] - prices[i], lucroDia[i - 1][1]);
    }
  
    return lucroDia[n - 1][0];
  }

