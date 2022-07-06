###### 我的服务器html页面在usr/share/www
###### 目录在 usr/share/nginx/html （尚未知道哪里控制的）

###### 路径配置：etc/nginx/nginx.conf 

### 操作指令：
##### ginx.conf 文件是Nginx总配置文件，在我们搭建服务器时经常调整的文件。

```
cd  /etc/nginx
```
##### 进入etc/nginx目录下，然后用vim进行打开

```
vim nginx.conf
ls：显示文件或目录信息
esc + :wq 退出并保存
```


#### 1，检查Yum是否安装（一般是有的）

```
yum -y install gcc gcc-c++ autoconf pcre-devel make automake
yum -y install wget httpd-tools vim
```


#### 2, 安装Nginx

```
yum install nginx
```

 
#### 3，查看Nginx的版本
    
```
nginx -v
```


#### 4，查看Nginx的安装目录

```
rpm -ql nginx
```

 
#### 5, 启动Nginx服务
默认的情况下，Nginx是不会自动启动的，需要我们手动进行启动(两种方法)

```
1，nginx,
2，systemctl start nginx.service
```


#### 6，查询服务的运行状况

```
ps aux | grep nginx
```



#### 7，停止Nginx服务的四种方法

```
立即停止服务
 	nginx -s stop
从容停止服务
    nginx -s quit
killall 方法杀死进程
 	killall nginx
systemctl 停止
    systemctl stop nginx.service
```

#### 8，重启Nginx服务

```
systemctl restart nginx.service
```


#### 9，查看nginx状态

```
systemctl status nginx
```



#### 10，开机启动配置？？？
