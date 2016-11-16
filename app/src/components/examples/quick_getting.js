import React, { Component } from 'react';
import Menu from '../menu';
import pjs from 'pjs';
import Comment from '../comment';
import $ from 'jquery';
import { loadjs, loadcss } from '../../common/load';

export default class Intro extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        loadcss( '//cdn.bootcss.com/prettify/r298/prettify.min.css' );
        loadjs( '//cdn.bootcss.com/prettify/r298/prettify.min.js', () => {
            prettyPrint();
        });
    }

    render() {
        this.pageID = this.context.router.params.instance;

        return (
            <div className="cf">
                <Menu></Menu>
                <div className="main">
                    <div className="main-content quick-getting">
                        <div className="module">
                            <h5 className="caption">
                                <a id="获取pjs" href="#获取pjs">
                                    1、获取Particleground.js（以下简称pjs）
                                </a>
                            </h5>
                            <div className="content">
                                <blockquote>通过以下三种方式获取pjs：</blockquote>
                                <p className="text-indent">
                                    1、从
                                    {
                                        /*
                                         <a className="dotted-line" href="/download"
                                            target="_blank">
                                            官网下载
                                         </a>
                                        */
                                    }
                                    <del>官网下载(暂未开放)</del>
                                    界面选择特定的特效打包下载，或者直接
                                    <a className="dotted-line" href="/particleground.js.zip"
                                       target="_blank">
                                        下载最新版本
                                    </a>。
                                </p>
                                <p className="text-indent">
                                    2、克隆pjs在
                                    <a className="dotted-line"
                                       href="https://github.com/Barrior/Particleground.js"
                                       target="_blank">
                                        Github
                                    </a>
                                    上的整个项目，在
                                    <code>production</code>
                                    文件夹下引入所需的js文件。
                                </p>
                                <p className="text-indent">
                                    3、通过<code>npm install Particleground.js --save</code>安装pjs。
                                </p>
                            </div>
                        </div>

                        <div className="module">
                            <h5 className="caption">
                                <a id="引入pjs" href="#引入pjs">
                                    2、引入pjs
                                </a>
                            </h5>
                            <div className="content">
                                <blockquote>
                                    在页面内使用script标签引入插件js即可，当然也支持模块化的加载方式，不过pjs仍然在window对象上注册了Particleground对象，用于插件拓展。
                                </blockquote>
                                <pre className="import normal-text prettyprint">
                                    {
                                    `<!DOCTYPE html>
<html>
<header>
    <meta charset="utf-8">
    <!-- 引入 Particleground.js -->
    <script src="particleground.js"></script>
    <!-- 引入 粒子特效js -->
    <script src="particle.js"></script>
</header>
<body>
</body>
</html>`
                                    }
                                </pre>
                            </div>
                        </div>

                        <div className="module">
                            <h5 className="caption">
                                <a id="创建特效" href="#创建特效">
                                    3、创建特效
                                </a>
                            </h5>
                            <div className="content">
                                <blockquote>
                                    准备一个具有一定宽高的DOM元素，用于显示粒子特效。<br/>
                                    使用<code>new Particleground.特效名</code>创建特效。
                                </blockquote>
                                <pre className="use normal-text prettyprint">
                                    {`<!DOCTYPE html>
<html>
<header>
    <meta charset="utf-8">
    <!-- 引入 Particleground.js -->
    <script src="particleground.js"></script>
    <!-- 引入 粒子特效js -->
    <script src="particle.js"></script>
</header>
<body>
    <!-- 准备一个具有一定宽高的DOM元素，用于显示粒子特效 -->
    <div id="demo" style="width: 400px; height: 250px;"></div>

    <script>
        // 使用 new Particleground.特效名 创建特效
        new Particleground.particle( '#demo' );
    </script>
</body>
</html>`}
                                </pre>
                            </div>
                        </div>

                        <div className="module">
                            <h5 className="caption">
                                <a id="创建完成" href="#创建完成">
                                    4、创建完成
                                </a>
                            </h5>
                            <div className="content">
                                <blockquote>
                                    这样我们的粒子运动特效就完成了！
                                </blockquote>
                                <div className="instance" data-ctrl="none">
                                    <div className="demo"></div>
                                </div>
                            </div>
                        </div>

                        <div className="module">
                            <h5 className="caption">
                                <a id="进阶" href="#进阶">
                                    进阶<small>（多加几分钟）</small>
                                </a>
                            </h5>
                            <div className="content">
                                <blockquote>
                                    <div>
                                        每个用new实例化的对象都包含以下两个方法，为了减少重复劳动，后面的实例就不再赘述(省略不写)：
                                    </div>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td width="100"><code>.pause()</code></td>
                                            <td>暂停粒子运动</td>
                                        </tr>
                                        <tr>
                                            <td><code>.open()</code></td>
                                            <td>开启粒子运动</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </blockquote>
                                <div id="first-instance-ctrl">
                                    <div className="btn btn-success open">点我·开启</div>
                                    <div className="btn btn-success pause">点我·暂停</div>
                                </div>
                                <div>使用代码如下：</div>
                                <pre className="use-method normal-text prettyprint">
                                    {`<body>
    <!-- 准备一个具有一定宽高的DOM元素，用于显示粒子特效 -->
    <div id="demo" style="width: 400px; height: 250px;"></div>

    <div id="open">开启</div>
    <div id="pause">暂停</div>

    <script>
        // 使用 new Particleground.特效名 创建特效，并赋值给一个变量
        var obj = new Particleground.particle( '#demo' );

        document.getElementById( 'open' ).onclick = function(){
            // 开启运动
            obj.open();
        };

        document.getElementById( 'pause' ).onclick = function(){
            // 暂停运动
            obj.pause();
        };
    </script>
</body>`}
                                </pre>
                            </div>
                        </div>

                        <div className="module">
                            <h5 className="caption">
                                <a id="配置" href="#配置">
                                    配置
                                </a>
                            </h5>
                            <div className="content">
                                <blockquote>
                                    1、每个实例对象都接受两个参数，一个selector，一个options。<br/>
                                    <code>new Particleground.name( selector , options );</code>
                                </blockquote>
                                <table className="table table-bordered-inner table-striped">
                                    <thead>
                                    <tr>
                                        <th>参数</th>
                                        <th>类型</th>
                                        <th>描述</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>selector</td>
                                        <td>string 或 element</td>
                                        <td>必填，选择器字符串或原生DOM元素</td>
                                    </tr>
                                    <tr>
                                        <td>options</td>
                                        <td>object</td>
                                        <td>可选，特效的配置参数</td>
                                    </tr>
                                    </tbody>
                                </table>

                                <blockquote>
                                    <div>
                                        <a id="默认配置参数" href="#默认配置参数">
                                            2、如未特殊说明，每个插件的配置参数都包含如下三个默认配置，后面的实例就不再赘述(省略不写)。
                                        </a>
                                    </div>
                                </blockquote>
                                <table className="table table-bordered-inner table-striped">
                                    <thead>
                                    <tr>
                                        <th width="100">名称</th>
                                        <th width="100">默认值</th>
                                        <th width="150">类型</th>
                                        <th width="450">描述</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>opacity</td>
                                        <td>1</td>
                                        <td>number</td>
                                        <td>画布全局透明度，取值范围：[0-1]</td>
                                    </tr>
                                    <tr>
                                        <td>color</td>
                                        <td>[]</td>
                                        <td>string 或 array</td>
                                        <td className="module module-api">
                                            <div>粒子颜色</div>
                                            <ul>
                                                <li>
                                                    空数组表示随机取色
                                                </li>
                                                <li>
                                                    特定颜色的数组，如：['red', 'blue', 'green']，则表示粒子颜色为这三种色值的随机一种
                                                </li>
                                                <li>
                                                    当为string类型时，如：'red'，则表示粒子都填充为红色
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>resize</td>
                                        <td>true</td>
                                        <td>boolean</td>
                                        <td>自适应窗口尺寸变化</td>
                                    </tr>
                                    </tbody>
                                </table>

                                <blockquote>
                                    <div>
                                        <a id="配置接口" href="#配置接口">
                                            3、通过pjs插件暴露的配置接口
                                            <code>Particleground.name.defaultConfig</code>
                                            可方便地修改某个特效的默认配置，示例如下：
                                        </a>
                                    </div>
                                </blockquote>
                                <pre className="default-config normal-text prettyprint">
                                    {`Particleground.particle.defaultConfig = {
    opacity: 1,
    color: ['red', 'blue', 'green'],
    maxSpeed: 2,
    minSpeed: 1,
    // other properties
};`}
                                </pre>

                                <blockquote>
                                    <div>
                                        <a id="全局接口" href="#全局接口">
                                            4、通过pjs插件暴露的全局接口
                                            <code>Particleground.commonConfig</code>
                                            可方便地修改所有特效的公共默认配置，当前公共默认配置如下：
                                        </a>
                                    </div>
                                </blockquote>
                                <pre className="common-config normal-text prettyprint">
                                    {`Particleground.commonConfig = {
    // 画布全局透明度
    opacity: 1,
    // 粒子颜色，空数组表示随机取色，或赋值特定颜色的数组，如：['red', 'blue', 'green']
    color: [],
    // 默认true: 自适应窗口尺寸变化
    resize: true
}`}
                                </pre>

                                <div className="margin-top-10">
                                    <h6>小提示：</h6>
                                    <ul className="mini-text">
                                        <li>修改默认配置应放在 <code>new</code> 之前。</li>
                                        <li>
                                            每个pjs插件的默认配置可以查看右侧对应的
                                            <b>实例及API</b> 。
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    <Comment></Comment>
                </div>
            </div>
        )
    }
}