export const content = `
<div class="markdown-body"><style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5ed211b18c6484e959f800ac6e80e1b~tplv-k3u1fbpfcp-watermark.image" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<h2 data-id="heading-0">从刀耕火种到规范化</h2>
<ol>
<li>【阶段一】第一家实习公司是一家小型创业公司，公司当时的体量只有几个人，整个开发流程非常粗暴：</li>
</ol>
<p>a. 在本地开发完成后编译打包
b. 通过 ftp 连接服务器，将打包产物上传到云主机
2. 【阶段二】在字节跳动实习做第一个项目，当时存在的现象：
a. 测试环境 = 本地开发环境
b. 可以随时上线，合代码不需要 review
c. 页面的线上问题发现途径基本上是：用户 -&gt; 运营 -&gt; 产品 -&gt; 研发/测试</p>
<p>举个例子，之前发生过一次事故，原因是前端的打包产物通过云服务器的一个功能以数据块的方式注入到容器中，当时这个功能不可用了一段时间，导致整个页面 504。但因为缺少监控的原因没有第一时间发现，例如 5xx 报错率的提升，页面 PV 下降等，最终问题的发现途径变成了：运营反馈给产品，产品再同步给研发</p>
<ol start="3">
<li>【阶段三】建立开发上线流程规范，开始养成服务稳定性意识</li>
</ol>
<ul>
<li>本地环境、线下环境、产品预发环境的建设，数据上区分线下线上环境</li>
<li>代码 review，卡上线权限</li>
<li>配置监控与报警</li>
<li>...</li>
</ul>
<h2 data-id="heading-1">SRE 的定义</h2>
<p>书名为《SRE: Google 运维解密》 ，那么 SRE 是什么？</p>
<p>SRE 是 Site Reliability Engineering，直译为网站可靠性工程，书中没有进行明确的定义，以个人的理解，用通俗的说法来讲是一系列的方法论，是 Google 软件工程师在系统运维过程中得出的运维方案。（比如早期监控是通过脚本检测的方式来实现，后来逐渐演化为一个新的模型，这个模型使用时间序列信息，发展了一种丰富的时间序列信息操作语言，这个系统称为 Borgmon 监控系统）</p>
<blockquote>
<p>当我在 2003 年加入 Google 的时候，我的任务就是领导一个由 7 名软件工程师组成的“生产环境维护组” ...... 当年 7 人的团队已经成长为公司内部 1000 余人的 SRE 团队，但是 SRE 团队的指导理念和工作方式还是基本保持了我最初的想法</p>
<p>—— 第一章 介绍</p>
</blockquote>
<h2 data-id="heading-2">SRE 团队的职责</h2>
<ul>
<li>优化</li>
</ul>
<ol>
<li>可用性改进</li>
<li>延迟优化</li>
<li>性能优化</li>
<li>效率优化</li>
</ol>
<ul>
<li>变更管理</li>
</ul>
<blockquote>
<p>业务研发的绩效很大程度上通过业务迭代来体现，比如上线了多少需求，页面增加了多少 UV，而 SRE 团队的绩效则是取决于服务的稳定性，业务迭代通常会影响服务可靠性问题，因为大部分的线上问题都是因为上线新版本导致的，这就导致两个业务研发与 SRE 团队产生冲突：是应该多上线还是少上线？</p>
<p>为了解决这个冲突提出了错误预算的概念。错误预算可以理解为余额，比如整个流程可以是：</p>
<p>1、产品管理层拍定这个月的服务可用性 SLO，比如 99.9%，那么错误预算为 0.1%</p>
<p>2、通过监控系统得出服务实际可用性，比如 99.95%</p>
<p>3、如果实际可用性 &gt; SLO，那么就说明还有错误预算，可以发布新版本</p>
<p>—— P31 使用错误预估的目的</p>
</blockquote>
<ul>
<li>监控</li>
</ul>
<ol>
<li>监控报警</li>
<li>紧急事务处理</li>
</ol>
<ul>
<li>资源</li>
</ul>
<ol>
<li>容量规划与管理</li>
</ol>
<h2 data-id="heading-3">基础概念</h2>
<blockquote>
<p>如果不详细了解服务各种行为的重要性，并且不去度量这些行为的正确性的话，就无法正确运维这个系统，更不要说可靠得运维了。所以，不管是对外服务，还是内部 API，我们都需要制定一个针对用户的服务质量指标，并且努力去达到这个服务目标。</p>
<p>—— P34 第四章 服务质量目标</p>
</blockquote>
<ul>
<li>SLI：Service Level Indicator 服务质量指标，一个具体的量化指标</li>
<li>请求延迟</li>
<li>平均</li>
<li>PCT50</li>
<li>PCT95</li>
<li>PCT99</li>
<li>错误率</li>
<li>QPS</li>
<li>资源（CPU、内存、磁盘</li>
<li>利用率 吞吐量</li>
<li>可用性 = 机器正常运行时间 / 总时间 or 成功数 / 总请求数</li>
</ul>
<blockquote>
<p>PCT99：将一组数字从小到大排序，第 99% 位置的值为 PCT99。</p>
<p>PCT99 的意义在于，一个服务有的请求可能很快，有的请求很慢，直接取平均值可能掩盖长尾延迟。在实际开发中，QPS 越高，通常延迟也会越大，比如对于一个服务来说晚上是请求高峰量，其他时间都是低峰，导致取平均得到的值比较低</p>
</blockquote>
<p>实际案例：</p>
<p>接口QPS</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ec3a4b02ad54b3ca4f2c39b866b9f4f~tplv-k3u1fbpfcp-watermark.image" alt="df020522-3355-4b82-8d7a-94f5baea0943.png" loading="lazy" class="medium-zoom-image"></p>
<p>接口PCT99</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a02036e406a47ee8e7225d059c8ad44~tplv-k3u1fbpfcp-watermark.image" alt="5eb959d2-252b-46e8-84d0-2077cc99b863.png" loading="lazy" class="medium-zoom-image"></p>
<ul>
<li>SLO：Service Level Objective，服务质量目标，SLI 的目标值</li>
<li>可用性高于 99%</li>
<li>平均延迟低于 100ms</li>
</ul>
<blockquote>
<p>SLO 的制定</p>
<ol>
<li>SLO 的制定与业务相关</li>
<li>不应该是 100%</li>
</ol>
<p>a. 从理论上来讲不可能
b. 对于用户来说 99.99 和 100 从体验上感知不到明显区别</p>
</blockquote>








































































































<table><thead><tr><th align="left"><strong>Avaliability level Allowed unavailability window</strong></th><th align="left"></th><th align="left"></th><th align="left"></th><th align="left"></th><th align="left"></th><th align="left"></th></tr></thead><tbody><tr><td align="left"></td><td align="left"><strong>per year</strong></td><td align="left"><strong>per quarter</strong></td><td align="left"><strong>per month</strong></td><td align="left"><strong>per week</strong></td><td align="left"><strong>per day</strong></td><td align="left"><strong>per hour</strong></td></tr><tr><td align="left">90%</td><td align="left">36.5 days</td><td align="left">9 days</td><td align="left">3 days</td><td align="left">16.8 hours</td><td align="left">2.4 hours</td><td align="left">6 minutes</td></tr><tr><td align="left">95%</td><td align="left">18.25 days</td><td align="left">4.5 days</td><td align="left">1.5 days</td><td align="left">8.4 hours</td><td align="left">1.2 hours</td><td align="left">3 minutes</td></tr><tr><td align="left">99%</td><td align="left">3.65 days</td><td align="left">21.6 hours</td><td align="left">7.2 hours</td><td align="left">1.68 hours</td><td align="left">14.4 minutes</td><td align="left">36 seconds</td></tr><tr><td align="left">99.5%</td><td align="left">1.83 days</td><td align="left">10.8 hours</td><td align="left">3.6 hours</td><td align="left">50.4 minutes</td><td align="left">7.20 minutes</td><td align="left">18 seconds</td></tr><tr><td align="left">99.9%</td><td align="left">8.76 hours</td><td align="left">2.16 hours</td><td align="left">43.2 hours</td><td align="left">10.1 minutes</td><td align="left">1.44 minutes</td><td align="left">3.6 seconds</td></tr><tr><td align="left">99.95%</td><td align="left">4.38 hours</td><td align="left">1.08 hours</td><td align="left">21.6 hours</td><td align="left">5.04 minutes</td><td align="left">43.2 minutes</td><td align="left">1.8 seconds</td></tr><tr><td align="left">99.99%</td><td align="left">52.6 minutes</td><td align="left">12.96 minutes</td><td align="left">4.32 minutes</td><td align="left">60.5 seconds</td><td align="left">8.64 minutes</td><td align="left">0.36 seconds</td></tr><tr><td align="left">99.999%</td><td align="left">5.26 minutes</td><td align="left">1.30 minutes</td><td align="left">25.9 minutes</td><td align="left">6.05 seconds</td><td align="left">0.87 seconds</td><td align="left">0.04 seconds</td></tr><tr><td align="left">3. 该值应该是去努力达到的，不会超过太多，制定得太低无意义，制定太高浪费机器资源</td><td align="left"></td><td align="left"></td><td align="left"></td><td align="left"></td><td align="left"></td><td align="left"></td></tr></tbody></table>
<ul>
<li>SLA：Service Level Agreement，服务质量协议，服务用户之间制定的协议，描述达到或者不达到 SLO 的后果（与业务相关）
<ul>
<li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fterms.aliyun.com%2Flegal-agreement%2Fterms%2Fsuit_bu1_ali_cloud%2Fsuit_bu1_ali_cloud201909241949_62160.html%3Fspm%3Da2c4g.11186623.2.12.7ec01d94RZ3sB9" target="_blank" rel="nofollow noopener noreferrer" title="http://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201909241949_62160.html?spm=a2c4g.11186623.2.12.7ec01d94RZ3sB9" ref="nofollow noopener noreferrer">阿里云 ECS SLA</a></li>
<li><a href="https://link.juejin.cn/?target=https%3A%2F%2Faws.amazon.com%2Fcn%2Flegal%2Fservice-level-agreements%2F" target="_blank" rel="nofollow noopener noreferrer" title="https://aws.amazon.com/cn/legal/service-level-agreements/" ref="nofollow noopener noreferrer">AWS SLA</a></li>
</ul>
</li>
</ul>
<h3 data-id="heading-4">监控</h3>
<h4 data-id="heading-5">实现</h4>
<p>收集、处理、汇总，并且显示关于某个系统的实时量化数据。</p>
<p>以 <a href="https://link.juejin.cn/?target=http%3A%2F%2Fopentsdb.net%2Fdocs%2Fbuild%2Fhtml%2Findex.html" target="_blank" rel="nofollow noopener noreferrer" title="http://opentsdb.net/docs/build/html/index.html" ref="nofollow noopener noreferrer">opentsdb</a> 为例子，具体内容为：时间序列数据（time-series）+ 标签（tags）</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6ed7296399342c2897ac7beaf4da83e~tplv-k3u1fbpfcp-watermark.image" alt="2049d523-96e0-4674-a361-93bb1e6b5d69.png" loading="lazy" class="medium-zoom-image"></p>
<p>举个例子，打点名字为 app.home.page，时间区间为 2020.11.12 00:00:00 ~  2020.11.12 16:00:00，查询得到的结果为</p>
<pre><code class="hljs language-json copyable" lang="json">{
    dps: {
        <span class="hljs-attr">"1605110400"</span>: <span class="hljs-number">1.1</span>,
        <span class="hljs-attr">"1605110430"</span>: <span class="hljs-number">1.9</span>,
        <span class="hljs-attr">"1605110460"</span>: <span class="hljs-number">1.0</span>,
        <span class="hljs-attr">"1605110490"</span>: <span class="hljs-number">1.3</span>,
        <span class="hljs-attr">"1605110520"</span>: <span class="hljs-number">1.4</span>,
        ...
    },
    <span class="hljs-attr">"tags"</span>: {
        <span class="hljs-attr">"method"</span>: <span class="hljs-string">"home"</span>
        ...
    }
}
<span class="copy-code-btn">复制代码</span></code></pre>
<h4 data-id="heading-6">意义</h4>
<ul>
<li>分析未来长期趋势，比如数据库容量问题</li>
<li>数据比较，上线后延迟、错误率是否变高了</li>
<li>报警，设置合理的报警，降低误报率。</li>
</ul>
<p><strong>报警</strong></p>
<p>定义：在报警时间窗口（报警运行频率）内对监控数据进行计算，得出结果为 true / false。</p>
<p>报警规则规范：</p>
<ul>
<li>在真正关心的地方设置正确阈值的报警。报警阈值过低报警无意义，过高则会降低对报警的敏感度，忽略真正的报警情况。</li>
<li>报警应该是可操作，收到报警后立即进行某种操作。如果是机械化的操作应该做成自动化流水线。</li>
<li>重复报警进行聚合。</li>
</ul>
<p><strong>相关链接</strong></p>
<p>opentsdb doc：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fopentsdb.net%2Fdocs%2Fbuild%2Fhtml%2Findex.html" target="_blank" rel="nofollow noopener noreferrer" title="http://opentsdb.net/docs/build/html/index.html" ref="nofollow noopener noreferrer">opentsdb.net/docs/build/…</a></p>
<p><strong>作者：蔡裕鹏</strong></p></div>
`;
