var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;
    var curA = headA;
    var curB = headB;
    while (curA != curB) {
        curA = curA == null ? headB : curA.next;
        curB = curB == null ? headA : curB.next;
    }
    return curA;
};
let intersection = { value: 9, next: { value: 11, next: null } }
let a = { value: 1, next: { value: 2, next: intersection } };
let b = { value: 3, next: { value: 4, next: { value: 4, next: intersection } } };
getIntersectionNode(a, b);