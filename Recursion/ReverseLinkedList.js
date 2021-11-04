/*
Given a linkedList 
1->2->3->4->5->6->null
Reverse it
Answer: 6 -> 5->4->3->2->1->null
*/
function Node(value, next){
    this.value = value;
    this.next = next;
}
function LinkedList(head=null, tail=null){
    
    this.head = head;

    this.addToTail = function(value){
        let newNode = new Node(value, null);
        if(!this.head){
            this.head = newNode;
        }else{
            let pointer = this.head;
            while(pointer.next){
                pointer = pointer.next;
            }
            pointer.next = newNode;
        }
    }
}

const n1 = new LinkedList();
n1.addToTail(10);
n1.addToTail(20);
n1.addToTail(30);
n1.addToTail(40);
n1.addToTail(50);
console.log(n1);

function reverseLL(nodeHead){
    if(nodeHead== null || nodeHead.next == null){
        return nodeHead;
    }
    ll = reverseLL(nodeHead.next)
    nodeHead.next.next = nodeHead;
    nodeHead.next = null;
    return ll;
}
console.log(reverseLL(n1.head))