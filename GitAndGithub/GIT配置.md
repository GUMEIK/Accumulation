# github上 创建远程仓库

# 本地配置

## ssh配置
- 生成秘钥
```ssh-keygen -t rsa```
- 复制秘钥
打开 C:/用户/徐振鲁/.ssh/id_rsa.pub 文件,复制其内容
- github 上，settings/SSH and GPG keys ,new SSH key,将复制的内容粘贴进来，并进行其他简单的一些配置
- 本地配置
```git config --global user.name xuzhenlu```
```git config --global user.email 13103615283@163.com```
要检查已有的配置信息，可以使用 ```git config --list``` 命令

```js
git remote -v  源项目在哪里

添加远程仓库


git reflog

git 
```