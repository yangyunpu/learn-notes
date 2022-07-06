#### 路径：cd /usr/share/nginx/koa
#### 1，在你的任意目录输入命令： npm install pm2 -g

#### 2，这样安装完成后你执行命令： pm2 list

#### 3，创建软连接
```
输入命令： echo $PATH
```
#### 4，pm2 -v 测试，如果有输出信息。这样就成配置好pm2环境变量

#### 5，运行 pm2 start ./bin/www --watch
```
 --watch：自动重启
这样服务就一直运行了
```

#### 6，pm2 stop all                 停止所有的应用程序