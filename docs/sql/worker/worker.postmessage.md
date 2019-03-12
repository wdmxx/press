---
sidebarDepth: 2
---

### Worker.postMessage(Object message)

向主线程/Worker 线程发送的消息。

#### 参数

##### Object message

需要发送的消息，必须是一个可序列化的 JavaScript key-value 形式的对象。

#### 示例代码

worker 线程中

```language-js
worker.postMessage({
  msg: 'hello from worker'
})
```

主线程中

```language-js
const worker = wx.createWorker('workers/request/index.js')

worker.postMessage({
  msg: 'hello from main'
})
```