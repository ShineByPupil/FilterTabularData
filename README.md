# 简介

在原生表格标签功能上，实现灵活的筛选功能。使得海量数据信息更有价值

## demo 页以及简单说明

[点击进入 demo 页](https://shinebypupil.github.io/FilterTabularData/)

找到表格左上方的按钮。按钮名称为 F（filter 首字母），鼠标悬停 title 显示"打开筛选弹窗"

## 功能枚举

- 支持 AND、OR、NOT 组合
- 筛选条件从表头提取，支持多级表头
- colspan 大于 1，多列中有满足条件即可

# 兼容性

- 只对原生 table 标签生效，还需要同时包含表头和表体
- 对原生 div 自己实现的表格不生效
- 异形表格可能存在问题
- 筛选只针对本地数据，小心服务端的远程分页查询

## 安装

<a href="https://greasyfork.org/zh-CN/scripts/494010">点击此处安装</a>
