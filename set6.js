//4/15
var diameterOfBinaryTree = function(root) {
  let diameter = 0;
  
  dfs(root);
  
  return diameter;
  
  function dfs(node) {
      if (!node) return 0;
      
      const left = dfs(node.left);
      const right = dfs(node.right);
      
      // update diameter at every node
      diameter = Math.max(diameter, left + right);

      // update the largest number of edge so far
      return 1 + Math.max(left, right);
  }
};

let maxProfit = (A, profit = 0) => {
  for (let i = 1; i < A.length; ++i)
      profit += Math.max(0, A[i] - A[i - 1]); // only count positive hillside steps 👆
  return profit;
};