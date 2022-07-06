### 安装
#### 1，下载MySQL官方的 Yum Repository 不同版本
wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm

#### 2，选择较新的rpm源
yum -y install mysql57-community-release-el7-10.noarch.rpm

#### 3，安装mysql 服务器
```
yum -y install mysql-community-server
```
重置密码：
```
 alter user 'root'@'localhost' identified by 'Yypnb666!';
```
注，密码包含大写，特殊字符等


### 进入 mysql bin 目录  net start mysql   （本地电脑的），可视化工具更简单

### 常用命令 (服务器上)：
```
查看mysql是否启动:
# service mysqld status
启动mysql
# service mysqld start
设置root密码
# mysql_secure_installation
登陆root账号mysql密码：Yypnb666!
    # mysql -uroot -pYypnb666! 
    # show databases;     显示所有数据库
    # use 数据库名;  使用数据库   use boblog;
    # show tables;  展示数据表
    # describe 表名;  展示表结构 describe Articles; 
    # drop table 表名;  删除表  drop table Articles;    drop table SequelizeMeta;  drop table Categories;
    # truncate table 表名;   删除表里内容  truncate table Articles;
登录
mysql -u用户名 -p                回车后输入密码
退出
exit 或者 quit  或者 \q     


已有表中增加字段：
命令：alter table 表名 add 字段 类型 其他;   bigint(20)整数
例如：alter table myclass add passtest int(4) default '0';
ALTER table tab_xxx add xxx_num int(5) not Null DEFAULT '0' COMMENT 'xxxx';
ALTER table tab_xxx ADD xxx_id bigint(20) NOT NULL COMMENT 'xxxID';
ALTER table tab_xxx ADD xxx_name varchar(20) NOT NULL COMMENT 'xxx名称';

alter table Articles add categoryId bigint(20) NOT NULL;



mysqladmin -u用户名 -p旧密码 password新密码        用来修改用户密码
show databases;     显示所有数据库，注意后面的   ；
use 数据库名             使用数据库
select  database();           显示当前连接的数据库
select version();           显示当前服务器版本
select now();       显示当前日期
select user();      显示当前用户名
下面来创建数据库mydatabase
create database mydatabase;
这样一个名叫mydatabase的数据库就创建好了
show databases; 显示所有数据库列表
drop database mydatabase; 删除数据库mydatabase

```