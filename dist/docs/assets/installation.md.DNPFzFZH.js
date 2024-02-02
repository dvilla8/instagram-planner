import{_ as a,o as s,c as n,V as e}from"./chunks/framework.7X0oGKLA.js";const k=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"installation.md","filePath":"installation.md"}'),i={name:"installation.md"},t=e(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><h2 id="premise" tabindex="-1">Premise <a class="header-anchor" href="#premise" aria-label="Permalink to &quot;Premise&quot;">​</a></h2><p>This planner is built with JavaScript using an awesome framework called Vue.js.<br> You can learn more about Vue.js on <a href="https://vuejs.org/" target="_blank" rel="noreferrer">their website</a>, it&#39;s really straightforward to start.</p><h3 id="try-it-online" tabindex="-1">Try it online <a class="header-anchor" href="#try-it-online" aria-label="Permalink to &quot;Try it online&quot;">​</a></h3><p>You can use <strong>dxlliv/planner</strong> directly in your browser using the <a href="https://dxlliv.github.io/planner/" target="_blank" rel="noreferrer">GitHub Demo</a>.</p><hr><p>Installation is not mandatory, you can create new profiles with an intuitive interface or import a profile selecting a pre-configured folder (or a .zip file, soon) using the demo.</p><p>Changes will be saved in your browser using a client-side storage called <a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" target="_blank" rel="noreferrer">IndexedDB API</a>.<br> If you prefer to run the planner locally and host it somewhere once done, keep reading.</p><h2 id="installation-1" tabindex="-1">Installation <a class="header-anchor" href="#installation-1" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Make sure you have <a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer">Node.js</a> and NPM installed.</p><p>Once ready, open your terminal and move to your preferred folder.<br> Clone the <strong>dxlliv/planner</strong> repository and move to the project directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/dxlliv/planner.git</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> planner</span></span></code></pre></div><p>Install dependencies and run the project:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or use yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><h2 id="file-structure" tabindex="-1">File structure <a class="header-anchor" href="#file-structure" aria-label="Permalink to &quot;File structure&quot;">​</a></h2><p>Take a look at the project structure. The <code>package.json</code> contains all the libraries have been used to develop this and should not be touched unless you know what you are doing.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ public</span></span>
<span class="line"><span>│  └─ user</span></span>
<span class="line"><span>│     └─ instagram</span></span>
<span class="line"><span>│        └─ {username}</span></span>
<span class="line"><span>│           ├─ media</span></span>
<span class="line"><span>│           │  ├─ 1.jpg</span></span>
<span class="line"><span>│           │  ├─ 2.jpg</span></span>
<span class="line"><span>│           │  └─ 3.jpg</span></span>
<span class="line"><span>│           ├─ avatar.jpg</span></span>
<span class="line"><span>│           └─ config.json</span></span>
<span class="line"><span>├─ src</span></span>
<span class="line"><span>├─ config.json</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><p>The files you have to modify are the <code>config.json</code>. The main configuration is located in the root folder and contains a list of profile paths. Other configurations live in the public folder and are related to each profile, like <code>public/user/instagram/dxlliv/config.json</code>.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>Read more about the configuration in <a href="./getting-started.html#configuration">Getting Started</a>.</p>`,20),l=[t];function r(o,p,h,d,c,u){return s(),n("div",null,l)}const f=a(i,[["render",r]]);export{k as __pageData,f as default};
