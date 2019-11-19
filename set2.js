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