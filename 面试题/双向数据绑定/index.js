// var oInput = document.getElementById('demo');
// var oDiv = document.getElementById('show');
// var oData = {
//     valueObj:{
//         value: 'duyi'
//     }
// }

// function upDate() {
//     oDiv.innerText = oData.valueObj.value;
// }


// upDate();
// // 不直接更改，是因为有虚拟dom那一层
// oInput.oninput = function () {
//     oData.valueObj.value = this.value;
// }

// // 监控对象oData的某个属性是否发生改变

// function observe(data) {
//     if (!data || typeof data != 'object') {
//         return data;
//     }
//     // Object.keys(data)把对象的属性遍历出来放到数组里面
//     Object.keys(data).forEach(function (ele) {
//         // Object.defineProperty(data,ele,{

//         // })
//         defineReactive(data, ele, data[ele])
//     })
// }

// // 定义响应式
// // 当oData中的数据发生改变的时候
// // val是当前属性值
// // val形成闭包
// function defineReactive(data, ele, val) {
//     observe(val);
//     Object.defineProperty(data, ele, {
//         get(){
//             console.log('get')
//             return val;
//         },
//         set(newVal){
//             console.log('set')
//             if(newVal == val){
//                 return;
//             }
//             val = newVal;
//             upDate()
//         }
//     })
// }
// observe(oData);
// // oData.value = 10;


// var oInput = document.getElementById('demo');
// var oDiv = document.getElementById('show');
// var oData = {
//     valueObj:{
//         value: 'duyi'
//     },
//     value:'wrapper'
// }
// oInput.oninput = function(){
//     oData.value = this.value;
// }

// function upDate (){
//     oDiv.innerText = oData.value;
// }
// upDate();
// function observe(data){
//     Object.keys(data).forEach(prop=>{
//         defineReactive(data,prop,data[prop]);
//     })
// }   

// observe(oData)

// function defineReactive(data,prop,val){
//     Object.defineProperty(data,prop,{
//         get(){
//             return val;
//         },
//         set(newVal){
//             val = newVal;
//             // upDate();
//         }
//     })
// }



var oInput = document.getElementById('demo');
var oDiv = document.getElementById('show');
var oData = {
    valueObj:{
        value: 'duyi'
    },
    value:'wrapper'
}
oInput.oninput = function(){
    oData.value = this.value;
    // console.log(oData.value)
}

function upDate(){
    oDiv.innerText = oData.value;
}

function observe (obj){
    if(!obj || typeof obj != 'object')return obj;
    Object.keys(obj).forEach(ele=>{
        defineReactive(obj,ele,obj[ele]);
    })
}
// 真正的对对象里面的属性进行检测
function defineReactive(obj,ele,val){
    // 深层次递归
    observe(val);
    Object.defineProperty(obj,ele,{
        get(){
            return val;
        },
        set(newVal){
            if(val == newVal) return;
            val = newVal;
            upDate();
        }
    })
}

observe(oData)