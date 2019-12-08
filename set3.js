var isSymmetric = function(root) {
  if (root === null) return true;
  let helper = (left, right) => {
      if (!left && !right) return true;
      if (!left || !right) return false;
      if (left.val !== right.val) return false;
      
      return (helper(left.left, right.right) && helper(left.right, right.left));   
  }
  return helper(root.left, root.right);
};

var levelOrderBottom = function(root) {
  if (root === null) return [];
  let ret = [];
  let queue = [root];
  while (queue.length){
      let temp = [];
      let size = queue.length;
      for (let i = 0; i < size; i++){
          let curr = queue.shift();
          temp.push(curr.val);
          if (curr.left !== null) queue.push(curr.left);
          if (curr.right !== null) queue.push(curr.right);
      }
      ret.unshift(temp);
  }
  return ret;
};