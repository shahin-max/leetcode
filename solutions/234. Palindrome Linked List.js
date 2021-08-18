/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function isPalindrome(head) {
  const stack = [];
  let current = head;
​
  while (current) {
    stack.push(current.val);
    current = current.next;
  }
​
  current = head;
  const halfStackLen = stack.length >> 1;
  for (let i = 0; i < halfStackLen; i += 1) {
    if (current.val !== stack.pop()) {
      return false;
    }
    current = current.next;
  }
​
  return true;
};
