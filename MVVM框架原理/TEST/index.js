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
    tag, //标签类型
    elm, //对应的真实节点
    children, //当前节点下的子节点
    text, //当前虚拟节点中的文本
    data, //
    parent, //父级节点
    nodeType //节点类型
) {
    this.tag = tag;
    this.elm = elm;
    this.children = children;
    this.text = text;
    this.data = data;
    this.parent = parent;
    this.nodeType = nodeType;
    this.env = {}; //当前节点的环境变量
    this.instructions = null; //存放指令
    this.template = []; //当前节点的所在的模板
}

// 构建虚拟dom树
function constructVNode(root) {
    let vnode = null;
    let children = [];
    let text = getNodeText(root);
    let data = null;
    let nodeType = root.nodeType;
    let tag = root.nodeName;
    // 为了方便调试，这里手动加入data
    data = {
        content: 'hello啊，树哥！',
        description: 'GUMEI牛逼！'
    }
    data = proxyObject(data)
    vnode = new VNode(tag, root, children, text, data, parent, nodeType);
    let childs = vnode.elm.childNodes;
    for (let i = 0; i < childs.length; i++) {
        let childNodes = constructVNode(childs[i]);
        if (childNodes instanceof VNode) {
            vnode.children.push(childNodes);
        } else {
            vnode.children = vnode.children.concat(childNodes);
        }
    }
    return vnode;
}

function getNodeText(node) {
    if (node.nodeType == 3) {
        return node.nodeValue;
    } else {
        return '';
    }
}
let app = document.getElementById('app');
// 得到虚拟节点
let vnode = constructVNode(app);

// 建立映射关系
// 通过模板找节点(通过模板查找哪些节点用到了这个模板)
let template2Vnode = new Map();
// 通过节点找模板(通过这个节点查看节点下有哪些节点)
let vnode2template = new Map();


// 进行预备渲染
function prepareRender(vnode) {
    if (vnode == null) return;
    if (vnode.nodeType == 3) { //文本节点
        // 分析模板字符串
        // 如果没有匹配到符合要求的字符串，templateSrtList值为null
        // 如果匹配成功，则返回数组，即便只有一个值
        let templateSrtList = vnode.text.match(/{{[a-zA-Z0-9_.]+}}/g);
        if (templateSrtList) {
            for (let i = 0; i < templateSrtList.length; i++) {
                // 看有哪些节点使用了这个模板
                setTemplate2Vnode(templateSrtList[i], vnode);
                // 看这个节点有哪些模板
                setVnode2Template(templateSrtList[i], vnode);
            }
        }
    }
    if (vnode.nodeType == 1) { //标签节点
        // 看其子节点是否是文本节点
        for (let i = 0; i < vnode.children.length; i++) {
            prepareRender(vnode.children[i]);
        }
    }
}
prepareRender(vnode);

// 通过模板设置有哪些节点用到了这个模板
function setTemplate2Vnode(template, vnode) {
    // template 是通过vnode.text 属性获取到的
    // template 就是获取到的所有的文本节点可能是模板的
    // 每个模板都对应一个文本节点
    // setTemplate2Vnode在上面会被循环调用
    // 通过map映射，将节点和模板对应起来
    let templateName = getTemplateName(template);
    let vnodeSet = template2Vnode.get(templateName);
    if (vnodeSet) {
        vnodeSet.push(vnode);
    } else {
        template2Vnode.set(templateName, [vnode]);
    }
    // template2Vnode的值 
    // Map(2) {"content" => Array(2), "description" => Array(1)}
    // 意思就是content这个模板，被两个节点进行使用
    // description这个模板，被一个节点进行使用
}
// 通过节点查看，这个节点有哪些模板
function setVnode2Template(template, vnode) {
    let templateSet = vnode2template.get(vnode);
    if (templateSet) {
        templateSet.push(getTemplateName(template));
    } else {
        vnode2template.set(vnode, [getTemplateName(template)]);
    }
}


// 获取模板名字
function getTemplateName(template) {
    if (template.substring(0, 2) == "{{" && template.substring(template.length - 2, template.length) == '}}') {
        return template.substring(2, template.length - 2);
    } else {
        return template;
    }
}

// 渲染
function renderNode(vnode) {
    // 渲染文本节点
    if (vnode.nodeType == 3) {
        // 把当前节点下的模板取出来
        let templates = vnode2template.get(vnode);
        if (templates) {
            // vnode上的text的值我们是不改变的
            let result = vnode.text;
            for (let i = 0; i < templates.length; i++) {
                let templateValue = vnode.data[templates[i]];
                if (templateValue) {
                    // 替换文本节点的内容
                    result = result.replace('{{' + templates[i] + '}}', templateValue);
                }
            }
            // 将替换后的文本重新赋值到元素身上
            vnode.elm.nodeValue = result;
        }
    } else {
        for (let i = 0; i < vnode.children.length; i++) {
            renderNode(vnode.children[i]);
        }
    }
}

renderNode(vnode)

function proxyObject(obj) {
    let proxyObj = {};
    for (let prop in obj) {
        Object.defineProperty(proxyObj, prop, {
            configurable: true,
            get() {
                return obj[prop];
            },
            set(value) {
                console.log('在此处，进行一系列操作')

                obj[prop] = value;
                renderData(prop)
            }
        })
        // 如果obj[prop] 仍然为一个对象，就继续进行代理
        if (obj[prop] instanceof Object) {
            proxyObj[prop] = proxyObject(obj[prop])
        }
    }
    return proxyObj;
}

// 当属性发生改变时自动刷新页面
// 当代理的数据发生改变时，获取数据都用到了哪些模板，进行渲染

function renderData(data) {
    let vnodes = template2Vnode.get(data);

    if (vnodes != null) {
        // console.log(vnode)
        for (let i = 0; i < vnodes.length; i++) {
            console.log(vnodes[i])
            renderNode(vnodes[i])
        }
    }
}


let input = document.getElementById('input')

function vmodal(elm, data) {
    if (elm.nodeType == 1) {
        elm.onchange = function (e) {
            let attrNames = elm.getAttributeNames();
            if (attrNames.indexOf('v-modal') > -1) {
                let attrVauleText = elm.getAttribute('v-modal');
                data[attrVauleText] = elm.value;
            }
        }
    }
}
vmodal(input, vm)