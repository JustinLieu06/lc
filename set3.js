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