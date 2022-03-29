# scroller
方便判断是否滚动到顶部或底部的小工具

## 使用

> 提供三种使用方式

- npm i -S easy-scroll-box
- es module
- cdn with index.min.js

```javascript
    new EasyScrollBox({
        ele: "#box",
        throttleTime: 0,
        onScroll() {
            console.log('可见的item有：', document.querySelectorAll('.visible').length, '个');
        },
        onScrollBottom() {
            alert('滚到底了')
        },
        onScrollTop() {
            alert('滚到顶了')
        }
    })
```

具体示例，可查看[demo](./demo)内代码细节