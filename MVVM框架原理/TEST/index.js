// const vm = {
//     el:'#app',
//     data:{
//         name:'GUMEI',
//         age:18
//     }
// }

// function proxyObject(obj){
//     let proxyObj = {};
//     for(let prop in obj){
//         Object.defineProperty(proxyObj,prop,{
//             configurable:true,
//             get(){
//                 return obj[prop];
//             },
//             set(value){
//                 console.log('在此处，进行一系列操作')
//                 obj[prop] = value;
//             }
//         })
//         // 如果obj[prop] 仍然为一个对象，就继续进行代理
//         if(obj[prop] instanceof Object){
//             proxyObj[prop] = proxyObject(obj[prop])
//         }
//     }
//     return proxyObj;
// }
// let test = proxyObject(vm);

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
// let arr1 = []
// let arr = [1,2,3,4]
// function proxyArray(arr){
//     let obj = {
//         push(){},
//         pop(){},
//         shift(){},
//         unshift(){}
//     }
//     const arrayPrototype = Array.prototype;
//     for(let prop in obj){
//         Object.defineProperty(obj,prop,{
//             enumerable:true,
//             configurable:true,
//             value:function(...args){
//                 console.log('当数组发生变化时，在此处做一些操作');
//                 let result = arrayPrototype[prop].apply(this,args);
//                 return result;
//             }
//         })
//     }
//     arr.__proto__ = obj;
//     return arr;
// }
//  arr = proxyArray(arr);
// 虚拟dom树
function VNode(
    tag,//标签类型
    elm,//对应的真实节点
    children,//当前节点下的子节点
    text,//当前虚拟节点中的文本
    data,//
    parent,//父级节点
    nodeType//节点类型
    ){
        this.tag = tag;
        this.elm = elm;
        this.children = children;
        this.text = text;
        this.data = data;
        this.parent = parent;
        this.nodeType = nodeType;
        this.env = {};//当前节点的环境变量
        this.instructions = null;//存放指令
        this.template = [];//当前节点的所在的模板
}

// 构建虚拟dom树
function constructVNode(root){
    let vnode = null;
    let children = [];
    // 看节点是否含有文本，只有文本节点才会含有文本
    let text = getNodeText(root);
    let data = null;
    let nodeType = root.nodeType;
    let tag = root.nodeName;
    vnode = new VNode(tag,root,children,text,data,parent,nodeType);
    let childs = vnode.elm.childNodes;
    //     let childs = root.childNodes;
    // 对每一个子节点再次进行dom数的构建
    // 深度优先搜索
    for(let i = 0;i < childs.length;i++){
        // 获取子节点的虚拟dom树
        let childNodes = constructVNode(childs[i]);
        // 将子节点的虚拟dom树放进父节点的虚拟dom树的children属性里面
        // 构建的虚拟dom树可能是单一节点，也有可能返回节点数组
        // 如果childNodes是一个单一元素的话，那么childNodes就是VNode构建出来的
        // 如果childNodes是一个数组，那么构建出来它的应该是Array
        // 当然，也可以换成其他的方式进行判断
        if(childNodes instanceof VNode){
            vnode.children.push(childNodes);
        }else{
            vnode.children = vnode.children.concat(childNodes);
        }
    }
    return vnode;
}
// 看该节点是否含有文本
function getNodeText(node){
    if(node.nodeType == 3){
        return node.nodeValue;
    }else{
        return '';
    }
}
let app = document.getElementById('app');
