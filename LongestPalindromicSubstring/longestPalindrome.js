var longestPalindrome = function(s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

// Casos base: cada caractere é uma substring palindrômica de tamanho 1
for (let i = 0; i < n; i++) {
  dp[i][i] = true;
}

return ;
};