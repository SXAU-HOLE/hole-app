## 树洞app

## 项目介绍
一个由 React Native 开发的一款校内论坛类APP，支持发帖、回复等论坛基本的功能，其次还有表情包、投票等功能。后端使用 NestJS 开发，同时通过 nodeJs **爬虫**获取学生数据，支持课表、空教室等查询，目的是打造为一款便利全体农大学生的APP。

仓库地址：

前台RN：https://github.com/SXAU-HOLE/hole-app

后端NestJS：https://github.com/SXAU-HOLE/hole-server

教务系统爬虫：https://github.com/SXAU-HOLE/sxau-api

## 效果图

### 登录页

<div>
<img src="assets\example\login.png" style="zoom: 50%;" />
<img src="assets\example\register.png" alt="register" style="zoom:50%;" />
<img src="assets\example\forget.png" style="zoom: 50%;" />
</div>

### 树洞列表

<div>
    <img src="assets\example\hole-list.png" alt="hole-list" style="zoom:50%;" />
</div>

### 树洞发布页

<div>
    <img src="assets\example\post.png" alt="post" style="zoom:50%;" />
    <img src="assets\example\post-2.png" alt="post" style="zoom:50%;" />
    <img src="assets\example\post-3.png" alt="post" style="zoom:50%;" />
</div>

### 树洞详情页

<div>
<img src="assets\example\hole-detail.png" alt="hole-detail" style="zoom:50%;" />
<img src="assets\example\hole-detail-2.png" alt="hole-detail" style="zoom:50%;" />
</div>

### 搜索页
<div>
<img src="assets\example\search.png" alt="search" style="zoom:50%;" />
<img src="assets\example\search-2.png" alt="hole-detail" style="zoom:50%;" />
</div>


### 个人页

<div>
<img src="assets\example\mine.png" alt="mine" style="zoom:50%;" />
<img src="assets\example\mine-2.png" alt="mine-2" style="zoom:50%;" />
</div>

## 技术栈

前端 ：
 - React Native：基于React的跨端框架
 - redux：一种状态管理库，用于在React应用中有效地管理和共享应用的状态。
 - tailwind：一种实用的CSS框架，通过预定义的类简化样式表的编写，提高开发效率。
 - react Query：用于在应用中管理和共享异步数据，提供了一种简单而强大的方式来处理数据获取和缓存。
 - react-hook-form：基于React Hooks的表单库，简化了React中表单的处理，提供了一种轻量级而强大的方式来处理表单逻辑。

后端：
 - NestJS：一个用于构建高效且可扩展的服务器端应用程序的Node.js框架，基于模块化的架构和依赖注入。
 - Typeorm：一种ORM（对象关系映射）库，用于在Node.js中与数据库进行交互，支持多种数据库，并提供面向对象的方式操作数据库。
 - mysql：关系型数据库

## 功能列表

- [x] 根据教务系统的登录注册功能
- [x] 发帖、查看帖子、点赞树洞功能
- [x] 评论、回复、点赞评论功能
- [x] 个人信息修改功能
- [x] 表情和上传图片 、以及图片预览功能
- [ ] 树洞投票功能
- [ ] 用户经验值
- [ ] 禁言用户

