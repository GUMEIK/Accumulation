// function Stack(){
//    this.arr = [];
//    this.push = function(value){
//       this.arr.push(value);
//    }
//    this.pop = function(){
//       this.arr.pop();
//    }
// }
// 栈就是在里面待的时间最短的先出来
// let oS1 = new Stack();
// oS1.push(1);
// oS1.push(2)
// console.log(oS1.arr);
// oS1.pop();
// console.log(oS1.arr)

// function Queue(){
//    this.arr = [];
//    this.push = function(value){
//       this.arr.push(value);
//    }
//    this.pop = function(){
//       this.arr.shift();
//    }
// }
// let oQ = new Queue();
// oQ.push(1)
// oQ.push(2)
// console.log(oQ.arr);
// oQ.pop();
// console.log(oQ.arr);



function exchange(arr,a,b){
   let temp = arr[a];
   arr[a] = arr[b];
   arr[b] = temp;
}
function compare(a,b){
   if(a > b) return true;
   else return false;
}

function sort(arr){
   if(arr.length == 0 || arr == null) return;
   for(let j = 0;j < arr.length;j++){
      for(let i = 0;i < arr.length - 1 - j;i++){
         if(compare(arr[i],arr[i +1])){
            exchange(arr,i,i+1)
         }
      }
   }
}
let arr = [2,8,1,65,0,5,3]
// console.log(sort(arr));
sort(arr);
console.log(arr)