import React, { Component } from 'react';
import $ from 'jquery';
import pjs from 'pjs';

export default class Index extends Component {

    componentWillMount() {
        $('body').addClass('overflow-hidden').attr('id', 'page-index');
    }

    componentDidMount() {
        let settings = {
            eventElem: document
        };
        if( window.isMobile ){
            settings.opacity = .6;
            settings.distance = 60;
            settings.range = 200;
            settings.maxR = 4;
            settings.num = .14;
            settings.maxSpeed = .6;
        }
        new pjs.particle( '.bg', settings );
    }

    componentWillUnmount() {
        $('body').removeClass('overflow-hidden').removeAttr('id');
    }

    render() {
        return (
            <div>
                <section className="bg"></section>
                <section className="profile">
                    <div className="title">Particleground.js</div>
                    <div className="describe">
                        一个简洁，高效，轻量级的canvas粒子运动特效插件库。
                        <a className="readmore" href="#/examples/preface">了解更多</a>
                    </div>
                    <div className="usage">
                        <a className="btn btn-success pr" href="#/examples/quick-getting">
                            <span className="pa">立即使用</span>
                        </a>
                    </div>
                </section>
            </div>
        )
    }
}