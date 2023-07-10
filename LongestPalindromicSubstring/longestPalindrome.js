var longestPalindrome = function(s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(false));
  let maxLen = 1;
  let start = 0;

// Casos base: cada caractere é uma substring palindrômica de tamanho 1
for (let i = 0; i < n; i++) {
  dp[i][i] = true;
}

// Verifica as substrings de tamanho 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      maxLen = 2;
      start = i;
    }
  }

return ;
};