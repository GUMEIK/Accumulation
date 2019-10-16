const vm = {
    el:'#app',
    data:{
        name:'GUMEI',
        age:18
    }
}

function proxyObject(obj){
    let proxyObj = {};
    for(let prop in obj){
        Object.defineProperty(proxyObj,prop,{
            configurable:true,
            get(){
                return obj[prop];
            },
            set(value){
                console.log('在此处，进行一系列操作')
                obj[prop] = value;
            }
        })
        // 如果obj[prop] 仍然为一个对象，就继续进行代理
        if(obj[prop] instanceof Object){
            proxyObj[prop] = proxyObject(obj[prop])
        }
    }
    return proxyObj;
}
let test = proxyObject(vm);

// let tempValue = ''
// let nullObj = {};
// for(let prop in obj){
//     Object.defineProperty(nullObj,prop,{
//         set(value){
//             console.log('set');
//             nullObj[prop] = value;
//         },
//         get(){
//             console.log('get');
//             return nullObj[prop];
//         }
//     })
// }


// for(let prop in vm.data){
//     Object.defineProperty(vm,prop,{
//         get(){
//             console.log('get')
//             return vm.data[prop];
//         },
//         set(value){
//             console.log('set')
//             vm.data[prop] = value;
//         }
//     })
// }

