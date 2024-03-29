通常我们使用的网络是在 TCP/IP 协议族的基础上运作的。而 HTTP 属于它内部的一个子集。

### **TCP/IP** 的分层管理 （四层）

##### 应用层

应用层决定了向用户提供应用服务时通信的活动。 FTP、DNS、HTTP 协议等处于该层。

##### 传输层

提供处于网络连接中的两台计算机之间的数据传输。

在传输层有两个性质不同的协议：TCP（Transmission Control Protocol，传输控制协议）和 UDP（User Data Protocol，用户数据报协议）。

##### 网络层

网络层用来处理在网络上流动的数据包。数据包是网络传输的最小数据单位。

与对方计算机之间通过多台计算机或网络设备进行传输时，网络层所起的作用就是在众多的选项内选择一条传输路线。

##### 链路层

用来处理连接网络的硬件部分。包括控制操作系统、硬件的设备驱 动、NIC（Network Interface Card，网络适配器，即网卡），及光纤等

物理可见部分。硬件上的范畴均在链路层的作用范围之内。

### IP 协议

IP 协议的作用是把各种数据包传送给对方。而要保证确实传送到对方那里，则需要满足各类条件。其中两个重要的条件是 IP 地址和 MAC地址（Media Access Control Address）。

IP 地址指明了节点被分配到的地址，MAC 地址是指网卡所属的固定地址。IP 地址可以和 MAC 地址进行配对。IP 地址可变换，但MAC 地址基本上不会更改。

IP 间的通信依赖 MAC 地址。在网络上，通常是经过多台计算机和网络设备中转才能连接到对方。而在进行中转时，会利用下一站中转设备的MAC 地址来搜索下一个中转目标。这时，会采用 ARP 协议（Address Resolution Protocol）。ARP 是一种用以解析地址的协议，根据通信方的 IP 地址就可以反查出对应的 MAC 地址。

### TCP 协议

为了**准确无误地将数据送达目标处**，TCP 协议采用了**三次握手**

1.Client端首先发送一个带 SYN 标志的数据包给对方。

2.Server端收到后， 回传一个带有 SYN/ACK 标志的数据包以示传达确认信息。

3.最后，Client再回传一个带 ACK 标志的数据包，代表TCP连接就建立。

若在握手过程中某个阶段莫名中断，TCP 协议会再次以相同的顺序发送相同的数据包。

**中断连接**

1.Client端发送FIN报文，表示没有数据发送了。

2.Server端发送ACK表示收到请求了，但Server端可能还有数据要发送。

3..Client端进入FIN_WAIT状态，继续等待Server端的FIN报文，当Server端确定数据已发送完成，则向Client端发送FIN报文。

4.Client端收到FIN报文后，向Server端发送ACK，等待一点时间没有收到回复，就关闭连接。

### UDP协议

是一个非连接的协议，传输数据之前源端和终端不建立连接

### **DNS** **服务**

DNS 协议提供通过域名查找 IP 地址，或逆向从 IP 地址反查域名的服务。

### 通信过程

客户端通过dns服务查到域名对应ip，发送http请求报文，tcp协议可靠的将http传给对方，这期间，ip协议搜索对方的地址，中转和传送给目标。

服务端通过tcp协议重组http报文数据包，根据http协议知道需要的资源。

### **URI** 和 **URL**

URI 用字符串标识某一互联网资源，而 URL表示资源的地点（互联网上所处的位置）。可见 URL是 URI 的子集。

### **HTTP** 协议介绍

##### 无状态

协议每当有新的请求发送时，就会有对应的新响应产 生。协议本身并不保留之前一切的请求或响应报文的信息。

##### 持久化

HTTP 协议的初始版本中，每进行一次 HTTP通信就要断开一次 TCP 连接，增加通信量的开销。

在 HTTP/1.1 中，所有的连接默认都是持久连接，

持久连接的特点是，只要任意一端没有明确提出断开连接，则保持TCP连接状态。

##### 管线化

持久连接使得多数请求以管线化方式发送成为可能。从前发送请求后需等待并收到响应，才能发送下一个请求。

管线化技术出现后，不用等待响应亦可直接发送下一个请求。

##### HTTP 协议请求报文格式

请求行：请求方法、请求 URI、协议版本

请求头：

（空行）

请求实体。

```http
POST /submit.cgi HTTP/1.1 
Host: www.hackr.jp 
Content-Length: 1560

userage=1
```

##### HTTP 协议响应报文格式

响应行：协议版本、状态码、解释状态码的原因短语

响应头

（空行）

响应实体

```http
HTTP/1.1 200 OK 
Date: Tue, 10 Jul 2012 06:50:15 GMT 
Content-Length: 362 
Content-Type: text/html 

<html> 
...
```

### **HTTP** 状态码

200 OK

