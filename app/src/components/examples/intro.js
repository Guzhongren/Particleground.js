import React, { Component } from 'react';
import $ from 'jquery';
import pjs from 'pjs';

export default class Intro extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="main">
                <div className="main-content text-justify preface">
                    <div className="module">
                        <h5 className="caption">
                            <a id="华丽丽的介绍" href="#华丽丽的介绍">华丽丽的介绍</a>
                        </h5>
                        <div className="content">
                            <p className="text-indent">
                                Particleground.js（以下简称pjs）是一款基于canvas的不依赖于其他库的简洁，高效，轻量级的canvas粒子运动特效插件库。提供一些比较绚丽，实用的特效应用于界面，希望能达到锦上添花的作用，给用户带来些许惊喜。
                            </p>
                            <p className="text-indent">
                                pjs的特效多数来源于他人分享，pjs像一个搬运工一样把它们集合在一起，并做了细节或功能上的改进，在此，感谢原作者的创意或代码。
                            </p>
                        </div>
                    </div>

                    <div className="module">
                        <h5 className="caption">
                            <a id="理念" href="#理念">理念</a>
                        </h5>
                        <div className="content">
                            <p className="text-indent">
                                API设计理念信仰 <code>"The Write Less, Do More"</code> 和 <code>"Keep it Simple and Stupid"</code> ，希望插件使用起来非常的简单便捷，五分钟上手，立竿见影，不必花太多的时间来学习插件，因为工具是帮助人们更快捷的实现想要的功能，而不是占用人们太多的时间去学习，简而言之：既要强大，易扩展，又要简单！
                            </p>
                            <p className="text-indent">
                                pjs希望代码封装得简洁直观，并且高效。
                                感谢市面上缤纷的开源项目或者其他，因为pjs无疑克隆（借鉴/参考/站在巨人的肩膀之上）了你们优秀的代码或者思想。
                            </p>
                        </div>
                    </div>

                    <div className="module">
                        <h5 className="caption">
                            <a id="兼容性" href="#兼容性">兼容性</a>
                        </h5>
                        <div className="content">
                            <p className="text-indent">
                                最低兼容ie9，请于
                                <a className="dotted-line" href="http://caniuse.com/#search=canvas" target="_blank">
                                    这里
                                </a>
                                查看浏览器对canvas的支持列表，对于不支持canvas的浏览器则会静默地失败。
                            </p>
                        </div>
                    </div>

                    <div className="module">
                        <h5 className="caption">
                            <a id="托管与交流" href="#托管与交流">托管与交流</a>
                        </h5>
                        <div className="content">
                            <p className="text-indent">
                                欢迎
                                <a className="dotted-line" href="http://shang.qq.com/wpa/qunwpa?idkey=f548e3f94e0040a2ac5adfe4fec6915ef67c8c1b6ba5784ff6d5049c6135a759" title="172839150" target="_blank">
                                    QQ群
                                </a>
                                交流，或官网留言，或提交问题，想法，建议到
                                <a className="dotted-line" href="https://github.com/Barrior/Particleground.js/issues" target="_blank">
                                    issues
                                </a>，帮助pjs改进，留下您的芳名。
                            </p>
                        </div>
                    </div>

                    <div className="module">
                        <h5 className="caption">
                            <a id="许可协议" href="#许可协议">许可协议</a>
                        </h5>
                        <div className="content">
                            <p className="text-indent">
                                <a className="dotted-line" href="http://www.opensource.org/licenses/mit-license.php" target="_blank">
                                    MIT
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}