<p align="center">
  <h2 align="center">binbin</h2>
  <p align="center">一个针对中文博客优化的 Hexo 主题</p>
  <p align="center">
    <a href="https://github.com/junbin123/likeday"><img src="https://img.shields.io/badge/version-v1.0.0-blue"/></a>
    <a href="https://weibo.com/u/6208092799"><img src="https://img.shields.io/badge/weibo-%40%E4%BC%8D%E5%90%8C%E5%AD%A6%E5%91%80-red"/></a>
    <a href="https://github.com/junbin123/likeday"><img src="https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1-abcmeego-green"/></a>



> Hexo 是一套应用广泛的博客框架，但官方对中文博客友好的主题一直比较少。
>
> 于是，我自己写了一个主题，针对中文进行优化，欢迎各位[体验](https://junbin123.github.io/)并贡献自己的意见。

## 体验

PC：https://junbin123.github.io/

移动端：

![](https://raw.githubusercontent.com/junbin123/blog-img/master/img/20191219134843.png)

## 预览

![](https://raw.githubusercontent.com/junbin123/blog-img/master/img/20191219120823.png)

![](https://raw.githubusercontent.com/junbin123/blog-img/master/img/20191219150333.png)

![](https://raw.githubusercontent.com/junbin123/blog-img/master/img/20191219150349.png)

![](https://raw.githubusercontent.com/junbin123/blog-img/master/img/20191219150405.jpeg)

## 项目说明

我将精力放在了基本功能和设计上，没有开发额外的插件，后续根据反馈和自身需求一一搞起！😜

第一版 binbin 主题，根据效果，总结了以下特性：

#### 简单务实

设计上，保持了博客网站的纯粹，专注与写文章。

#### 微动效

避免交互过渡生硬，适当加入微动效；愉悦你，不打扰。

#### 移动端适配

针对移动端进行适配，同时保证了体验上的一致性。

## 简单上手

#### 1. 下载

```
git clone https://github.com/junbin123/hexo-theme-binbin.git
```

#### 2. 修改站点 _config.yml

```yml
# /_config.yml

url: 填写你的域名

# Pagination
## Set per_page to 0 to disable pagination
## 归档页文章不显示摘要，设置其每页显示 30 条，效果更佳。
per_page: 30
pagination_dir: page

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: binbin
```

#### 3. 修改主题 _config.yml

```yaml
# /themes/binbin/_config.yml

# 你可以根据需要修改此处的外链，效果如图。
links:
  GitHub: https://github.com/junbin123
  微博: https://weibo.com/u/6208092799
  公众号: https://docs.qq.com/doc/DVlVBZGF3RVpMVWVW
  微信: https://docs.qq.com/doc/DVkZkdllJU3FUTmZC
```

| PC                                                           | 移动端                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/junbin123/blog-img/master/img/20191219141426.png) | ![](https://raw.githubusercontent.com/junbin123/blog-img/master/img/20191219141346.png) |

#### 4. 更换 logo

更换 */themes/binbin/source/images* 文件夹下的 *logo.png* 和 *favicon.ico* 文件。

他们分别对应网站的这两处地方：

![](https://raw.githubusercontent.com/junbin123/blog-img/master/img/20191219142042.png)

**建议尺寸：**

*logo.png*：80px

*favicon.ico*：40px

#### 5. 添加「关于我」页面

binbin 主题提供一个「关于我」页面，需要你添加一个 *index.md* 文件，放于 */source/about/index.md*。

*index.md* 内容示例，效果如图：

```markdown
---
title: 关于我
---
这里是正文
自我介绍写在这里
```

![](https://raw.githubusercontent.com/junbin123/blog-img/master/img/20191219143409.png)

## 功能列表

- [x] ~~首页、文章归档页、文章分类页、文章标签页~~
- [x] ~~RSS 订阅、外链（社交媒体）~~
- [x] ~~微动画效果、移动端适配~~
- [x] ~~返回顶部功能~~
- [ ] 文章置顶功能、文章评论功能
- [ ] 最近发表功能、搜索功能

## 更新记录

| 版本   | 发布日期   | 内容                    |
| ------ | ---------- | ----------------------- |
| V1.0.0 | 2019-12-19 | Hexo 主题 binbin 诞生了 |
|        |            |                         |
|        |            |                         |

## 唠叨一下

- Hexo 的文档是出了名的难用，但支持中文、又是开源的，开发过程常常自我安慰，忍忍就过去了。
- 设计主题用到的 sketch 文件（*hexo-theme-binbin-design.sketch*）一并放到[网上](https://c-t.work/s/4ca355b8b7ab40)，常常一边写一边重新设计，sketch 文件被我弄得很乱，这真不是谦虚。

## 许可协议

 <a href="http://www.apache.org/licenses/"><img src="https://img.shields.io/badge/license-Apache%202.0-blue"/></a>