206 该状态码表示客户端进行了范围请求。响应报文中包含由 Content-Range 指定范围的实体内容。

301 永久性重定向

302 临时重定向

304 客户端发送附带条件的请求 2 时，服务器端允许请求访问资源，

307 禁止重定向时 POST 变换成 GET，如果重定向时post被改成get请求会丢失请求主体访问失败。

400 请求报文中存在语法错误

401 用户认证失败

403 访问权限出现某些问题

404 无资源

500 服务器端在执行请求时发生了错误

503 明服务器暂时处于超负载或正在进行停机维护

### HTTP头部

##### 格式

头部字段名: 字段=值 ,字段=值

```
Keep-Alive: timeout=15, max=100 
```

##### 分类

HTTP 头部字段根据实际用途可分为以下 4 种类型。

通用头部字段、请求头部字段、响应头部字段、实体头部字段

#### 通用头部字段

##### Connection

http1.1默认连接都是持久连接，当服务器端想明确断开连接时，则指定 Connection 头部字段的值为 Close。

```
Connection:Keep-Alive
```

##### Via

报文经过代理或网关时，会先在头部字段 Via 中附加该服务器的信 息，然后再进行转发。

头部字段 Via 不仅用于追踪报文的转发，还可避免请求回环的发生。 所以必须在经过代理时附加该头部字段内容。

#### 请求头部字段

##### Accept

用来通知服务器，用户代理能够处理的媒体类型及媒体类型的相对优先级。

使用 q= 来额外表示权重值,权重值 q 的范围是 0~1（可精确到小数点 后 3 位）。默认权重为 q=1.0。

```
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
```

##### Accept-Charset

用来通知服务器用户代理支持的字符集

```
Accept-Charset: iso-8859-5, unicode-1-1;q=0.8 
```

##### **Accept-Encoding**

用来告知服务器用户代理支持的内容编码及内容编码的优先级顺序。

```
Accept-Encoding: gzip, deflate 
```

##### **Accept-Language**

头部字段 Accept-Language 用来告知服务器用户代理能够处理的自然 语言集（指中文或英文等）

```
Accept-Language: zh-cn,zh;q=0.7,en-us,en;q=0.3 
```

##### **Authorization**

来告知服务器，用户代理的认证信息

```
Authorization: Basic dWVub3NlbjpwYXNzd29yZA== 
```

##### Host

头部字段 Host 会告知服务器，请求的资源所处的互联网主机名和端 口号。Host 头部字段在 HTTP/1.1 规范内是唯一一个必须被包含在请求内的头部字段。

**If-Match**

服务器会比对 If-Match 的字段值和资源的 ETag 值，仅当两者一致时，才会执行请求

**If-Modified-Since**

如果在 **If-Modified-Since** 字段指定的日期时间后，资源发生了更新，服务器会接受请求

如果请求的资源都没有过更新，则返回状态码 304 Not Modified 的响应。

##### If-Range

若指定的 If- Range 字段值（ETag 值或者时间）和请求资源的 ETag 值或时间相一 致时，则作为范围请求处理。反之，则返回全体资源。

**Range**

对于只需获取部分资源的范围请求，包含头部字段 Range 即可告知服 务器资源的指定范围。上面的示例表示请求获取从第 5001 字节至第 10000 字节的资源。

```
Range: bytes=5001-10000 
```

##### User-Agent

创建请求的浏览器和用户代理名称等信息

#### 响应头部字段

**ETag**

资源被缓存时，被分配唯一性标识。

弱 **ETag** 值

弱 ETag 值只用于提示资源是否相同。只有资源发生了根本改变，产生差异时才会改变 ETag 值。会在字段值最开始处附加 W/。

##### Location

配合 3xx ：Redirection 的响应，提供重定向的 URI。

几乎所有的浏览器在接收到包含头部字段 Location 的响应后，都会强制性地尝试对已提示的重定向资源的访问

##### Server

服务器应用程序的信息

##### Vary

当代理服务器接收到带有 **Vary** 头部字段指定获取资源的请求时，如果里面的字段相同相同，那么就直接从缓存返回响应。

```
Vary: Accept-Language 
```

#### 实体头部字段

用于补充内容的更新时间等与实体相关的信息。

##### Content-Range

针对范围请求，返回响应时使用的头部字段 Content-Range，能告知客户端作为响应返回的实体的哪个部分符合范围请求。字段值以字节为单位，表示当前发送部分及整个实体大小。

##### Content-Type

实体主体内对象的媒体类型

#### 其他头部字段

**X-Frame-Options**

设置能否被frame标签加载页面

**DENY** ：拒绝

**SAMEORIGIN** ：仅同源域名下的页面

### Cookie

