---
sidebarDepth: 2
---

### Worker.onMessage(function callback)

监听主线程/Worker 线程向当前线程发送的消息的事件。

#### 参数

##### function callback

主线程/Worker 线程向当前线程发送的消息的事件的回调函数

###### 参数

**Object res**

属性      | 类型     | 说明                     
------- | ------ | -----------------------
message | Object | 主线程/Worker 线程向当前线程发送的消息