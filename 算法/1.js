// 递归反转链表
function reverse(head) {
  //   if (!head) {
  //   }
  //   const next = head.next
  //   head.next = reverse(next)
  //   return head
}

// 循环反转
function loopReverse(head) {
  let pre = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

const mockLink = { val: 1, next: { val: 2, next: { val: 3 } } }
console.log(loopReverse(mockLink))
