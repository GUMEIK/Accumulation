# npm run build
布署的时候你必须把build里的文件直接放到服务器的根路径下，比如，你的服务器IP是localhost，应用服务器端口为8080，你应该保证http://localhost这种访问方式，访问到的是你的build下的文件。如果你希望以http://localhost/build/index.htm这种方式访问应用，那么你可以在package.json文件中增加一个homepage字段：

json配置中加入：
```js
{
  "name": "chat-app",
  "homepage":"."
}
```

# npm install -g serve
# serve -s build