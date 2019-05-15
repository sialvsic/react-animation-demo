# What is this?
使用React 学习animation

## how to start

```
$ npm start
```


## 过程分析
1.page render

无动画？？

2.点击 about，产生动画

```text
step1: enter

page page-enter  About  新
translate(100%, 0)

page page-exit   Home  老
translate(0%, 0)


step2: entering
page page-enter page-enter-active About  新
page-enter-active: transform: translate(0, 0);

page page-exit page-exit-active Home 老
page-exit-active: transform: translate(-100%, 0);


step3: enter done
page page-enter-done About  新

page page-exit-done Home  老
page-exit-done: transform: translate(-100%, 0);
```

## 注意的点
1. translate(0%, 0) => translate3d(0%, 0, 0)
2. transform or animation
3. 在过程中加入 `absolute` 


## 分析

实现了三个动画，关于例3，有几点问题
- 浏览器back, next的同步问题
- safari手势滑动屏幕的二次滚动问题
- 虽然推荐使用translate3d，但是实际使用中发现在safari mobile浏览器上会出现左侧动画向右侧显示的白屏问题

## 参考

- https://codesandbox.io/s/olql83nlky
 
## version
