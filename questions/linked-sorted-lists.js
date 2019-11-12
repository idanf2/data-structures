/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = l1.value <= l2.value ? l1 : l2;
    let currentL1Node = l1;
    let currentL2Node = l2;
    
    while(currentL1Node && currentL2Node) {
        if (currentL1Node.value <= currentL2Node.value) {
           let temp = currentL1Node.next;
           
            if (!temp || temp.value > currentL2Node.value) {
                currentL1Node.next = currentL2Node;
            } 

             currentL1Node = temp;

        } else {
            let temp = currentL2Node.next;
            
            if (!temp || temp.value > currentL1Node.value) {
               currentL2Node.next = currentL1Node;
            } 
           
           currentL2Node = temp;
           
        }
    }
    
    return head;
};

mergeTwoLists({value: 1, next: {value: 2, next: {value:4}}}, {value:1, next:{value: 3, next:{value:4}}});