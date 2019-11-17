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