var mergeTwoLists = function (l1, l2) {
    let pointer1 = l1;
    let pointer2 = l2;
    let head;
    if (l1.value <= l2.value) { head = l1; pointer1 = pointer1.next }
    else { head = l2; pointer2 = pointer2.next; };
    let lastNode = head;
    while (pointer1 && pointer2) {
        if (pointer1.value <= pointer2.value) {
            let temp1 = pointer1.next;
            lastNode.next = pointer1;
            pointer1 = temp1;
        } else {
            let temp2 = pointer2.next;
            lastNode.next = pointer2;
            pointer2 = temp2;
        }
        lastNode = lastNode.next;
    }

    if (pointer1 || pointer2) {
        lastNode.next = pointer1 ? pointer1 : pointer2;
    }
    return head;
};

mergeTwoLists({}, {});
