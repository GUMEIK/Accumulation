# 线性数据结构（又称一维数据结构）
线性数据结构强调存储与顺序，是最基本的数据结构，广泛的用于存储。

## 数组

### 数组特性
#### 数组定长(数组的长度是不可变的)
设定一个数组，其顶层是定长的，我们在使用js可能感受到js不是定长的，其实是因为js引擎帮我们自动的进行扩容等操作。

扩容的过程是消耗性能的，应打足预留量，尽量防止程序执行当中扩容等。

当一个长度为 8 的数组存满了，要存第 9 位数字，系统可能会给你分配长度为 16 的数组空间，然后把前面 那8个数据复制过来。要注意，分配的长度为16的数组空间是重新分配的空间。当你向操作系统发出请求，我想要一份连续的空间，系统就把这个空间给你了，它只保证这个空间是连续的，并不保证其顺序。

数组特性：(前三个为数组特性)
- 存储在物理空间上是连续的
- 底层的数组长度是不可变的
- 数组的变量指向数组第一个元素的位置
- arr[5] 这里的方括号表示存储地址的便宜（通过偏移查询数据性能最好）

优点：
- 查询性能好
指定查询某个位置

缺点：
- 因为空间必须是连续的，所以如果数组比较大，当系统的空间碎片较多的时候，容易存不下。
- 空间碎片就是本来是1 - 9 这九个空间都有数据，由于某些操作，位置3,7没有数据了，3,7 离开之后剩余的小的空间就称之为文空间碎片。

- 500M的空间不一定能储存100M的数组就是由于空间碎片，没有连续的100M的空间了，当你要存下100M的数组时，系统为了让你能存下，系统就会整理空间，就会消耗资源(比如磁盘读写)，所以，要尽量避免数组变长。

- 因为数组的长度是固定的，所以数组的内容难以被添加和删除。当删除了数组中的某个元素时，都会把后面的元素往前移动相应的位置。


如何避免上面数组的缺点呢，就是下面所说的链表

js中的创建数组尽量给一个数组的长度

var arr = new Array(10);
如果内容不是固定的，一般用这种方式来定义一个数组

## 链表(优缺点和数组互补)

### 链表遍历

### 链表逆置(递归)
这里的链表不做特殊说明的话就是指单链表，这里采用递归的方法对单链表进行逆置。

```javascript
function Node(value){
    this.value = value;
    this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


function listReverse(root){
    if(root.next.next == null){
        // 如果当前节点是倒数第二个节点
        // 就将倒数第一个节点的指针指向当前节点
        root.next.next = root;
        // 返回下一个节点(此时最后一个节点已经成为了根节点，这也是最终要返回的结果)
        return root.next;
    }else{
        // 如果当前节点不是倒数第二个节点
        // 就继续查看下一个节点
        var result = listReverse(root.next);
        // 让下一个节点指向当前节点
        root.next.next = root;
        // 让当前节点的指针指向空
        root.next = null;
        return result;
    }
}

var newNode = listReverse(node1)

function each(root){
    // 如果当前节点是最后一个节点
    // 输出当前节点,并返回
    if(root.next == null){
        console.log(root.value)
        return;
    }
    // 如果不是最后一个节点,输出当前节点
    console.log(root.value);
    // 递归
    each(root.next)
}
each(newNode)
```


