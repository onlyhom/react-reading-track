# react-reading-track项目

## 安装使用

> `npm install`安装所有的项目依赖项

> `npm start`启动开发服务器

## 文件目录
```
├──CONTRIBUTING.md
├──README.md - 这个文件。
├──SEARCH_TERMS.md＃可用搜索字词的白名单短集合，与应用程序一起使用。
├──package.json＃npm包管理器文件。
├──public
│├──favicon.ico＃React Icon，如果您愿意，可以更改。
│└──index.html＃不要修改
└──src
    ├──App.css＃应用的样式。随意自定义这个你想要的。
    ├──App.js＃应用程序的根。现在包含静态HTML。
    ├──App.test.js＃用于测试。随创建反应应用程序一起提供。鼓励测试，但不是必需的。
    ├──BooksAPI.js＃提供的Udacity后端的JavaScript API。方法说明在。
    ├──Book.js＃书本组件
    ├──ListBook.js＃主页组件
    ├──SearchPage.js＃搜索页组件
    ├──icon＃为应用程序提供有用的图像。
    │├──add.svg
    │├──arrow-back.svg
    │└──arrow-drop-down.svg
    ├──index.css＃全局样式。
    └──index.js＃不需要修改这个文件。它仅用于DOM呈现。
```



## 后端服务器

提供的文件[`BooksAPI.js`]（src / BooksAPI.js）包含在后端执行必要操作所需的方法：

* [`getAll`]（＃获取主页所有书本）
* [`update`]（＃更新）
* [`search`]（＃搜索）

### `getAll`

方法签名：

```JS
getAll()
```

*返回一个Promise，该Promise解析为包含一组书对象的JSON对象。
*此集合代表目前应用程序书架中的图书。

### `update`

方法签名：

```JS
update(book, shelf)
```

* book：至少包含`id`属性的`<Object>
* shelf：`<String>`包含[“wantToRead”，“currentReading”，“read”]之一
*返回一个Promise，该Promise解析为包含POST请求响应数据的JSON对象

### `search`

方法签名：

```JS
search(query)
```

*查询：`<String>`
*返回一个Promise，该Promise解析为包含最多20个书籍对象集合的JSON对象。
*这些书不知道他们在哪个书架上。他们只是原始结果。您需要确保图书在搜索页面上具有正确的状态。

## 重要
后端API使用一组固定的缓存搜索结果，并限于一组特定的搜索项，可在[SEARCH_TERMS.md]（SEARCH_TERMS.md）中找到。该术语列表是仅适用于后端的术语，因此，如果您对Basket Weaving或Bubble Wrap的搜索没有返回任何结果，请不要感到惊讶。
