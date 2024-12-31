var mincostTickets = function (days, costs) {
  const n = days.length;
  const dp = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let cost1 = (i > 0 ? dp[i - 1] : 0) + costs[0];

    let j = i;
    while (j >= 0 && days[i] - days[j] < 7) {
      j--;
    }
    let cost7 = (j >= 0 ? dp[j] : 0) + costs[1];

    j = i;
    while (j >= 0 && days[i] - days[j] < 30) {
      j--;
    }
    let cost30 = (j >= 0 ? dp[j] : 0) + costs[2];
    dp[i] = Math.min(cost1, cost7, cost30);
  }

  return dp[n - 1];
};
