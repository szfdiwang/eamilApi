
- 启动
  
```
修改src/config/db.js 中 prod内容 
默认端口8035
pm2 start npm --name "project" -- run start:prod
```


##### 数据库建表

```
CREATE TABLE `subscribeLists` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(200) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB


##### 数据库建表

```
CREATE TABLE `contactLists` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `companyName` varchar(200) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB
```

