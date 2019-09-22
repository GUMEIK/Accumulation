


var oWrapper = document.getElementsByClassName('wrapper')[0];
var oContext = document.getElementsByClassName('content')[0];
var oBox = document.getElementsByClassName('box')[0];

oWrapper.addEventListener('click',function(){
    console.log('wrapper-事件冒泡')
},false)
oWrapper.addEventListener('click',function(){
    console.log('wrapper-事件捕获')
},true)

oContext.addEventListener('click',function(){
    console.log('context-事件冒泡')
},false)
oContext.addEventListener('click',function(){
    console.log('context-事件捕获')
},true)

oBox.addEventListener('click',function(){
    console.log('box-事件冒泡')
},false)
oBox.addEventListener('click',function(){
    console.log('box-事件捕获')
},true)

