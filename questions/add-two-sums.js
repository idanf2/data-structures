
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    if (!l1 || !l2) return;
    let firstNode = new ListNode();

    let currL1 = l1;
    let currL2 = l2;
    let prev = firstNode;
    let isLastBiggerTen = false;

    while (currL1 || currL2) {
        let newNode = new ListNode();
        newNode.val = (currL1 ? currL1.val : 0) + (currL2 ? currL2.val : 0) + (isLastBiggerTen ? 1 : 0);
        if (newNode.val >= 10) {
            isLastBiggerTen = true;
            newNode.val %= 10;
        } else { isLastBiggerTen = false; }
        if (prev) {
            prev.next = newNode;
        }
        prev = newNode;
        currL1 = currL1 ? currL1.next : null;
        currL2 = currL2 ? currL2.next : null;
    }

    if (isLastBiggerTen) {
        let lastNode = new ListNode();
        lastNode.val = 1;
        prev.next = lastNode;
    }

    return firstNode.next;
};