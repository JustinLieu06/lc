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
  if (n === 0 || n == 1) return n;
  return fib(n-1) + fib(n-2);
}
console.log(fib(6));