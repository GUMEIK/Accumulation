# fetch first
## 出错原因（待确认）
大致是因为本地进行了新增或删除了文件夹之类的操作，  
导致文件结构发生变化，使仓库中的代码和本地中的代码不一致；
## 解决办法
- 先从远程仓库拉取代码
```
git pull 仓库地址
```
- 再次进行提交等操作,如：
```
git add .
git commit -m 'xxxxx'
git push origin master
```