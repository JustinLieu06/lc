// console.log(1 == "1.0")

// let str = "hello";
// str += 3;
// console.log(typeof(str));

// function calc(time1){
//   let [hour1, min1] = time1.split(":");
//   console.log(typeof(parseInt(hour1)));
//   console.log(min1);
// }

// calc("10:30");

// function addStrings(num1, num2){
//   let index_1 = num1.length - 1;
//   let index_2 = num2.length -1;
//   let carry = 0;
//   let ans;
//   while (index_1 > -1 || index_2 > -1){
//     let digit_1 = (index_1 >= 0) ? num1[index_1--] - '0' : 0;
//     let digit_2 = (index_2 >= 0) ? num2[index_2--] - '0' : 0;
//     let sum = digit_1 + digit_2 + carry;
//     ans += (sum%10 + '0');
//     carry = (sum > 9) ? sum/10 : 0;
//   }
//   return (carry != 0) ? "1" + ans : ans;
// }

// console.log(addStrings('35','20'));

// console.log(Math.floor(12/10));
function fib(n){
  // if (n === 0 || n == 1) return n;
  // return fib(n-1) + fib(n-2);

  // let prev = 0;
  // let curr = 1;
  // let i = 0;
  // while (i < n-1){
  //   temp = curr;
  //   curr = prev+curr;
  //   prev = temp;
  //   i++;
  // }
  // return curr;

  return helper(n, {});
}

function helper(n, memo){
  memo = memo || {};
  if (memo[n]) return memo[n];
  if (n <= 1) return n;
  return memo[n] = helper(n-1, memo) + helper(n-2, memo);
}
// console.log(fib(6));

function subStrings(str){
  let ret = [];
  for (let i = 0; i < str.length; i++){
    for (let j = i + 1; j <= str.length; j++){
      ret.push(str.slice(i, j));
    }
  }
  return ret;
}

// console.log(subStrings("abcdef"));
function longestpalindrome(str){
  // let ret = "";
  // for (let i = 0; i < str.length; i++){

  // }
  // return ret;
  if (str === null || str.length < 1) return "";
  let start = 0, end = 0;
  for (let i = 0; i < str.length; i++){
    let len1 = expandFromMiddle(str, i, i);
    let len2 = expandFromMiddle(str, i, i+1);
    let len = Math.max(len1, len2);
    if (len > end - start){
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len/2);
    }
  }
  return str.substring(start, end+1);
}

function expandFromMiddle(s, left, right) {
  if (s === null || left > right) return 0;
  while (left >= 0 && right < s.length && s[left] === s[right]){
    left--;
    right++;
  }
  return right - left - 1;
}
console.log(longestpalindrome("abczxzc"));

var maxSubArray = function(nums) {
  if (nums.length < 1) return 0;
  let max = nums[0];
  let arr = [nums[0]];
  for (let i = 1; i < nums.length; i++){
      arr[i] = Math.max(nums[i], nums[i]+arr[i-1]);
      max = Math.max(max, arr[i]);
  }
  return max;
};

var containsDuplicate = function(nums) {
  let hash = {};
  let ret = false;
  for (let i = 0; i < nums.length; i++){
      let ele = nums[i];
      if (hash[ele] === undefined) hash[ele] = 1;
      else hash[ele] += 1;
  }
  Object.keys(hash).forEach(key => {
      if (hash[key] > 1) {
          ret = true;
      }
  });
  return ret;
};

function rottenOranges(grid){
  let height = grid.length, width = grid[0].length;
  let fresh = 0;
  let queue = [];
  for (let i = 0; i < height; i++){
    for (let j = 0; j < width; j++){
      if (grid[i][j] === 1) fresh++;
      if (grid[i][j] === 2) queue.push([i, j]);
    }
  }
  let minutes = 0;
  while (queue.length){
    for (let i = 0; i < queue.length; i++){
      const [x, y] = queue.shift();
      if (x - 1 >= 0 && grid[x-1][y] === 1){
        grid[x-1][y] = 2;
        fresh--;
        queue.push([x-1, y]);
      }
      if (x + 1 < grid.length && grid[x+1][y] === 1){
        grid[x+1][y] = 2;
        fresh--;
        queue.push([x+1, y]);
      }
      if (y - 1 >= 0 && grid[x][y-1] === 1){
        grid[x][y-1] = 2;
        fresh--;
        queue.push([x, y-1]);
      }
      if (y + 1 < grid[0].length && grid[x][y+1] === 1){
        grid[x][y+1] = 2;
        fresh--;
        queue.push([x, y+1]);
      }
    }
    if (queue.length > 0) minutes++;
  }
  return fresh === 0 ? minutes : -1
}

