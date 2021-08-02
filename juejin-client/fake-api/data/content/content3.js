export const content = `
<div class="markdown-body"><style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>近年来，云游戏这个概念渐渐被广大游戏爱好者所了解。顾名思义，云游戏就是利用部署在数据中心里的强大的云服务来进行游戏画面的渲染。在云端生成的游戏画面以视频流的形式借助高速网络实时地传递到用户的终端进行显示，用户可以在终端对游戏进行各种操控，体验和玩在本地运行的游戏毫无差别。云游戏服务让用户可以像浏览视频网站一样，很轻松地在线选择想玩的游戏，只需点击即可立刻进入游戏。既不用花时间下载安装，也不用担心本机的硬件是否满足游戏的要求。用相对廉价的手机和机顶盒硬件就可以享受高端显卡和游戏机才能提供的高画质游戏体验。</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d01b53ae5d1e44188717d319961362c4~tplv-k3u1fbpfcp-watermark.image" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<p>图 1. 云游戏商业化发展简介</p>
<p>然而，云游戏并不是一个新兴事物，相关的构想早在本世纪初就已经提出，见图 1。2010年，美国的一家创业公司OnLive正式推出了第一个面向公众的云游戏商业服务。然而，彼时不成熟的云服务和脆弱的网络环境并不能支撑起OnLive的雄心。OnLive在尝试多次业务转型后，于2015年被索尼收购，其云游戏业务被并入索尼旗下的PlayStation的相关产品中但并未进行大面积推广。近年来，随着云计算的不断演进，光纤入户的普及，和5G网络的铺开，云游戏又一次迎来了机遇。随着谷歌在2019年推出Stadia云游戏服务，微软、亚马逊等云计算巨头也紧跟着着推出各自的云游戏产品。根据相关咨询公司的预测【1】，全球的云游戏市场将会以每年接近50%的增长率，在2027年达到70亿美金的规模。</p>
<p>本文将剥去云游戏的各种产品外衣，对云游戏技术的演进历史，面临的挑战，和未来的优化方向进行一个梳理和汇总。
云游戏技术发展史
在本质上，云游戏系统可以看成是一个利用云端服务资源进行三维游戏渲染的瘦客户端（thin-client）系统，而这种利用远端计算资源进行复杂的运算，并在本地显示的架构可以追溯到上世纪的八十年代。Unix的图形显示系统采用的X11协议在设计之初就增加了网络透明性，通过X server和X client的分离，让用户可以在远端的服务器上运行一个应用而在本地的机器上显示该应用的图形界面。由于这个时期的图形界面都为二维设计，服务器向客户端传递的是二维绘图指令，客户端收到指令后需要在本地进行绘制以生成相应的图形界面。后期更为广大用户所熟悉的微软Windows系统的RDP协议的远程桌面【11】和基于RFB协议的支持跨平台的VNC系统【10】也都采用了类似的设计。</p>
<p>三维图形渲染技术和专业显卡硬件的不断发展，对这些仅支持二维图形绘制的远程显示协议也提出了新的需求。X11协议最早提出了GLX扩展，将进行三维图形渲染的OpenGL指令和二维绘制的X11指令以同样的格式进行打包，传递到客户端再进行三维绘制。而这样传输绘制指令的做法存在两个问题：</p>
<ol>
<li>客户端需要有足够的计算资源来进行三维绘制。而在早期图形加速硬件昂贵，远程渲染就是让多个用户能够共享服务器的显卡资源。</li>
<li>三维渲染需要的指令数和三维模型的复杂度相关，因此当渲染一个非常复杂的三维模型时，即便最后渲染结果图像很小，也需要在网络中传递大量的指令。</li>
</ol>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65cb74441cb8411f8121ee659c0949d2~tplv-k3u1fbpfcp-watermark.image" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<p>图 2. GLX 和VirtualGL的架构【2】</p>
<p>为了针对传输绘制指令方案所存在的问题进行改进，传输渲染图像的方案应运而生。VirtualGL【2】是其中一个代表。具体做法是在服务器端进行三维渲染，将渲染结果以图像的形式传递给客户端，而二维的图形绘制指令仍然沿用之前X11协议的通路。这样的改进让客户端不需要再进行三维渲染，而且服务端向客户端传递的数据量也只和客户端需要显示的内容相关。在渲染复杂的三维场景时，可以有效地控制服务器和客户端之间的数据传输量。</p>
<p>而从最早期的OnLive到现如今的各种商业云游戏系统也都沿用了传输渲染图像的技术方案。如下图中展现的系统框架所示，所有的三维渲染都发生在服务器端，而渲染生成的游戏图像会被实时编码成视频流的形式传输给客户端。客户端只需要将用户输入的游戏指令传递给服务器，同时将接收到的视频流解码显示即可。</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47480aeb7a0144479691d58625d35202~tplv-k3u1fbpfcp-watermark.image" alt="截屏2021-03-16 下午8.52.49.png" loading="lazy" class="medium-zoom-image">
图 3. 云游戏的系统框架【3】</p>
<p>尽管技术方案保持了不变，当代的新兴云游戏系统和十年前的OnLive相比，还是有很多的改进和不同。具体包括：</p>
<ol>
<li>早期的OnLive只支持运行在x86平台的PC游戏，而当代的云游戏系统在支持PC游戏的基础上，还可以支持为非x86平台开发的手机游戏。</li>
<li>在网络传输方面，OnLive只提出了要尽量将服务器靠近用户，确保用户和服务器的物理距离不超过1600公里。而随着以WebRTC为代表的传输技术的进步，实时流媒体传输网络和边缘节点的建设，以及5G等新一代移动网络的铺开，当代云游戏面临的网络环境大大改善。</li>
<li>视频编码技术也从十年前的H.264进步到了H.265和H.266，更高的编码效率也让如今的云游戏系统可以支持到4K的游戏分辨率。</li>
</ol>
<p>面临的挑战
尽管当前整个云游戏的行业呈现欣欣向荣的局面，一块巨大的绊脚石仍然拦在了所有玩家的前面，这就是云游戏的延迟问题。对于云游戏的延迟更准确的用词是响应延迟或者交互延迟（Interaction Latency），具体的定义是从用户使用输入设备发出游戏控制指令开始，到用户在终端显示设备上看到对应于游戏指令产生的内容变化为止所用的时间。对于不同的游戏用户有不同的延迟需求。比如棋牌益智类对操作要求很低的游戏，用户可以容忍最长200-300毫秒的响应延迟；对于操作要求较多，则一般需要将响应延迟控制在100毫秒以内，最坏的情况不宜超过150毫秒；而例如第一人称射击这一类对操作精度有更高要求的游戏则需要将响应延迟控制到60毫秒甚至更低。最极端的一类游戏是需要用户佩戴头盔式显示器的虚拟现实（VR）类游戏，由于显示的内容需要密切配合任何肢体运动，因此一般认为响应延时需要在25毫秒以内才能减缓游戏者的眩晕感。</p>
<p>由于当代的云游戏系统普遍采用传输渲染图像的方案，客户端完全依赖服务端进行游戏画面的渲染，每一个游戏指令必须通过网络传递给服务器来处理。OnLive在其技术文档中就对响应延迟的各部分组成做了一个详细的拆解（图 4），这个分析在今天也依然没有过时。但是对应上文描述的响应延时的准确定义，这里的延时组成还缺少了输入设备延迟和输出设备延迟。对于有线输入设备，例如USB游戏手柄或者是鼠标键盘，输入延迟可以控制在1毫秒以内。然而对于使用蓝牙协议的无线手柄，或者是手机的触摸屏，根据客户端处理硬件的不同输入延迟则可能耗时超过10毫秒。因此，当前的一些云游戏提供商，如谷歌的Stadia在提供无线游戏手柄的配件时，会让游戏手柄直接通过WiFi和游戏服务器通信，来避免耗费在蓝牙通信上的延迟。输出设备延迟则由显示器的刷新频率决定。最常见的60Hz刷新率的液晶屏表示仅显示屏刷新这一个环节就会平均增加8毫秒的响应延迟。而如果增加显示屏的刷新率到120Hz，则可以将输出设备的平均延迟减半到4毫秒。</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3524f466b9bc41b88190ccb50efa8daf~tplv-k3u1fbpfcp-watermark.image" alt="Screen Shot 2021-02-26 at 2.08.25 AM.png" loading="lazy" class="medium-zoom-image"></p>
<p>图 4. 云游戏系统的延迟分析【4】</p>
<p>不难看出，整个延迟通路中的花费在图像渲染和视频编解码的时间是占比相对较小，随着GPU和视频编解码硬件的进步，其耗时也在不断降低，最大的延迟瓶颈仍然在网络传输延上。上图中将网络延时根据网络架构进行了划分，而实际上网络传输延时可以做进一步的细分：</p>
<ul>
<li>传播时延（Propagation Delay）：端到端发送一个数据包所需要的网络时延，常用RTT（回路时间，Round-Trip Time）来进行衡量。传播时延通常受网络类型，路由器的处理速度和繁忙程度，以及端到端的物理距离所影响。而在云游戏系统里，端到端的物理距离也是一个不可忽视的因素，因为1000公里的距离即使以光速传递也需要6.7毫秒的延时。</li>
<li>发送时延（Transmission Delay）：端到端发送完当前内容包含的所有数据包所需要的时间。发送时延主要受发送内容的大小和网络实际带宽决定。需要注意的是计算云游戏系统的发送时延不能采用所传输视频的平均码率，而需要考虑最坏情况，即最大的视频帧的大小。例如当云游戏采用1080p的分辨率和60帧每秒的刷新率时，在很多画面内容复杂的场景下，生成的IDR帧是会超过1MB的。而如果需要让超过1MB的IDR帧能在16.7毫秒内发送完成以免影响下一帧的发送，则需要至少有500Mbps的实际带宽才能完成。同时，另一个很重要的问题是网络链路中可能发生的丢包。如果采用重传的方法来恢复，则发送时延至少需要增加一个RTT；如果采用冗余编码的方法来恢复，则会增加正常发送的数据量，对网络的带宽提出更高的要求。</li>
<li>排队时延（Queuing Delay）：网络传输中常用缓冲队列来平滑传播时延的抖动所产生的影响，排队时延即为传输数据在链路中的缓存队列里排队所耗费的时间。在云游戏的系统中，如果发送的视频帧率为60帧每秒，缓冲队列每增加一帧图像，排队延迟将增加16.7毫秒。</li>
</ul>
<p>综合以上的分析，可知当代的云游戏系统最大的挑战是将大小不一的视频帧以最短的延时从服务器传输到客户端，且在整个游戏过程中，都能稳定地使传输延时维持在用户能容忍的最大延时范围以内。然而，这种稳定性的要求和互联网的“尽力服务”（best effort）的设计理念是相悖的。因此，在计算延时的时候，不能考虑最好的情况，或者是平均延时，而需要考虑最坏的情况下，最大的延时是不是能满足用户的游戏需求。尤其是那些运动剧烈，对精确操控有要求的游戏里，很可能一两次小小的卡顿就会影响整个游戏的进程，摧毁用户对云游戏的整体好感。尽管5G网络以其高带宽和低延时，被广泛寄予厚望，但是5G仅相当于图 4中的User Premise Routing，对比4G理论上减少了20-50毫秒的传播时延，实际效果上5G用户和使用光纤入户直连Gbps的无线路由器的Wi-Fi用户并不会有本质区别，仍然需要解决互联网干线的延迟，路由器随时可能发生的拥塞，排队和丢包等一系列网络传输难题。</p>
<p>云游戏面临的另一个重大的挑战和个人用户关系不大，却和整个行业息息相关：如何在不影响用户体验的条件下降低服务的成本。尽管云游戏的初衷是让用户能共享价格高昂的硬件设备，但是在实践中，因为延迟的限制使得云服务器必须分散部署到各地，而不能集中到一个数据中心靠统一管理以节约成本。同样，延迟的限制也使得云服务器不能被不同时区的用户分时复用来提高利用率。带宽的成本也会随着游戏分辨率的提高而成倍地增加。OnLive作为全球第一家商用云游戏提供商，就是因为不能承担高昂的运营成本而仅仅坚持了五年。而成本控制的问题在新一代的行业竞争者中并没有质的突破。与此同时，有研究【5】指出：相比于传统的将游戏下载到本地进行渲染，在云端渲染并以视频流的方式传输到本机的云游戏系统的耗能大大增加。如果将能耗折算成二氧化碳的排放量，视频流式的云游戏会比传统的游戏方式多排放一倍的二氧化碳。在全球节能减排、绿色环保的大背景下， 能否降低能耗也可能会成为整个云游戏行业健康发展的关键。
未来的发展方向
从上文对云游戏系统所面临的挑战可以总结出，未来云游戏技术的发展需要针对两个问题：</p>
<ol>
<li>如何在现有的网络架构下保证服务端向客户端数据传输的低延迟和稳定性？</li>
<li>如何优化云游戏的技术方案来增加对计算资源的复用并降低整个系统的能耗？</li>
</ol>
<p>而解决这两个问题，则需要很多跨领域的合作和创新，这里介绍一些学术界近年来的研究成果，以及如何能够和商业方案进行融合。</p>
<p>第一个关注点是架构的革新。云游戏系统普遍采用的传输渲染图像的方案和瘦客户端的架构设计，鉴于移动硬件的计算能力不断提升，用于客户端的设备，如手机或机顶盒等也开始有足够的计算资源和GPU进行三维渲染和相对复杂的计算，越来越多的设计开始考虑将瘦客户端进化为胖客户端（thick-client），利用客户端的计算资源和服务器端传送的数据在客户端本地直接生成响应用户下一个游戏指令的游戏画面。这样设计的最大作用是让游戏的响应延迟简化成一个客户端的本地回路，因此将网络的影响排除在外。具体的做法有以下三个方面：</p>
<ol>
<li>基于图像的渲染（IBR：Image-Based Rendering）：和现有的方案不同的是，服务端不是简单的向客户端传输渲染图像，而是生成包含更多信息的图像内容，例如全景图像（panorama）或者是深度图像（depth image）。而根据这些内容，客户端可以在本地进行基于图像的渲染，直接响应一些只改变渲染视角的游戏指令【4】。例如在第一人称射击或者VR游戏中，存在大量改变视角的运动都可以用这种优化方法来降低响应延时。</li>
<li>前景背景分离：需要在应用的层面对游戏场景中的前景物体和背景进行分离，在服务器端渲染复杂的背景图像后以全景图像（panorama）的形式传递到客户端，同时把前景物体的三维模型和渲染指令也发送给客户端，而利用客户端的GPU资源在本地渲染相对简单前景模型后，再和背景的图像拼接形成最终呈现的图像【6】。分离前景背景的方法可以支持一些非视角变换的游戏指令，如控制游戏中的角色做动作或者发出某些游戏技能。</li>
<li>预取（pre-fetch）和预测执行（speculation）：在服务器端预测未来某段时间内（可设定最坏情况下的网络传输延时）客户端可能发出的游戏指令，提前执行并将执行和未执行该指令的图像都提前发给客户端，客户端可根据指令的实际发出与否选择合适的预取图像进行显示，从而使响应延时不用经过网络回路【7】。这样的优化适合针对客户端不能进行本地处理的游戏指令。</li>
</ol>
<p>这里列举的研究方向尚未被应用在具体的商业云游戏系统中，但是却给未来云游戏技术的发展指出了一条可行之路：即通过发掘客户端本地的计算能力，根据服务端传输的数据能在某一段时间内（图 5 用服务器更新延迟 Server Update Latency来指代这段时间），通过在客户端本地的渲染和处理，在满足游戏QoE要求的延迟内生成响应用户游戏指令的画面。这种方案的最大的优势是让用户感受到的响应延迟脱离了网络传输的影响，让网络传输可以有更多的时间来对抗不可预测的拥塞和波动。当然，这样的方案也是有很大的代价的。为了能支持客户端本地进行渲染，服务端需要向客户端传输包括全景图像，深度信息，三维模型，预测执行结果等更多的内容，而服务端也需要耗费更多的计算资源来生成这些辅助内容。</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a71be343e1ae4b60b84368fa2ce64bcf~tplv-k3u1fbpfcp-watermark.image" alt="d63a8eff-a7be-4673-a84b-03626fbc4573.png" loading="lazy" class="medium-zoom-image"></p>
<p>图 5. 客户端的本地处理对响应延迟的影响【4】</p>
<p>第二个关注方向是数据的压缩。当前云游戏系统中采用的视频编码器是通用的编码标准。然而，游戏引擎渲染出的游戏画面是完全受三维模型和游戏逻辑决定的，存在很大的预处理的空间。因此，重新设计专用的云游戏的编码器，和游戏引擎进行深度整合是一个被学术界看好的研究方向【3】。与此同时，利用客户端的本地渲染能力也可以有效地减少传输数据。例如【8】中提出在本地渲染简化模型的方案。这种方案需要对游戏场景中创建一个简化的三维模型在GPU相对较弱的客户端进行本地渲染，而服务端会同时对完整的模型和简化的模型进行渲染后将差值传输给客户端。这样客户端通过本地对简化的三维模型渲染后可以直接在不受网络影响的延时内向用户展示一个低清的画面。而等到服务端传输的差值图像接收完成后可以进一步整合，得到原始画质的游戏画面。而由于只传输差值图像，数据量相对于传输原始图像可以有很大的降低。</p>
<p>第三个方向是改善现有的网络架构，提供传输延迟和码率保证。预留网络资源来对网络传输质量QoS提供保证的设计很早就被提出过，例如早期的ATM网络标准，近期的相关研究包括【9】。然而在构建云游戏专用的推流网络时，如何针对现有的网络架构，对软硬件协同优化以提供传输延迟和码率的保证，仍然对下一代的云游戏服务有决定性的影响。再结合第一点中提到的优化方案，如果新的云游戏系统可以忍受一个较大的服务器更新延迟，那么云游戏的服务器还可以突破地域限制，向不同时区的用户提供服务。服务器资源可以更好地进行错峰分时复用，从而大大降低系统的整体运营成本。</p>
<p>本文总结了云游戏技术的发展历史，现状和未来的优化方向。云游戏在所有的云计算相关应用中，可能是对延时和网络要求最为苛刻，最具有挑战性的应用。攻克云游戏这个难关，不只是方便用户去玩高质量的游戏，更能帮助拓展云计算应用场景，让云计算深入到未来社会的方方面面。而云游戏技术的进一步发展，需要更多开放创新的思维，和包括游戏开发、图形渲染、网络传输、视频编码等各方面的一起协助和努力！
参考文献
【1】Grand View Research. "Cloud Gaming Market Size, Share &amp; Trends Analysis Report By Type (File Streaming, Video Streaming), By Device, By Gamer Type, By Region, And Segment Forecasts, 2021 - 2027", <a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.grandviewresearch.com%2Findustry-analysis%2Fcloud-gaming-market" target="_blank" rel="nofollow noopener noreferrer" title="https://www.grandviewresearch.com/industry-analysis/cloud-gaming-market" ref="nofollow noopener noreferrer">www.grandviewresearch.com/industry-an…</a>
【2】VirtualGL. <a href="https://link.juejin.cn/?target=https%3A%2F%2Fvirtualgl.org%2F" target="_blank" rel="nofollow noopener noreferrer" title="https://virtualgl.org/" ref="nofollow noopener noreferrer">virtualgl.org/</a>
【3】Wei Cai, et al.  "A Survey on Cloud Gaming: Future of Computer Games", 2169-3536 2016 IEEE. Volume 4 2016
【4】S Shi, CH Hsu. "A survey of interactive remote rendering systems", ACM Computing Surveys (CSUR), 2015
【5】M Marsden, M Hazas, and M Broadbent. "From One Edge to the Other: Exploring Gaming's Rising Presence on the Network." Proceedings of the 7th International Conference on ICT for Sustainability. 2020
【6】Z Lai, et al. "Furion: Engineering high-quality immersive virtual reality on today's mobile devices." IEEE Transactions on Mobile Computing 19, no. 7 (2019): 1586-1602
【7】K Lee, et al. "Outatime: Using speculation to enable low-latency continuous interaction for mobile cloud gaming." In Proceedings of the 13th Annual International Conference on Mobile Systems, Applications, and Services, 2015
【8】E Cuervo, et al. "Kahawai: High-quality mobile gaming using gpu offload." In Proceedings of the 13th Annual International Conference on Mobile Systems, Applications, and Services, pp. 121-135. 2015
【9】T Szymanski. "An ultra-low-latency guaranteed-rate Internet for cloud services." IEEE/ACM Transactions on Networking 24, no. 1 (2014): 123-136
【10】T Richardson, et al. "Virtual network computing." IEEE Internet Computing 2, no. 1 (1998): 33-38
【11】B Cumberland, et al. "Microsoft windows nt server 4.0 terminal server edition technical reference." Microsoft Press, 1999</p></div>
`;
