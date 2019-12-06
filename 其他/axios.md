# 使用
```npm install axios```
or
引入下面这个文件，就可以直接使用axios 发送请求了
```<script src="https://unpkg.com/axios/dist/axios.min.js"></script>```
# 请求方式(个人认为最方便的一种,举例子)
```js
// 发送 POST 请求
axios({
  method: 'post',
  url: '/user/12345',
  // 如果是get请求，请求参数要将这里的data改为params
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```
# 创建实例
当某些请求的参数一致（比如域名都一样，这样就可以创建一个实例用于发送请求）
```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```
# 拦截器
拦截器就是在 发送请求 请求错误 请求响应 响应错误 前后要做一些什么事情
比如，有某些请求完成后要写入cookie，我们就可以使用拦截器，而不用每次都复制代码，
当然，创建实例也是好使的
```js
        //配置拦截器
        // 添加请求拦截器
        axios.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            //config是与请求相关的一些参数
            alert('将要发送请求！')
            return config;
        }, function (error) {
            // 对请求错误做些什么(请求时的错误一般都是网络错误之类)
            return Promise.reject(error);
        });

        //添加响应拦截器
        // 添加响应拦截器
        axios.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            alert("响应数据回来来咯")
            return response;
        }, function (error) {
            alert("错误的响应！")
            // 对响应错误做点什么(响应错误的原因一般都是url不正确，参数不正确，跨域等问题)
            return Promise.reject(error);
        });
        axios({
            url:'http://localhost:12306/'
        }).then(result=>{
            console.log(result)
        }).catch(error=>{
            console.log(error)
        })
    //    如果想在稍后移除拦截器，可以将拦截器命名，比如：
    //    const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
    //    在某个恰当的时候移除掉
    //     axios.interceptors.request.eject(myInterceptor);
```