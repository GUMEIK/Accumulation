// 链表的逆置



// function each(root){
//     if(root.next == null){
//         console.log(root.value)
//         return ;
//     }
//     console.log(root.value)
//     each(root.next);
// }

// // each(node1)

// function eachReverse(root){
//     if(root.next.next == null){//说明该节点是倒数第二个节点
//         // console.log(root)
//         root.next.next = root;//让倒数第一个节点指向倒数第二个节点
//         return root.next; //返回倒数第一个节点
//     }else{
//         var result = eachReverse(root.next);
//         root.next.next = root;
//         root.next = null;
//         return result
//     }
// }

// // var newRoot = eachReverse(node1);
// // each(newRoot)

// // 寻找到最后一个节点
// function demo(root){
//     // if(root.next != null){
//     //     return demo(root.next);
//     // }else{
//     //     return root;
//     // }
//     if(root.next == null){
//         return root;
//     }else{
//         return demo(root.next)
//     }
// }

// function compare(a, b) {
//     if (a > b) {
//         return true;
//     } else {
//         return false;
//     }
// }





// // var arr = [4,1,6,9,3,2,8]

// // 选择排序是内层循环选择出来一个最大的数，和最后一位交换顺序
// function sort(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var maxIndex = 0;
//         for (var j = 0; j < arr.length - i; j++) {
//             if (compare(arr[j], arr[maxIndex])) {
//                 maxIndex = j;
//             }
//         }
//         exchange(arr,maxIndex,arr.length - 1 - i)
//     }
//     return arr;
// }

// function sort(arr){
//     for(var i = 0;i < arr.length;i++){
//         for(var j = 0;j < arr.length  - 1 - i;j++){
//             if(compare(arr[j],arr[j + 1])){
//                 exchange(arr,j,j+1)  
//             }
//         }
//     }
//     return arr;
// }


// function Node (value){
//     this.value = value;
//     this.left = null;
//     this.right = null;
// }
// /**
//  * 
//  * ACFGBDE
//  * FCGADBE
//  */
// var qianList = ['a','c','f','g','b','d','e'];
// var zhongList = ['f','c','g','a','d','b','e'];

// function demo(qian,zhong){
//     if(qian == null || zhong == null || qian.length == 0 || zhong.length == 0 || qian.length != zhong.length) return;
//     // 找到根节点
//     var root = new Node(qian[0]);
//     // 区分左右子树
//     var index = zhong.indexOf(root.value);
//     var qianLeft = qian.slice(1,1 + index);
//     var qianRight = qian.slice(1+ index,qian.length);
//     var zhongLeft = zhong.slice(0,index);
//     var zhongRight = zhong.slice(index + 1,zhong.length);
//     root.left = demo(qianLeft,zhongLeft);
//     root.right = demo(qianRight,zhongRight);
//     return root;
// }

// var root = demo(qianList,zhongList);
// console.log(root.left);
// console.log(root.right)

// 默认传左闭右开区间
// function quickSort2(arr,start,end){
//     if(start >= end - 1 ) return;
//     var left = start;
//     var right = end ;
//     do{
//         // 执行到left 位 比begin 位大了，停止
//         do left ++;while(left < right && arr[left] < arr[start]);
//         do right --;while(left < right && arr[right] > arr[start]);
//         if(left < right) {
//             // 交换位子
//             var temp = arr[left];
//             arr[left] = arr[right];
//             arr[right] = temp;
//         }
//     }while(left < right)
//     // 如果左边和右边相等就是right - 1
//     // 否则就是right
//     var swapPoint = left == right ? right - 1 :right;
//     var temp1 = arr[swapPoint];
//     arr[swapPoint] = arr[start];
//     arr[start] = temp1;
//     quickSort2(arr,start,swapPoint);
//     quickSort2(arr,swapPoint + 1,end)
// }

// function quickSort(arr){
//     quickSort2(arr,0,arr.length)
// }

// var arr = [4,5,2,3,9,6,7,3]
// quickSort(arr);
// console.log(arr)

/**
 * [4,5,2,9,6,7,3,5]
 * 
 */


