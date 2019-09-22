```html
 <input type="text" id="demo">
    <div id="show">div</div>
```
```javascript
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
```