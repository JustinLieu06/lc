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

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let node = null;
    let carry = arguments[2];
    if (l1 || l2){
        let val1 = l1? l1.val : 0;
        let val2 = l2? l2.val : 0;
        let next1 = l1 ? l1.next : null;
        let next2 = l2 ? l2.next : null;
        let val = carry ? val1 + val2 + 1 : val1 + val2
        node = new ListNode(val%10);
        node.next = addTwoNumbers(next1, next2, val >= 10);
    } else if (carry) {
        node = new ListNode(1);
        node.next = null;
    }
    console.log(node);
    return node; 
};

n1 = new ListNode(2);
n2 = new ListNode(4);
n3 = new ListNode(3);
n1.next = n2;
n2.next = n3;

n4 = new ListNode(5);
n5 = new ListNode(6);
n6 = new ListNode(4);
n4.next = n5;
n5.next = n6;

addTwoNumbers(n1, n4);

var isPalindrome = function(x) {
    let org = x.toString().split("").join("");
    let rev = x.toString().split("").reverse().join("");
    console.log(rev === org);
    return rev === org;
};

isPalindrome(121);
isPalindrome(-121);
isPalindrome(10);