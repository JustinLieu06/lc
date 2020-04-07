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