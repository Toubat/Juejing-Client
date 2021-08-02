
export const content = `
<div class="markdown-body"><style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>OKee Mobile 开源站点地址：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fokee.oceanengine.com%2Fmobile%2Fvue%2F%23%2Fzh-CN%2Fintro" target="_blank" rel="nofollow noopener noreferrer" title="https://okee.oceanengine.com/mobile/vue/#/zh-CN/intro" ref="nofollow noopener noreferrer">okee.oceanengine.com/mobile/vue/…</a></p>
<p>GitHub ：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Foceanengine%2Fokeedesign-mobile-vue" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/oceanengine/okeedesign-mobile-vue" ref="nofollow noopener noreferrer">github.com/oceanengine…</a></p>
<h1 data-id="heading-0">前言</h1>
<p>什么是 OKee？“OK”这个词的背后是 “All Correct” ，这正是要实现的目标——坚持做正确的事，并把事情做得更好，同时足够简单，容易记忆。</p>
<p>OKee Design 的口号是 “Make More OKee，让一切变得更好”，成就极致的商业体验，始终坚持追求极致，多元兼容，开放共赢的理念。</p>
<p>而今天，我要向大家介绍的就是 OKeeDesign 生态首个开源的移动端组件库 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fokee.oceanengine.com%2Fmobile%2Fvue%2F%23%2Fzh-CN%2Fintro" target="_blank" rel="nofollow noopener noreferrer" title="https://okee.oceanengine.com/mobile/vue/#/zh-CN/intro" ref="nofollow noopener noreferrer">OKee Mobile</a>。</p>
<p>欢迎大家使用和提出建议。</p>
<p>有人会问，市面上都有这么多移动组件库了，为什么还要再写一个移动组件库呢？下面容我细细道来。</p>
<p>当我们接到一个业务需求，并定下技术栈后，我们就会从众多的组件库中选择一个为我们服务。很多时候，在调研了众多的组件库后，我们依然举棋不定，因为没有一个组件库能够匹配自己的业务需求。如果勉强选择了一个不合适的“他”，会让我们在接下来的开发中产生大量的无用功，比如覆盖样式，或是引入第二个组件库。</p>
<p>为何会产生这样的问题呢？</p>
<p>因为不同的业务，甚至不同的项目都有独特的交互风格及 UI 样式。而组件库都是从业务中衍生的，如果组件库的定位与你的业务不切合，那总会有各种各样的问题。</p>
<p>而这次的主角 OKee Mobile 的定位是，不仅能服务于 ToC 业务，还覆盖了常见 ToB 的场景，并深耕于数据展示场景。组件库基于一套完整的设计概念，将组件拆解成一个个 design token，让你能够优雅地配置自己的产品。</p>
<p>现阶段，OKee Mobile 提供了 36 个组件，已覆盖大量业务，并在持续演进！</p>
<p>下面简单聊聊，它有什么不同？</p>
<h1 data-id="heading-1">换肤体验</h1>
<ol>
<li>我们提取了一套完整的全局 less 变量控制组件的整体风格。包括颜色、圆角、字体、动画等属性。截取部分样式展示如下：</li>
</ol>
<pre><code class="copyable">@primary-color: @blue;
@primary-color-1: ~\`colorPalette('@{primary-color}', 7) \`; 
@primary-color-2: ~\`colorPalette('@{primary-color}', 6) \`; 
@primary-color-3: ~\`colorPalette('@{primary-color}', 5) \`;
@primary-color-4: ~\`colorPalette('@{primary-color}', 3) \`; 
@primary-color-5: ~\`colorPalette('@{primary-color}', 1) \`; 

@z-index-1: 1;
@z-index-2: 3;
@z-index-3: 5;
@z-index-4: 7;
@z-index-5: 10;

@border-radius-1: 2px;
@border-radius-2: 4px;
@border-radius-3: 8px;
@border-radius-4: 12px;
@border-radius-5: 16px;

@animation-duration-base: 0.3s;
@animation-duration-fast: 0.2s;
<span class="copy-code-btn">复制代码</span></code></pre>
<ol start="2">
<li>提取了单个组件的设计元素，扩展了单个组件的定制能力。以下展示按钮的设计元素：</li>
</ol>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7bacc8d4a319445ca2b83777056f6d8c~tplv-k3u1fbpfcp-watermark.image" alt="Lark20210721-155533.gif" loading="lazy" class="medium-zoom-image"></p>
<h2 data-id="heading-2">一、编译时换肤</h2>
<p>为了降低设计师与开发的沟通成本，减少因而产生的对组件的二次开发。</p>
<p>我们正在开发一套主题配置平台，让设计师有能力自行配置组件库主题，并在开发阶段前，导出一套符合产品风格的组件库皮肤。此平台后续会开放出来！</p>
<p>而这个配置平台的核心功能，已经在<a href="https://link.juejin.cn/?target=https%3A%2F%2Fokee.oceanengine.com%2Fmobile%2Fvue%2F%23%2Fzh-CN%2Fintro" target="_blank" rel="nofollow noopener noreferrer" title="https://okee.oceanengine.com/mobile/vue/#/zh-CN/intro" ref="nofollow noopener noreferrer">文档中</a>内置了。</p>
<p>在配置界面中调整对应的色值，例如调整 Primary 的颜色，在右边即可实时预览展示效果。</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05af4e94a71c46c198d88e79c132ed99~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>色值变更后，使用到此色值的组件即会调整。</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6041ba318f0442efba672e1dc9c1abc4~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>最后，点击“导出”，把配置好的变量导出为 <code>var.json</code>，并在项目的 less-loader 中覆盖，即可完成主题配置。</p>
<pre><code class="copyable">const vars = require('./config/theme/var.json');

module.exports = {
  rules: [
    {
      test: /.less$/,
      use: [
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
            modifyVars: vars,
          },
        },
      ],
    },
  ],
};
<span class="copy-code-btn">复制代码</span></code></pre>
<h2 data-id="heading-3">二、运行时换肤</h2>
<p>我们使用的是 less 变量转 css 变量的策略实现的在线换肤。</p>
<p>也就是说，在开发时，我们不需要手写 css 变量，只需在文件打包时，提供一个配置文件，标明哪些 less 变量是需要编译成 css 变量。我们的编译插件就会自动收集依赖于它们的 less 变量，全部替换成对应的 css 变量。具体过程如下，</p>
<ul>
<li>在 less 编译阶段，将标记的 less 变量声明成 css 变量，挂在 <code>:root</code> 伪类下。</li>
<li>将使用到这些变量的属性值转换成对应的 css 变量。</li>
<li>在换肤时，更改 <code>:root</code> 下的 css 变量值，就能实现在运行时修改全局风格，及组件特定风格。</li>
</ul>
<p>值得注意的是，需要限制 css 变量的数量，否则会对页面性能有明显的影响。</p>
<h1 data-id="heading-4">核心能力</h1>
<p>上面所说的换肤体验，能够给业务提供优秀的适配性。</p>
<p>而仅仅有适配能力是远远不够的，我们还需要有完备的基础组件，并基于业务场景对组件进行一定程度地扩展，增强组件的交互能力，对组件进行不断地打磨，最终提升产品的使用体验。</p>
<p>下面简短介绍一个组件，它是数据类产品的支柱组件，却常在移动端被忽略，它就是 Table。</p>
<p>说到这里，大家往往会提起移动屏幕太小，原本想用 Table 展示的数据只能转换成其他形式来展示。我承认，在 ToC 场景下，展示信息是可以聚合在诸如列表之类的轻型组件上的。</p>
<p>但在 ToB 场景下，真实的需求往往就是展示许多聚合性不那么强的数据，而且列数很多。那 Table 无疑是有它的舞台的，问题的关键变成了交互是不是足够好。</p>
<p>下面，看一看 OKee Mobile 的 Table 展示</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e86de3de1094921b361e09b18be0826~tplv-k3u1fbpfcp-watermark.image" alt="Lark20210721-160204.gif" loading="lazy" class="medium-zoom-image"></p>
<h1 data-id="heading-5">总结</h1>
<p>OKee Design 体系涵盖所有主流技术栈下的 PC 及移动组件库、图表库、图标库、插画库，主题配置平台，后续惊喜不断，敬请期待！</p>
<p>想聊的点已经和大家聊完了，接下来贴上组件库的 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Foceanengine%2Fokeedesign-mobile-vue" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/oceanengine/okeedesign-mobile-vue" ref="nofollow noopener noreferrer">GitHub 链接</a>，欢迎大家参与开源，无论是共建还是提问题，都可以在 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Foceanengine%2Fokeedesign-mobile-vue%2Fissues" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/oceanengine/okeedesign-mobile-vue/issues" ref="nofollow noopener noreferrer">issue</a> 中联系我们，感谢阅读。</p>
<p>同时也欢迎大家留言，我们会针对大家的问题，撰写后续的文章。</p></div>
`;