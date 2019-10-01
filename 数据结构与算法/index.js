// 链表的逆置

function Node(value){
    this.value = value;
    this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
// var node4 = new Node(4);
// var node5 = new Node(5);

node1.next = node2;
node2.next = node3;
// node3.next = node4;
// node4.next = node5;

function each(root){
    if(root.next == null){
        console.log(root.value)
        return ;
    }
    console.log(root.value)
    each(root.next);
}

// each(node1)

function eachReverse(root){
    if(root.next.next == null){//说明该节点是倒数第二个节点
        // console.log(root)
        root.next.next = root;//让倒数第一个节点指向倒数第二个节点
        return root.next; //返回倒数第一个节点
    }else{
        var result = eachReverse(root.next);
        console.log(result)
        root.next.next = root;
        root.next = null;
        // console.log(root)
        console.log(result)
        return result;
    }
}

var newRoot = eachReverse(node1);
each(newRoot)

function demo(num){
    if(num == 1){
        return 1;
    }else{
        var result = demo(1)
        console.log(result)
        // return num*demo(num - 1)
    }
    
}

