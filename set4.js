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

console.log(subStrings("abcdef"));