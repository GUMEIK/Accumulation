// function sum(arr){
//     if(arr.length == 0){
//         return 0;
//     }else if(arr.length == 1){
//         return arr[0];
//     }else{
//         return arr[0] + sum(arr.slice(1));
//     }
// }

// var arr = [1,2,3,4,5]
// console.log(sum(arr))
// var oBtn = document.getElementsByTagName('button')[0];
// oBtn.onclick = function(){
//     var obj = {};
//     var arr = [1,2]
//     function demo(){}
//     alert(arr)
// }

// var obj = {
//     name:'gumei',
//     func:function(){
//         console.log('你好呀，李银河！')
//     }
// }



// function repeat(str,num){
//     var count = 0;
//     var temp = str;
//     do{
//         str += temp;
//         count ++;
//     }while(count < num);
//     return str;
// }

// var str = 'abc';

// function instance(A , B){
//     var _proto = A.__proto__;
//     var _prototype = B.prototype;
//     while(true){
//         if(_proto === null){
//             return false;
//         }
//         if(_proto === _prototype){
//             return true;
//         }
//         _proto = _proto.__proto__;
//     }
// }

// let str =  new RegExp("\\w+");
// let bool =  instance(str,RegExp) ;
// console.log(bool)

// var name = 'global'
// var obj = {
//     name:'obj',
//     func:function (){
//         this.name = 'local';
//         return function(){
//             return this.name;
//         }
//     }
// }


// 字符串翻转
// function reverse(str){
//     return str && str.split("").reverse().join("");
// }

// function reverse(str){
//     var arr = str.split("");
//     var newArr = [];
//     for(var i = 0;i < arr.length;i++){
//         newArr[i] = arr[arr.length - 1 - i];
//     }
//     return newArr.join("");
// }


// var str = 'abc'
// let arr = [6, 4, 2, 10, 3, 8, 5, 9, 4, 1]
// function maxSum(arr,num) {
//     let sumCollection = [];
//     function contentSum(arr, num) {
//         if (arr.length > num) {
//             // 对连续的num个数求和
//             let newArr = arr && arr.slice(0, num);
//             let sum = 0;
//             newArr.forEach(ele => {
//                 sum += ele;
//             })
//             sumCollection.push(sum)
//             arr.shift();
//             contentSum(arr, num);
//         }
//         return sumCollection;
//     }
//     let averageResult = contentSum(arr,num).map(ele => ele / num);
//     averageResult.sort((a,b)=>a - b);
//     return averageResult[averageResult.length - 1].toFixed(3);
// }
// maxSum(arr,6)

var str = 'pwwkew';
function lengthOfLongestSubstring(str){
    let len = str.length;
    let map = {};
    let ans = 0;
    for(let i = 0,j = 0;j < len;j++){
        let alpha = str.charAt(j);
        if(map[alpha] != undefined){
            i = Math.max(map[alpha],i);
        }
        map[alpha] = j + 1;
        ans = Math.max(ans, j - i +1);
        console.log(ans)
        // ans = j - i + 1;
    }
    return ans;
}



// function demo(str){

// }