//  function Node(value){
//     this.value = value;
//     this.left = null;
//     this.right = null;
//  }

//  var a1 = new Node('a');
//  var b1 = new Node('b');
//  var c1 = new Node('c');
//  var d1 = new Node('d');
//  var e1 = new Node('e');
//  var f1 = new Node('f');
//  var g1 = new Node('g');

//  a1.left = c1;
//  a1.right = b1;

//  c1.left = f1;
//  c1.right = g1;

//  b1.left = d1;
//  b1.right = e1;

//  var a2 = new Node('a');
//  var b2 = new Node('b');
//  var c2 = new Node('c');
//  var d2 = new Node('d');
//  var e2 = new Node('e');
//  var f2 = new Node('f');
//  var g2 = new Node('g');

//  a2.left = c2;
//  a2.right = b2;

//  c2.left = f2;
//  c2.right = g2;

//  b2.left = d2;
//  b2.right = e2;

//  function compareTree(root1,root2){
//     if(root1 == root2) return true;//是同一棵树
//     if(root1 == null && root2 != null || root1 != null && root2 == null) return false;
//     if(root1.value != root2.value) return false;//相同位置的值不相等
//     var leftBool = compareTree(root1.left,root2.left);
//     var rightBool = compareTree(root1.right,root2.right);
//     return leftBool && rightBool;
//  }

//  console.log(compareTree(a1,a2))


// function Node(value){
//    this.value = value;
//    this.left = null;
//    this.right = null
// }

// function addNode(root,num){
//    if(root == null) return;
//    // 代表是重复的树
//    // if(root.value == num) return;
//    if(root.value < num){//目标值比当前节点大
//       if(root.right == null){
//          // 如果右侧为空，则创建节点
//          // 如果右侧不为空，则向右递归
//          root.right = new Node(num)
//       }else{
//          addNode(root.right,num)
//       }
//    }else{//目标值比当前节点小
//       if(root.left == null){
//          root.left = new Node(num)
//       }else{
//          addNode(root.left,num)
//       }
//    }
// }

function buildSearch(arr){
   if(arr == null || arr.length ==0 ) return null;
   let root = new Node(arr[0]);
   for(let i = 1;i<arr.length;i++){
      addNode(root,arr[i])
   }
   return root;
}


// let arr = []
// for(let i = 0;i < 10000;i++){
//    arr[i] = Math.random()*10000;
// }
// let num1 = 0;
// function search(arr,target){
//    for(let i = 0;i< arr.length;i++){
//       num1++
//       if(arr[i] == target){
//          return true;
//       }
//    }
//    return false;
// }
// console.log(search(arr,1000))

// let root = buildSearch(arr)
// let num2 = 0;
// function searchByTree(root,target){
//    num2++;
//    if(root == null) return false;
//    if(root.value == target) return true;
//    if(root.value > target) return searchByTree(root.left,target);
//    else return searchByTree(root.right,target)
// }
// console.log(num1)
// console.log(searchByTree(root,1000))
// console.log(num2)


function Node(value){
   this.value = value;
   this.left = null;
   this.right = null;
}
function addNode(root,num){
   if(root == null || root.length == 0) return;
   if(num > root.value){
      if(root.right == null){
         root.right = new Node(num);
      }else{
         addNode(root.right,num)
      }
   }else{
      if(root.left == null){
         root.left = new Node(num);
      }else{
         addNode(root.left,num)
      }
   }
}
function buildSearchTree(arr){
   if(arr == null || arr.length == 0) return null;
   let root = new Node(arr[0]);
   for(let i = 1;i < arr.length;i++){
      // 对数组的每项进行遍历，然后建立起树结构
      addNode(root,arr[i])
   }
   return root;
}

function searchByTree(root,target){
   if(root == null) return false;
   if(root.value == target) return true;
   if(target > root.value){
      return searchByTree(root.right,target)
   }else{
      return searchByTree(root.left,target);
   }
}

let arr = [12,3,4,7,9,4,4]
let root = buildSearchTree(arr);
console.log(searchByTree(root,11))
