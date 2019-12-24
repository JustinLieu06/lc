var isSymmetric = function(root) {
  if (root === null) return true;
  let helper = (left, right) => {
      if (!left && !right) return true;
      if (!left || !right) return false;
      if (left.val !== right.val) return false;
      
      return (helper(left.left, right.right) && helper(left.right, right.left));   
  }
  return helper(root.left, root.right);
};

var levelOrderBottom = function(root) {
  if (root === null) return [];
  let ret = [];
  let queue = [root];
  while (queue.length){
      let temp = [];
      let size = queue.length;
      for (let i = 0; i < size; i++){
          let curr = queue.shift();
          temp.push(curr.val);
          if (curr.left !== null) queue.push(curr.left);
          if (curr.right !== null) queue.push(curr.right);
      }
      ret.unshift(temp);
  }
  return ret;
};

var maxProfit = function(prices) {
  var profit = 0;
  var min = Infinity;
  for(var i = 0; i < prices.length; i++){
      if(min > prices[i]) min = prices[i];
      else if(min < prices[i]){
          profit += prices[i] - min;
          min = prices[i];
      } 
  }
  return profit;
};

var generate = function(numRows) {
  let result = [];
  for(let i = 1; i <= numRows; ++i) {
      let arr = [];
      for(let j = 0; j < i; ++j) {
          if(j == 0 || j == i - 1) {
              arr.push(1);
          } else {
              arr.push((result[i - 2][j - 1] + result[i - 2][j]));
          }
      }
      result.push(arr);
  }
  return result;
};

var deleteDuplicates = function(head) {
    
  if(!head) {
      return head;
  }
 var node = head.next;
 var prev = head;
 
 while (node) {
     if (node.val !== prev.val) {
         prev.next = node;
         prev = node;
     }
     node = node.next; 
 }
 prev.next = null;
 return head 
};

var rob = function(nums) {
  if(nums.length === 0) return 0;
  if(nums.length === 1) return nums[0];
  let totals = [nums[0], Math.max(nums[0], nums[1])];
  for(let i = 2; i < nums.length; i ++){
      totals[i] = Math.max(totals[i - 1], totals[i - 2] + nums[i]);
  }
  return totals[totals.length - 1];
};

var lengthOfLastWord = function(s) {
  if (s.length === 0) return 0;
  let arr = s.split(" ");
  let i = arr.length - 1;
  while (i >= 0){
      if (arr[i].length > 0) return arr[i].length;
      i--;
  }
  return 0;
};

var maxProfit = function(prices) {
    let ret = 0;
    let arr = [];
    for (let i = 0; i < prices.length - 1; i++){
        let max = 0;
        for (let j = i + 1; j < prices.length; j++){
            if (prices[j] > max) max = prices[j];
        }
        arr.push(max - prices[i]);
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > ret) ret = arr[i];
    }
    return ret;
};

var isBalanced = function(root) {
    if (root === null) return true;
    let lHeight = getHeight(root.left);
    let rHeight = getHeight(root.right);
    let res = true;
    if (Math.abs(lHeight - rHeight) > 1) res = false;
    return res && isBalanced(root.left) && isBalanced(root.right);
};

var getHeight = function(node) {
    if (node === null) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

var maxProfit = function(prices) {
    var profit = 0;
    var min = Infinity;
    for(var i = 0; i < prices.length; i++){
        if(min > prices[i]) min = prices[i];
        else if(min < prices[i]){
            profit += prices[i] - min;
            min = prices[i];
        } 
    }
    return profit;
};