// function createStore(initialState){
//     var state = initialState ||{};
//     var list = [];
//     function getState(type){
//         return state[type];
//     }
//     function dispatch(action){
//         state[action[type]] = action.value;
//         // 调用之前订阅过的函数
//         list.forEach(function(ele){
//             ele();
//         })
//     }
//     function subscribe(func){
//         list.push(func);
//     }
//     return {
//         getState,
//         dispatch,
//         subscribe
//     }
// }

// var store = createStore({
//     name:'xzl',
//     age:18
// });
// var store2 = createStore();

// let corp = {
//     list: {
        
//     },
//     // 每一个key都对应一个数组，key里存放的是相同的
//     // 要执行的函数
//     on: function (key, fn) {
//         if (!this.list[key]) {
//             this.list[key] = [];
//         }
//         this.list[key].push(fn);
//     },
//     emit: function () {

//         let key = [].shift.call(arguments),
//             fns = this.list[key];
//         // 如果缓存列表里没有函数就返回false
//         if (!fns || fns.length === 0) {
//             return false;
//         }
//         // 遍历key值对应的缓存列表
//         // 依次执行函数的方法
//         fns.forEach(fn => {
//             fn.apply(this, arguments);
//         });
//     }
// }

// corp.on('jion',function (position, salary) {
//     console.log('你的职位是：' + position);
//     console.log('期望薪水：' + salary);
// });
// corp.on('other',function (skill, hobby) {
//     console.log('你的技能有：' + skill);
//     console.log('爱好：' + hobby);
// });

// corp.emit('jion','前端', 10000);
// corp.emit('other','端茶和倒水', '足球');

// let event = {
//     list: {},
//     on(key, fn) {
//         if (!this.list[key]) {
//             this.list[key] = [];
//         }
//         this.list[key].push(fn);
//     },
//     emit() {
//         let key = [].shift.call(arguments),
//             fns = this.list[key];
//         if (!fns || fns.length === 0) {
//             return false;
//         }
//         fns.forEach(fn => {
//             fn.apply(this, arguments);
//         });
//     },
//     remove(key, fn) {
//         // 这回我们加入了取消订阅的方法
//         let fns = this.list[key];
//         // 如果缓存列表中没有函数，返回false
//         if (!fns) return false;
//         // 如果没有传对应函数的话
//         // 就会将key值对应缓存列表中的函数都清空掉
//         if (!fn) {
//             fns && (fns.length = 0);
//         } else {
//             // 遍历缓存列表，看看传入的fn与哪个函数相同
//             // 如果相同就直接从缓存列表中删掉即可
//             fns.forEach((cb, i) => {
//                 if (cb === fn) {
//                     fns.splice(i, 1);
//                 }
//             });
//         }
//     }
// };

let event = {
    list:{},
    on:function(key,fn){
        if(!this.list[key]){
            this.list[key] = [];
        }
        this.list[key].push(fn);
    },
    emit:function(){
        let key = [].shift.call(arguments);
        let fns = this.list[key];
        if(!fns || fns.length === 0){
            return false;
        }
        fns.forEach(ele =>{
            ele.apply(this,arguments)
        })
    },
    remove:function(key,fn){
        let fns = this.list[key];
        if(!fns ){return false;};
        if(!fn){
            fns && (fns.length = 0);
        }else{
            fns.forEach((ele,index)=>{
                if(ele === fn){
                    fns.splice(index,1)
                }
            })
        }

    }
}

function sum (a , b){
    // return 1;
    console.log('sum')
    console.log(a +b)
}
function add (a,b){
    console.log('add')
    console.log(a +b);
}
event.on('sum',sum)
event.on('sum',add)

// console.log(event.emit('sum',5,4))