import EasyScrollBox from './lib/index.esm.js'


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