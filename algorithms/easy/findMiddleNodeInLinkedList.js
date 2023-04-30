function middleNode(linkedList) {
    let count = 1;
    let val = linkedList;
    while(val.next !== null) {
      val = val.next;
      count++
    }
    let middleNode = linkedList;
    for(let i = 0 ; i < Math.floor(count/2); i++) {
      middleNode = middleNode.next;
    }
    return middleNode;
  }