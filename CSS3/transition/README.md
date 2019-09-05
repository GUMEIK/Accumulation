# transition-过渡
## 属性(复合属性,可单独进行设置)
### 1. trainsition-property:all/width/heigth....;
要监听的需要进行动画过渡的属性
### 2. transition-duration:1s;
设置过渡时间，单位为秒；
### 3.transition-timing-function:liner/ease.....;
动画的运动函数，线性或者是其他
### 4. transition-delay:1s;
过渡延迟:多少时间执行过渡动画
### 注意：
**写复合属性的时候，transition后两个属性可以不写**
## 示例
```css
div{
    width:100px;
    height: 100px;
    background-color: orange;
    transition:all 2s linear 0.1s;
}

div:hover{
    width:200px;
    height: 300px;
    background-color: aquamarine;
}
``` 