import React, { Component } from 'react';
import Menu from '../menu';
import $ from 'jquery';
import pjs from 'pjs';
import Comment from '../comment';
import bind from '../../common/bind';
import { prettyPrint } from '../../common/prettyPrint';

export default class Intro extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        prettyPrint();

        bind( 0, function( demoElem ){
            let settings = {
                distance: 90,
                range: 100
            };
            if( window.isMobile ){
                settings.distance = 30;
            }
            return new Particleground.particle( demoElem, settings );
        });

        bind( 1, function( demoElem ){
            return new Particleground.particle( demoElem, {
                range: 0,
                num: 18,
                maxR: 20,
                maxSpeed: 3
            });
        });
    }

    render() {
        return (
            <div className="cf">
                <Menu></Menu>
                <div className="main">
                    <div className="main-content">
                        <div className="instance" data-ctrl="none">
                            <div className="demo"></div>
                        </div>

                        <div id="first-instance-ctrl">
                            <div className="btn btn-success open">开启·OPEN</div>
                            <div className="btn btn-success pause">暂停·PAUSE</div>
                        </div>

                        <div className="module">
                            <h5 className="caption"><a id="源代码" href="#源代码">查看源代码：</a></h5>
                            <div className="content">
                            <pre className="prettyprint normal-text">{`new Particleground.particle( '#demo', {
    // 两粒子圆心点连线的最大距离为90
    distance: 90,
    // 在定位点半径为100内的所有粒子，两粒子圆心点之间满足dis，则连线
    range: 100
});`}</pre>
                            </div>
                        </div>

                        <div className="instance">
                            <div className="demo"></div>
                        </div>

                        <div className="module">
                            <h5 className="caption">
                                <a id="源代码2" href="#源代码2">查看源代码：</a>
                            </h5>
                            <div className="content">
                            <pre className="prettyprint normal-text">{`new Particleground.particle( '#demo', {
    // range等于0，表示不连线
    range: 0,
    num: 18,
    maxR: 20,
    maxSpeed: 3
});`}</pre>
                            </div>
                        </div>

                        <div className="module module-api">
                            <h5 className="caption"><a id="参数" href="#参数">API参数配置</a></h5>
                            <div className="content">
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
                                        <td>num</td>
                                        <td>.12</td>
                                        <td>number</td>
                                        <td>
                                            粒子个数，默认为容器宽度的0.12倍个。<br/>
                                            传入(0, 1)显示容器宽度相应倍数的个数，<br/>
                                            传入[1, +∞)显示具体个数
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>maxR<sup>1.1.0+</sup></td>
                                        <td>2.4</td>
                                        <td>number</td>
                                        <td>粒子最大半径</td>
                                    </tr>
                                    <tr>
                                        <td>minR<sup>1.1.0+</sup></td>
                                        <td>.6</td>
                                        <td>number</td>
                                        <td>粒子最小半径</td>
                                    </tr>
                                    <tr>
                                        <td>maxSpeed<sup>1.1.0+</sup></td>
                                        <td>1</td>
                                        <td>number</td>
                                        <td>粒子最大运动速度(0, +∞)</td>
                                    </tr>
                                    <tr>
                                        <td>minSpeed<sup>1.1.0+</sup></td>
                                        <td>0</td>
                                        <td>number</td>
                                        <td>粒子最小运动速度(0, +∞)</td>
                                    </tr>
                                    <tr>
                                        <td>distance<sup>1.1.0+</sup></td>
                                        <td>130</td>
                                        <td>number</td>
                                        <td>
                                            粒子两圆心点连线的最大值，
                                            在range范围内的两圆心点距离小于distance，则两粒子之间连线
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>lineWidth</td>
                                        <td>.2</td>
                                        <td>number</td>
                                        <td>线段的宽度</td>
                                    </tr>
                                    <tr>
                                        <td>range</td>
                                        <td>160</td>
                                        <td>number</td>
                                        <td>
                                            定位点内连线的范围，以半径计算，范围越大连线越多，当range等于0时，不连线，相关值无效。<br/>
                                            (定位点：即鼠标移动到画布时的鼠标点，一开始默认生成一点)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>eventElem</td>
                                        <td>null</td>
                                        <td>null 或 element</td>
                                        <td>
                                            改变定位点坐标的事件元素，null表示canvas画布，或传入原生元素对象，如document等
                                        </td>
                                    </tr>
                                    <tr className="api-del">
                                        <td><del>max</del><sup>1.1.0-</sup></td>
                                        <td><del>2.4</del></td>
                                        <td><del>number</del></td>
                                        <td><del>粒子最大半径</del></td>
                                    </tr><tr className="api-del">
                                        <td><del>min</del><sup>1.1.0-</sup></td>
                                        <td><del>.6</del></td>
                                        <td><del>number</del></td>
                                        <td><del>粒子最小半径</del></td>
                                    </tr>
                                    <tr className="api-del">
                                        <td><del>speed</del><sup>1.1.0-</sup></td>
                                        <td><del>1</del></td>
                                        <td><del>number</del></td>
                                        <td><del>粒子运动速度</del></td>
                                    </tr>
                                    <tr className="api-del">
                                        <td><del>dis</del><sup>1.1.0-</sup></td>
                                        <td><del>130</del></td>
                                        <td><del>number</del></td>
                                        <td>
                                            <del>
                                                粒子两圆心点连线的最大值，
                                                在range范围内的两圆心点距离小于dis，则两粒子之间连线
                                            </del>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="module module-api">
                            <h5 className="caption">
                                <a id="小提示" href="#小提示">
                                    <small>小提示：</small>
                                </a>
                            </h5>
                            <div className="text-indent">
                                好像少了3个配置API，和开启、暂停2个方法？
                                <a className="dotted-line" href="/examples/quick-getting#默认配置参数">
                                    是的，省略的3个API说明请点击这里，
                                </a>
                                <a className="dotted-line" href="/examples/quick-getting#进阶">
                                    省略的2个方法说明请点击这里。
                                </a>
                            </div>
                        </div>
                    </div>

                    <Comment></Comment>
                </div>
            </div>
        )
    }
}