Cookie 会根据从服务器端发送的响应报文内的一个叫做 Set-Cookie 的 头部字段信息，通知客户端保存 Cookie。当下次客户端再往该服务器 发送请求时，客户端会自动在请求报文中加入 Cookie 值后发送出 去。服务器端发现客户端发送过来的 Cookie 后，会去检查究竟是从哪一 个客户端发来的连接请求，然后对比服务器上的记录，最后得到之前的状态信息。

##### 流程

1.请求报文（没有Cookie信息的状态）

   ```
GET /reader/ HTTP/1.1
Host: hackr.jp
   ```

2.响应报文（服务器端生成Cookie信息）

```
HTTP/1.1 200 OK 
Date: Thu, 12 Jul 2012 07:12:20 GMT 
Server: Apache
Set-Cookie: sid=1342077140226724; path=/; expires=Wed, 
10-Oct-12 07:12:20 GMT＞ 
Content-Type: text/plain; charset=UTF-8 
```

3.请求报文（自动发送保存着的Cookie信息）

```
GET /image/ HTTP/1.1 
Host: hackr.jp 
Cookie: sid=1342077140226724 
```

##### Set-Cookie头部字段属性说明

```
Set-Cookie: name=value; secure ; HttpOnly 
```

若设置secure在HTTPS连接的情况 下才会进行 Cookie 的发送。

若设置HttpOnly后 document.cookie 就无法读取Cookie 的内容

### 缓存

#### HTTP 1.0

##### expires设置过期时间

客户端再次请求该资源的时候，会把客户端时间与该时间戳进行对比，如果大于该时间戳则已过期，否则直接使用该缓存资源。

问题：但是客户端时间和服务端时间可能不一致，且客户端时间可自自更改。

### HTTP 1.1

#### cache-control

`cache-control` 和 `expires` 都存在时，`cache-control` 优先级更高

通过max-age属性设置多少秒后过期，不依赖时间对比。

但如果cache-control设置了 `no-cache` 和 `no-store` 则本地缓存会被忽略，启用协商缓存。

#### 协商缓存

会去请求服务器验证资源是否更新，如果没更新使用本地缓存，此时返回的是 304。

协商缓存主要包括 `last-modified` 和 `etag`。分别用时间和内容做判断标记。

#### last-modified & if-Modified-Since

服务器应答时都会通过last-modified来标示修改时间。

浏览器下次请求相同资源会将last-modified时间作为if-modified-since字段放在请求报文中用以询问服务器是否该资源过期。

服务器需要通过规则判断是否过期

过期时直接返回200并在body中放入更新内容

如果未过期则直接返回304状态码。

#### etag & if-None-Match

服务器将返回内容进行摘要（Hash）

服务器应答时都会通过etag来标示内容摘要。

浏览器下次请求相同资源会将etag时间作为if-none-match字段放在请求报文中用以询问服务器是否该资源过期。

服务器需要通过和服务器内容的摘要进行比对确定是否过期

过期时直接返回200并在body中放入更新内容

如果未过期则直接返回304状态码。

### HTTPS

#### HTTP 主要有这些不足

1.通信使用明文（不加密），内容可能会被窃听

2.不验证通信方的身份，因此有可能遭遇伪装

3.无法证明报文的完整性，所以有可能已遭篡改

HTTPS介绍

HTTPS通过和 SSL或 TLS的组合使用， 加密 HTTP 的通信内容。

当使用 SSL时，则演变成先和 SSL通信，再由 SSL和 TCP 通信。简言之，所谓 HTTPS，其实就是身披SSL协议这层外壳的 HTTP。

#### 证书

证书由值得信任的第三方机构颁发，用以证明服务器和客户端是实际存在的。

多数浏览器开发商发布版本时，会事先在内部植入常用认证机关的公开密钥

#### 共享密钥加密

加密和解密同用一个密钥的方式称为共享密钥加密，也被叫做对称密钥加密。

以共享密钥方式加密时必须将密钥也发给对方。中间可能被监听。

#### 公开密钥加密

用一对非对称的密钥。一把叫做私有密钥，另一把叫做公开密钥。

发送密文的一方使用对方的公开密钥进行加密处理，对方收到被加密的信息后，再使用自己的私有密钥进行解密。利用这种方式，不需要发送用来解密的私有密钥，也不必担心密钥被攻击者窃听而盗走。

#### **HTTPS** 采用混合加密机制

在交换密钥环节使用公开密钥加密方式，之后的建立通信交换报文阶段则使用共享密钥加密方式。

## WebSocket

为了实现 WebSocket 通信，需要用到 HTTP 的 Upgrade 首部字段，告知服务器通信协议发生改变，以达到握手的目的。

Sec-WebSocket-Key 字段内记录着握手过程中必不可少的键值。

Sec-WebSocket-Protocol 字段内记录使用的子协议

介绍

[https://www.jianshu.com/p/bc331bd05dfa](https://www.jianshu.com/p/bc331bd05dfa)
