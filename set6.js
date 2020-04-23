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