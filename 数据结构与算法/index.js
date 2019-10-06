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




