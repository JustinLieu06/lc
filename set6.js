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

function parentheses(n){
  let res = [];
  helper('', '', n, n, res);
  function helper(str, value, left, right, res){
    str += value;
    // console.log([str, left, right]);
    if (!left && !right) res.push(str);
    if (left > right) return;

    if (left) helper(str, '(', left - 1, right, res);
    if (right) helper(str, ')', left, right - 1, res);
 
  }
  return res;
}

console.log(parentheses(3));

function movesToSolve(puzzle) {
  // Write your code here
  //set moves to infinity by default
  let moves = Infinity;
  let amountOfSwaps = {};
  //dirs is the possible directions we can swap the blocks
  const dirs = [[1,0], [-1, 0], [0, 1], [0, -1]];
  //solved will be a string of our goal
  let solved = '';
  for (let i = 0; i < puzzle.length * puzzle[0].length; i++){
      solved += i.toString();
  }

  //loop through puzzle with runtime of O(nxm) where n is row length
  //and m is column length
  for (let row = 0; row < puzzle.length; row++){
      for (let column = 0; column < puzzle[row].length; column++){
          //if we find the 0 value in the puzzle, call dfs helper function on it
          if (!puzzle[row][column]){
              dfs(row, column, 0);
              //if couldn't find any solution, return -1
              return moves === Infinity ? -1 : moves;
          }
      }
  }

  function dfs(r, c, swaps){
      let currentPuzzleState = '';
      for (let i = 0; i < puzzle.length; i++){
          currentPuzzleState += puzzle[i].join('');
      }

      //if current requirement of swaps is greater than previous, just end function call
      if (amountOfSwaps[currentPuzzleState] !== undefined && swaps >= amountOfSwaps[currentPuzzleState]) return;
      //update hash if we've never seen this puzzle state before
      amountOfSwaps[currentPuzzleState] = swaps;
      //if we find a state that is solved, then update moves if the swaps to get to this solved state is less
      //than what was recorded before
      if (currentPuzzleState === solved){
          moves = Math.min(moves, swaps);
          return;
      }

      //consider all directions
      for (let i = 0; i < dirs.length; i++){
          let dir = dirs[i];
          let [newR, newC] = [r+dir[0], c+dir[1]];
          //if new coordinates out of bounds, continue
          if (newR < 0 || newC < 0 || newR === puzzle.length || newC === puzzle[0].length) continue;
          //swap numbers
          [puzzle[r][c], puzzle[newR][newC]] = [puzzle[newR][newC], puzzle[r][c]];
          //recursive call on new puzzle state with one increased swap
          dfs(newR, newC, swaps+1);
          //swap back before continuing the loop
          [puzzle[r][c], puzzle[newR][newC]] = [puzzle[newR][newC], puzzle[r][c]];            
      }
  }
}

var findMaxLength = function(nums) {
  let count = 0;
  let max = 0;
  let hash = {0 : -1};
  for (let i = 0; i < nums.length; i++){
      if (!nums[i]) count--;
      else count++;
      
      if (hash[count] !== undefined) max = Math.max(max, i - hash[count]);
      else hash[count] = i;
  }
  return max;
};

var middleNode = function(head) {
  let slow = head, fast = head;
  while (fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
  }
  return slow;
};

var backspaceCompare = function(S, T) {
  function reformat(str, ret = []){
      str.split('').forEach(c => {
          if (c !== '#') ret.push(c);
          else {
              if (ret.length) ret.pop();
          }
      });
      return ret.join('');
  }
  return reformat(S) === reformat(T);
};

var stringShift = function(s, shift) {
    if(A.length == 0 || B.length == 0 || A ===null || B === null) {
        return false;
    }
    return (A + A).indexOf(B) !== -1;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);
root.left.right.right = new TreeNode(7);
root.right = new TreeNode(3);

console.log(binaryTreePaths(root));

function paths(root){
 let ret = [];
 if (root) dfs(root, []);
 
 function dfs(node, path){
   let pathCopy = [];
   pathCopy = pathCopy.concat(path);
   pathCopy.push(node.val); //[1] [1,2] [1,2,5]
   if (node.left) dfs(node.left, pathCopy); //[1,2,5]
   if (node.right) dfs(node.right, pathCopy); //[1]
   if (!node.left && !node.right) {
     if (pathCopy.length) ret.push(pathCopy.join('->'));
   }
   return;
 }

 return ret;
}

var productExceptSelf = function(nums) {
  if (!nums.length || nums.length === 1) return [];
  let ret = [];
  let product = 1;
  for (let i = 0; i < nums.length; i++){
      ret[i] = product;
      product *= nums[i];
  }
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--){
      ret[i] *= product;
      product *= nums[i];
  }
  return ret;
};

var checkValidString = function(s) {
  let N = S.length;
    let go = (i = 0, open = 0) => {
        if (i == N)
            return open == 0;
        if (open < 0)
            return false;
        if (S[i] == '(') return go(i + 1, open + 1);
        if (S[i] == ')') return go(i + 1, open - 1);
        return go(i + 1, open - 1) || go(i + 1, open + 1) || go(i + 1, open); // '*' --> '(' || ')' || ''
    };
    return go();
};

function caesarCipherEncryptor(string, key) {
  // Write your code here.
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let res = "";
	
	for (let i = 0; i < string.length; i++) {
		let oldLetter = string[i];
		let oldIdx = alphabet.indexOf(oldLetter);
		let newIdx = oldIdx + key;
		let newLetter = alphabet[newIdx%26];
		res += newLetter
	}
	return res;
}

function spiralTraverse(arr){
  let res = [];
  let startRow = 0, endRow = array.length - 1, startCol = 0, endCol = array[0].length - 1;
  
  while (startRow <= endRow && startCol <= endCol){

    for (let col = startCol; col <= endCol; col++){
      res.push(arr[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++){
      res.push(arr[row][endCol]);
    }

    for (let col = endCol - 1; col >= startCol; col--){
      if (startRow === endRow) break;
      res.push(arr[endRow][col]);
    }

    for (let row = endRow - 1; row > startRow; row--){
      if (startCol === endCol) break;
      res.push(arr[row][startCol]);
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return res;
}