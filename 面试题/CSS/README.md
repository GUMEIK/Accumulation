# 1. CSS 中的权重
权重值为256进制，若权重值相同，则谁的顺序在前，作用于谁的权重。
!important         Infinity(无穷大)   
行间样式        1000   
id    100   
class、属性、伪类10   
标签选择器伪元素 1   
通配符       0  

# 2. link 和 import 
## 2.1 @import 的用法
- html中：
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        @import url(./index.css);
    </style>
</head>
```
- css 中使用：
```css
@import url(./test.css);

div{
    width:100px;
    height:100px;
    background-color: aquamarine;
}
```
# 3. 标签分类
标签基础分类可分为三类：
## 1.行级元素：
inline（如span，strong，em，a，del等）
注：也称作内联元素。

其特点为：
（1）内容决定元素所站位置（2）不可以通过CSS改变宽高，自带CSS属性，可以更改自带属性。
注：span等元素自带display隐藏属性，可修改为块级元素block，也可设置为隐藏none；
## 2.块级元素block 
如：div,p,ul,li,ol,form,address等）
其特点为：
（1）独占一行（2）可以通过CSS改变宽高。
## 3.行级块元素：inline-block
其特点为：
（1）内容决定大小（2）可以改变宽高。
# 4. 文字溢出打点
# 4.1 单行文本溢出打点
三步：首先让王文本失去换行功能，然后溢出部分隐藏，最后将溢出部分打点。
```css
p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```
# 4.2 多行文本溢出打点
待录入
# 5. display:none;visibility:hidden;opacity:0;
- 当给一个元素设置了display:none;这个属性以后，该元素会脱离文档流，将原来占据的空间释放掉，会导致页面重排和重绘。
- 当给一个元素设置 visibility:hidden; 或者 opacity:0;的时候，元素不会脱离文档流，仍占据原来的位置，visibility 会引起页面重绘，opacity：0；不一定会引起页面重绘；
- 此外，visibility:hidden; 和 opacity：0；在事件的触发上还有一定的区别:前者不能够再次触发事件，而后者可以继续触发绑定在该元素上面的事件。

