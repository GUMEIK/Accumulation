# animation-动画
## 属性
```css
animation: name duration timing-function delay iteration-count direction;
```
### **1.animation-name**
属性为 @keyframes 动画规定名称，默认值为'none'，JavaScript语法为：**object.style.animationName="mymove"**;
### **2.animation-duration**   
 规定完成动画所花费的时间，以秒或毫秒计。默认值是 0，意味着没有动画效果。
### **3.animation-timing-function**
 和transition中的此属性一致,规定动画的速度曲线。
### **4.animation-delay**
 规定在动画开始之前的延迟。
### **5.animation-iteration-count:n|infinite**
 规定动画应该播放的次数。
```css
    n 	    定义动画播放次数的数值。 
infinite 	规定动画应该无限次播放。
```
### **6.animation-direction:normal|alternate**
 	规定是否应该轮流反向播放动画。
```css
normal 	默认值。动画应该正常播放。 
alternate 	动画应该轮流反向播放。
```
## keyflame配合animation
```css
@keyframes run{
    /* 0%可以用from表示 */
    0%{
        width:100px;
        height: 100px;
        background-color: orange;
    }
    25%{
        width:200px;
        height: 200px;
        background-color: aquamarine;
    }
    50%{
        width:100px;
        height: 100px;
        background-color: pink;
    }
    /* 100%可以用from表示 */
    100%{
        width:50px;
        height: 50px;
        background-color: orange;
    }
}

div{
    width:100px;
    height: 100px;
    background-color: orange;
    animation: run 4s;
}

div:hover{
    width:200px;
    height: 300px;
    background-color: aquamarine;
}
```