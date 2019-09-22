
var ajaxURL = ['url1','url2','url3']

// function getData(){
//     return new Promise((resolve,reject)=>{

//     })
// }

function ajax (opations){
    return new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest();
        var method = opations.method || 'GET';
        var url = opations.url;
        var data = opations.data;
        xhr.open(method,url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4  ){
                if(xhr.status == 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject(new Error('数据请求失败'))
                }    
            }
        }
        // 为了防止上面那个方法还没有赋值完成
        if(method == 'POST'){
            xhr.send(data);
        }else{
            xhr.send();
        }
    })
}
ajax({
    url:'url1',
    data:'data'
}).then(()=>{

})
var newArr = [];
for(var i = 0;i < ajaxURL.length;i++){
    newArr.push(ajax({
        url:ajaxURL[i]
    }))
}
Promise.all(newArr).then(()=>{
    
})