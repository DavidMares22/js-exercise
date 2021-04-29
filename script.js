function largestSubset(a, n) {
  a.sort((a, b) => a - b);
  let dp = [];

  // en la ultima posicion esta el subarray mas grande (el numero total de elementos)
  dp[n - 1] = 1;

  //  comenzamos con la penultima posicion 4
  for (let i = n - 2; i >= 0; i--) {
    let mxm = 0;
    // tomamos la posicion del elemento que sigue de i (j = 5)
    for (let j = i + 1; j < n; j++) {
      if (a[j] % a[i] == 0) {
        mxm = Math.max(mxm, dp[j]);
      }
    }
    dp[i] = 1 + mxm;
    // console.log(dp);
  }

  return Math.max(...dp);
}

let a = [2, 3, 6, 8, 9, 18];
let n = a.length;

console.log(largestSubset(a, n));
