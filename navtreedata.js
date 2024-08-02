/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "SARibbon", "index.html", [
    [ "SARibbon简介", "index.html#saribbon简介", [
      [ "功能特点", "index.html#功能特点", null ]
    ] ],
    [ "构建", "index.html#构建", [
      [ "编译为动态库", "index.html#编译为动态库", null ],
      [ "直接引入工程（静态）", "index.html#直接引入工程静态", null ]
    ] ],
    [ "使用方法", "index.html#使用方法", [
      [ "引入库", "index.html#引入库", [
        [ "qmake", "index.html#qmake", null ],
        [ "cmake", "index.html#cmake", null ]
      ] ],
      [ "快速开始", "index.html#快速开始", [
        [ "在MainWindow中使用Ribbon", "index.html#在mainwindow中使用ribbon", null ],
        [ "在QWidget或QDialog中使用SARibbonBar", "index.html#在qwidget或qdialog中使用saribbonbar", null ],
        [ "创建Category和Pannel", "index.html#创建category和pannel", null ],
        [ "ContextCategory 上下文标签", "index.html#contextcategory-上下文标签", null ],
        [ "ApplicationButton", "index.html#applicationbutton", null ],
        [ "QuickAccessBar和rightButtonGroup", "index.html#quickaccessbar和rightbuttongroup", null ],
        [ "SARibbonBar布局方案", "index.html#saribbonbar布局方案", null ],
        [ "SARibbonBar文字换行，及图标大小", "index.html#saribbonbar文字换行及图标大小", null ],
        [ "不同的“按钮”布局方式", "index.html#不同的按钮布局方式", null ],
        [ "SARibbonPannel的布局模式", "index.html#saribbonpannel的布局模式", [
          [ "3行模式", "index.html#autotoc_md3行模式", null ],
          [ "2行模式", "index.html#autotoc_md2行模式", null ]
        ] ],
        [ "SARibbon的自定义功能", "index.html#saribbon的自定义功能", [
          [ "给界面添加自定义功能", "index.html#给界面添加自定义功能", null ]
        ] ]
      ] ]
    ] ],
    [ "更多截图", "index.html#更多截图", null ],
    [ "文档生成", "index.html#文档生成", null ],
    [ "常见问题", "index.html#常见问题", [
      [ "1、高分屏显示问题", "index.html#autotoc_md1高分屏显示问题", null ],
      [ "2、快捷键问题", "index.html#autotoc_md2快捷键问题", null ]
    ] ],
    [ "版本记录(change log):", "md__f_1_2src_2_s_a_ribbon_2changlog.html", [
      [ "2024-07-25 -> 2.2.1", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2024-07-25---221", null ],
      [ "2024-07-15 -> 2.2.0", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2024-07-15---220", null ],
      [ "2024-05-23 -> 2.1.0", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2024-05-23---210", null ],
      [ "2024-02-07 -> 2.0.3", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2024-02-07---203", null ],
      [ "2024-02-07 -> 2.0.2", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2024-02-07---202", null ],
      [ "2024-01-27 -> 2.0.1【失效，请使用v2.0.2及以上版本】", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2024-01-27---201失效请使用v202及以上版本", null ],
      [ "2024-01-09 -> 2.0.0", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2024-01-09---200", null ],
      [ "2023-12-29 -> 1.1.2", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2023-12-29---112", null ],
      [ "2023-12-25 -> 1.1.1", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2023-12-25---111", null ],
      [ "2023-12-25 -> 1.1.0", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2023-12-25---110", null ],
      [ "2023-11-19 -> 1.0.6", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2023-11-19---106", null ],
      [ "2023-11-10 -> 1.0.5", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2023-11-10---105", null ],
      [ "2023-11-02 -> 1.0.4", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2023-11-02---104", null ],
      [ "2023-10-26 -> 1.0.2", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2023-10-26---102", null ],
      [ "2023-10-14 -> 1.0.1", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2023-10-14---101", null ],
      [ "2023-10-09 -> 0.7.1", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2023-10-09---071", null ],
      [ "2023-10-09 -> 0.7.0", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2023-10-09---070", null ],
      [ "2023-09-27 -> 0.6.0", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2023-09-27---060", null ],
      [ "2023-05-28 -> 0.5.0", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md2023-05-28---050", null ],
      [ "0.5.1", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md051", null ],
      [ "0.5.2", "md__f_1_2src_2_s_a_ribbon_2changlog.html#autotoc_md052", null ]
    ] ],
    [ "how-to-build-cn", "how-to-build-cn.html", [
      [ "准备工作", "how-to-build-cn.html#准备工作", null ],
      [ "编译QWindowkit库(如果不开启跳过此步)", "how-to-build-cn.html#编译qwindowkit库如果不开启跳过此步", [
        [ "使用Qt Creator构建和安装QWindowkit库", "how-to-build-cn.html#使用qt-creator构建和安装qwindowkit库", null ],
        [ "使用visual studio构建和安装QWindowkit库", "how-to-build-cn.html#使用visual-studio构建和安装qwindowkit库", null ]
      ] ],
      [ "构建SARibbonBar库", "how-to-build-cn.html#构建saribbonbar库", [
        [ "基于CMake构建SARibbonBar库", "how-to-build-cn.html#基于cmake构建saribbonbar库", [
          [ "vs下基于cmake的构建", "how-to-build-cn.html#vs下基于cmake的构建", null ],
          [ "qtcreator下基于cmake的构建", "how-to-build-cn.html#qtcreator下基于cmake的构建", null ]
        ] ],
        [ "基于QMake构建SARibbonBar", "how-to-build-cn.html#基于qmake构建saribbonbar", null ]
      ] ],
      [ "使用SARibbonBar库", "how-to-build-cn.html#使用saribbonbar库", [
        [ "基于cmake引入SARibbonBar库", "how-to-build-cn.html#基于cmake引入saribbonbar库", null ],
        [ "基于qmake引入SARibbonBar库", "how-to-build-cn.html#基于qmake引入saribbonbar库", null ]
      ] ],
      [ "公开的预定义宏", "how-to-build-cn.html#公开的预定义宏", null ]
    ] ],
    [ "ribbon-toolbutton", "ribbon-toolbutton.html", [
      [ "ribbon工具栏按钮绘制方案", "ribbon-toolbutton.html#ribbon工具栏按钮绘制方案", [
        [ "文字换行显示的布局方案", "ribbon-toolbutton.html#文字换行显示的布局方案", null ],
        [ "文字不换行显示的布局方案", "ribbon-toolbutton.html#文字不换行显示的布局方案", null ]
      ] ],
      [ "如何布置一个更美观的Ribbon界面", "ribbon-toolbutton.html#如何布置一个更美观的ribbon界面", null ]
    ] ],
    [ "待办事项列表", "todo.html", null ],
    [ "类", "annotated.html", [
      [ "类列表", "annotated.html", "annotated_dup" ],
      [ "类索引", "classes.html", null ],
      [ "类继承关系", "hierarchy.html", "hierarchy" ],
      [ "类成员", "functions.html", [
        [ "全部", "functions.html", "functions_dup" ],
        [ "函数", "functions_func.html", "functions_func" ],
        [ "变量", "functions_vars.html", null ],
        [ "枚举", "functions_enum.html", null ],
        [ "枚举值", "functions_eval.html", null ]
      ] ]
    ] ],
    [ "文件", "files.html", [
      [ "文件列表", "files.html", "files_dup" ],
      [ "文件成员", "globals.html", [
        [ "全部", "globals.html", null ],
        [ "函数", "globals_func.html", null ],
        [ "枚举", "globals_enum.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_s_a_color_grid_widget_8h_source.html",
"class_s_a_ribbon_bar.html#a7a1347a9cf512452789df90e0dc636f5",
"class_s_a_ribbon_customize_data.html#ae164fb1bd3b706f79a8d633455fcc6c5",
"class_s_a_ribbon_tool_button.html#a44608a06c2e9cbdba72ea1c14a55a78d"
];

var SYNCONMSG = '点击 关闭 面板同步';
var SYNCOFFMSG = '点击 开启 面板同步';