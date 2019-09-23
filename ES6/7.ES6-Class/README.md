# class
```javascript


class Person{
    static breath(){
        return '我是人，我最基本的技能之一就是会呼吸。'
    }
    constructor(name,sex,age,distance){
        // console.log(distance)
        this.name = name || '无名之辈';
        this.sex = sex || '不知男女';
        this.age = age || '年龄未知';
        // this.distance = distance;
        this.run = function(distance){
            console.log('我能跑'+distance+'米！')
        }
        // return {
        //     name:'xxx'
        // }
    }
    smoking(){
        return '我喜欢抽烟！'
    }
}

var oP1 = new Person('xzl','male',18,'500');
var oP2 = new Person('yhs','female',28,1000);

class Girl extends Person{
    constructor(name,sex,age,distance){
        super('女孩子','female','55',0);
    }
}

var oGirl = new Girl();
```