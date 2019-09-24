
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

function instance(A , B){
    var _proto = A.__proto__;
    var _prototype = B.prototype;
    while(true){
        if(_proto === null){
            return false;
        }
        if(_proto === _prototype){
            return true;
        }
        _proto = _proto.__proto__;
    }
}

let str =  new RegExp("\\w+");
let bool =  instance(str,RegExp) ;
console.log(bool)