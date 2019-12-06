function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteDuplicates = function(head) {
  if (!head) return head;
  let pointer = head;
  while (pointer.next != null && pointer != null){
      if (pointer.next.val === pointer.val){
          pointer.next = pointer.next.next;
      } else {
          pointer = pointer.next;
      }
  }
  console.log(head);
  return head;
};

n1 = new ListNode(1);
n2 = new ListNode(1);
n3 = new ListNode(2);
n1.next = n2;
n2.next = n3;

deleteDuplicates(n1);

let test = null;
console.log(test != null);
console.log(test !== null);
console.log(test == null);
console.log(test === null);
console.log(!null);

var merge = function(nums1, m, nums2, n) {
  let length = m + n;
  
  m--;
  n--;
  while (length--){
      if (nums1[m]>=nums2[n] || n < 0){
          nums1[length] = nums1[m--];
      } else {
          nums1[length] = nums2[n--];
      }
      
  }
  console.log(nums1);
};

merge([1,4,7], 3, [2,3,6], 3);

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

var maxDepth = function(root) {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1;
  let maxLeft, maxRight;
  if (root.left) maxLeft = 1 + maxDepth(root.left);
  if (root.right) maxRight = 1 + maxDepth(root.right);
  if (maxLeft === undefined) return maxRight;
  if (maxRight == undefined) return maxLeft;
  if (maxLeft > maxRight) return maxLeft;
  else return maxRight;
};

let root = new TreeNode(1);
root.right = new TreeNode(2);

console.log(maxDepth(root));