var subarraySum = function(nums, k) {
  let map = new Map();
  let sum = 0;
  let count = 0;
  map.set(0,1);
  for (let i=0;i<nums.length;i++) {
      sum += nums[i];
      if (map.has(sum-k)) count += map.get(sum-k);
      if (map.has(sum)) map.set(sum, map.get(sum)+1);
      else map.set(sum, 1);
  }
  return count;
};

function arrayOfArrayProducts(arr) {
  
  
  if (arr.length === 1 || arr.length === 0) return [];
  let left = [1], right = [], ret = [];
  right[arr.length - 1] = 1;
  for (let i = 0; i < arr.length - 1; i++){
    left.push(left[i] * arr[i]);
  }
  for (let i = arr.length - 2; i >= 0; i--){
    right[i] = arr[i+1] * right[i+1]
  }
  for (let i = 0; i < arr.length; i++){
    ret.push(left[i] * right[i]);
  }
  return ret;
}

function threeNumberSum(array, targetSum) {
  let ret = [];
  let uniqueRet = [];
  let eleSet = new Set();
  let uniqueTriplets = new Set();
  for (let i = 0; i < array.length; i++){
    eleSet.add(array[i]);
  } //{1, 2, 3}
  array.sort(function(a,b){ a - b});
  for (let i = 0; i < array.length - 1; i++){
    for (let j = i + 1; j < array.length; j++){
      let tempSum = array[i] + array[j];
      if (eleSet.has(targetSum - tempSum)){
        let triplet = [array[i], array[j], targetSum-tempSum];
        triplet.sort(function (a,b){
          a - b;
        });
        ret.push(triplet);
      }
    }
  }

  uniqueRet.push(ret[0]);
  for (let i = 1; i < ret.length; i++){
    let triplet = ret[i];
    for (let j = 0; j < uniqueRet; j++){
      if (JSON.stringify(triplet) !== JSON.stringify(uniqueRet[j])) uniqueRet.push(triplet);
    }
  }
  return uniqueRet;
}

function threeNumberSum(arr, targetSum) {
	let resultArr = [];
	let sorted = arr.sort((a,b) => a - b);
	
	for (let i = 0; i < sorted.length; i++) {
			let currentNum = sorted[i];
			let left = i + 1;
			let right = sorted.length - 1;
			while (left < right) {
				let currentSum = arr[i] + sorted[left] + sorted[right];
				
				if (left >= right) {
					break;
				} else if (currentSum < targetSum) {
					left++;
				} else if (currentSum > targetSum) {
					right--;
				} else {
					resultArr.push([currentNum, sorted[left], sorted[right]])
					left++;	right--;
				}
			}
	}
	
	return resultArr;
}

function isSymmetric(root){
  if (!root) return true;

  function isMirror(s, t){
    if (!s && !t) return true;
    if (!s || !t || s.val !== t.val) return false;
    return isMirror(s.left, t.right) && isMirror(s.right, t.left);
  }
  return isMirror(root.left, root.right);
}

function isMirror(p, q){
  let s1 = [p], s2 = [q];
  while (s1.length > 0 || s2.length > 0){
    let n1 = s1.pop(), n2 = s2.pop();
    if (!n1 && !n2) continue;
    if (!n1 || !n2 || n1.val !== n2.val) return false;
    s1.push(n1.left); s1.push(n1.right);
    s2.push(n2.right); s2.push(n2.left);
  }
  return true;
}

function isMirror(s, t) {
  var q1 = [s], q2 = [t];

  // Perform breadth-first search
  while (q1.length > 0 || q2.length > 0) {
      // Dequeue
      var n1 = q1.shift(), n2 = q2.shift();

      // Two null nodes, let's continue
      if (!n1 && !n2) continue;

      // Return false as long as there is a mismatch
      if (!n1 || !n2 || n1.val !== n2.val) return false;

      // Scan tree s from left to right
      // and scan tree t from right to left
      q1.push(n1.left); q1.push(n1.right);
      q2.push(n2.right); q2.push(n2.left);
  }

  return true;
}

