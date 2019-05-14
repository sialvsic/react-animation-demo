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

## 参考

- https://codesandbox.io/s/olql83nlky
 
## version
