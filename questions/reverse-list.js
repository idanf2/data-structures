let a = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5 } } } } }
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//     if(!head.next) {
//         return head;
//     }

//     let nextHead = reverseList(head.next);
//     nextHead.next = head;
//     head.next = undefined;
//     return head;
// };

reverseList(a);

function reverseList(head, prev = null) {
    if (!head) {
        return head;
    }
    const next = reverseList(head.next, head);
    head.next = prev;
    return next || head;

};