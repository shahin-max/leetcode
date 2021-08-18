/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
​
// needs improvement, it can be shorter
var addTwoNumbers = function(l1, l2) {
    var l3 = new ListNode();
    var p3 = l3;
    var addOne = false;
    var digitSum = 0;
​
    while (l1 || l2) {
        var l1Digit = 0;
        var l2Digit = 0;
        if (l1) l1Digit = l1.val;
        if (l2) l2Digit = l2.val;
        if (addOne) {
            digitSum = l1Digit + l2Digit + 1;
        } else {
            digitSum = l1Digit + l2Digit;
        }
​
        if (digitSum > 9) {
            digitSum -= 10;
            addOne = true;
        } else {
            addOne = false;
        }
​
        var node = new ListNode(digitSum);
