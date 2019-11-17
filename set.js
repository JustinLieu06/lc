var lengthOfLastWord = function(s) {
  if (s.length === 0){
      return 0;
  }
  let arr = s.split(" ");
  
  for (let i = arr.length - 1; i >= 0; i--){
      if (arr[i].length !== 0){
          console.log(arr[i].length);
          return arr[i].length;
      }
  }
  return 0;
};

//should output 5
lengthOfLastWord("Hello World");

var twoSum = function(nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++){
        obj[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++){
        let secondNum = target - nums[i];
        if (obj[secondNum] && obj[secondNum] !== i){
            console.log([i, obj[secondNum]]);
            return [i, obj[secondNum]];
        }
    }
};

//should output [0,1]
twoSum([2,7,11,15], 9);

var reverse = function(x) {
    // if (x > Math.pow(2, 31)-1 || x < Math.pow(-2,31)){
    //     return 0;
    // }
    let negativeNumber = false;
    if (x < 0) {
        negativeNumber = true;
        x *= -1;
    }
    let digit;
    let ret = 0;
    while (x > 0){
        digit = x % 10;
        ret *= 10;
        ret += digit;
        x = Math.floor(x / 10);
    }
    if (negativeNumber){
        ret *= -1;
    }
    if (ret > Math.pow(2, 31)-1 || ret < Math.pow(-2,31)){
        return 0;
    }
    console.log(ret);
    return ret;
};

reverse(123);
reverse(-123);
reverse(120);