var search = function(nums, target) {
  if (nums.length === 0) return -1;
  
  var index = -1,
    head = 0,
    tail = nums.length - 1,
    mid;
  
  while (head <= tail) {
    mid = Math.floor((head + tail) / 2);
    if (nums[mid] === target) {
      index = mid;
      break;
    } else if ((nums[head] <= target && target < nums[mid]) ||
               (nums[head] > nums[mid] && (nums[head] <= target || target < nums[mid]))) {
      tail = mid - 1;
    } else {
      head = mid + 1;
    }
  }
  
  return index;
};

var toLowerCase = function(str) {
  let diff = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));
  return Array
      .from(str)
      .map( ch => ( ch >= 'A' && ch <= 'Z' ) ? String.fromCharCode(ch.charCodeAt(0) + DIFF) : ch )
      .join('');
};

function longestPeak(array){
  let len = 0;
  let i = 1;
  while (i < array.length - 1){
    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
    if (!isPeak){
      i++;
      continue;
    }

    let leftIdx = i - 2;
    while(leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]){
      leftIdx--;
    }
    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]){
      rightIdx++;
    }

    const currentPeakLen = rightIdx - leftIdx - 1;
    len = Math.max(len, currentPeakLen);
    i = rightIdx;
  }
  return len;
}

function validateBst(tree){
  return helper(tree, -Infinity, Infinity);
}

function helper(node, min, max){
  if (node === null) return true;
  if (node.value < min || node.value >= max) return false;
  return helper(node.left, min, node.value) && helper(node.right, node.value, max);
}

function invert(tree){
  const queue = [tree];
  while (queue.length){
    const curr = queue.shift();
    if (curr === null) continue;
    swap(curr);
    queue.push(curr.left);
    queue.push(curr.right);
  }
}

function swap(tree){
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}

function lowestCost(arr){
  for (let row = 1; row < arr.length; row++){
    for (let col = 0; col < 3; col++){
      let curr = arr[row][col];
      let x, y;
      if (col === 0){
        x = 1; y = 2;
      } else if (col === 1){
        x = 0; y = 2;
      } else {
        x = 0; y = 1;
      }
      let first = arr[row-1][x];
      let second = arr[row-1][y];
      curr = Math.min(curr + first, curr + second);
    }
  }
  return Math.min(...arr[arr.length - 1]);
}

// [1,6,-5]
// []


// [-2,1,2,3,-4]
// [-2,1,2]

// Initiate a stack with the first value of the array 
// Create flag and set to false
// Loop over values in array(ele)
// 	If ele is positive push it into the stack
// 	Else
// 		If the top of the stack is negative 
// 			Push ele into stack 
// 		Else
// 			while(stack.length && top of stack is postive)
// 				Pop of the top of stack and save it to a variable (top)
// 				Compare abs values of top and ele
// 					If top >  ele
// 						Set flag to false
// 						Push top into our stack 
// 						Break
// 					Else if ele > top
// 						Set flag to true
// 					Else
// 						Break

// If the flag is true then push ele into our stack

// Return stack

function asteroidsLeft(asteroids){
  if (asteroids.length < 0) return asteroids;
  let stack = [asteroids[0]];
  let flag = false;
  for (let i = 1; i < asteroids.length; i++){
    let ele = asteroids[i];
    if (ele > 0) stack.push(ele);
    else {
      while (stack.length && stack[stack.length-1] > 0){
        let top = stack.pop();
        let absTop = Math.abs(top);
        let absEle = Math.abs(ele);
        if (absTop > absEle){
          flag = false;
          stack.push(top);
          break;
        }
        else if (absEle > absTop){
          flag = true;
        } 
        else {
          break;
        }      
      }
      if (flag) stack.push(ele);
    }
  }
  return stack;
}

// console.log(asteroidsLeft([1,1,1,1,-5])); //[-5]
// console.log(asteroidsLeft([1,2,3,-3,4,-2])); //[1,2,4]
// console.log(asteroidsLeft([2,-4,1,3])); //[-4,1,3]
// console.log(asteroidsLeft([4,-2,1,3])); //[4,1,3]
// console.log(asteroidsLeft([5,-1,-1,-1,-6])); //[-6]

function iBinaryTree(root){
  if (root === null) return root;
  const left = root.left;
  root.left = root.right;
  root.right = left;
  iBinaryTree(root.left);
  iBinaryTree(root.right);
}

function branchSums(root){
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

function calculateBranchSums(node, runningSum, sums){
  if (!node) return;
  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right){
    sums.push(newRunningSum);
    return;
  }
  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}

function nodeDepths(root){
  let answer = 0;
  helper(root, answer);
  return answer;
}