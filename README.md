# 简介

在原生表格标签功能上，实现灵活的筛选功能。使得海量数据信息更有价值。

## demo 页以及简单说明

[点击进入 demo 页](https://shinebypupil.github.io/FilterTabularData/)

找到表格左上方的按钮。按钮名称为 F（filter 首字母），鼠标悬停 title 显示"打开筛选弹窗"

## 功能枚举

- 支持 AND、OR、NOT 组合
- 筛选条件从表头提取，且支持多级表头
- 支持查询后不关闭弹窗开关功能
- 弹窗支持拖动，按住头部进行拖动
- 弹窗无遮罩层，方便读取信息
- 下拉框支持滚轮快速切换
- 筛选条件设有独立的是否启用开关，默认开启。关闭规则不生效，且样式变淡
- 表单必填校验，以及简单的动画特效
- 顶部消息提醒，提供筛选后剩余数据的数量

## 兼容性

- 只对原生 table 标签生效，还需要同时包含表头和表体
- 对原生 div 自己实现的表格不生效
- 异形表格可能存在问题
- 筛选只针对本地数据，小心服务端的远程分页查询

## 安装

<a href="https://greasyfork.org/zh-CN/scripts/494010">点击此处安装</a>
