import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import $ from 'jquery';
import examplesData from '../data/examples';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    changeActive($active) {
        this.slideNavElems.$nav.find('>.active').removeClass('active');
        $active.addClass('active');
        this.setSlideblock( $active );
    }

    setSlideblock($active) {
        if( !window.isMobile && $active.length ){
            const left = $active.position().left + parseInt($active.css('paddingLeft'));
            this.slideNavElems.$slideblock
                .css({
                    width: $active.width(),
                    transform: 'translate('+ left +'px,0)'
                })
                .addClass('animation').removeClass('hidden');
        }
    }

    slideNav() {
        const self = this;
        const $nav = $('.com-header .nav');
        const $slideblock = $nav.find('.slideblock');
        let $active = $nav.find('>.active');

        this.slideNavElems = {
            $nav,
            $slideblock
        };

        this.setSlideblock($active);

        $(window).on('hashchange.slideNav', () => {
            $active = $nav.find('>.active');
            this.setSlideblock($active);
        });

        $nav.find('a').hover(function() {
            self.changeActive($(this));
        }, () => {
            this.changeActive($active);
        });
    }

    componentDidMount() {
        $(window)
            .on('resize.decideMobile', () => {
                window.isMobile = $('.mobile-menu').css('display') === 'block';
            })
            .trigger('resize.decideMobile');

        this.slideNav();
    }

    render() {
        return (
            <header className="com-header pr">
                <div className="com-width">
                    <div className="mobile-menu">
                        <i className="icon icon-menu"></i>
                        菜单
                    </div>
                    <div className="logo">
                        <Link to="/">Particleground.js</Link>
                    </div>
                    <nav className="nav pr">
                        <IndexLink to="/" activeClassName="active">
                            首页
                        </IndexLink>
                        <Link to="examples/particle" activeClassName="active">
                            实例及API
                        </Link>
                        <a href="https://github.com/Barrior/Particleground.js" target="_blank">
                            Github
                        </a>
                        <a href="http://shang.qq.com/wpa/qunwpa?idkey=f548e3f94e0040a2ac5adfe4fec6915ef67c8c1b6ba5784ff6d5049c6135a759"
                           title="172839150" target="_blank">
                            QQ群
                        </a>
                        <Link to="changelog" activeClassName="active"
                              title="路漫漫其修远兮吾将上下而求索">
                            更新日志
                        </Link>
                        <div className="slideblock pa hidden"></div>

                        <aside className="example-menu">
                            <div className="divider"></div>
                            {
                                examplesData.intro.concat(examplesData.instances)
                                    .map(instance => {
                                        return <Link to={`examples/${instance.name}`}
                                                     activeClassName="active"
                                                     key={instance.name}>
                                            {instance.title}
                                        </Link>
                                    })
                            }
                        </aside>
                    </nav>
                </div>
            </header>
        )
    }
}