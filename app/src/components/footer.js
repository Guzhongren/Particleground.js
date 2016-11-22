import React, { Component } from 'react';
import $ from 'jquery';

export default class Footer extends Component {

    setFooter() {
        if ($('body').height() >
            $('.com-header').outerHeight() +
            $('.com-body').outerHeight() +
            $('.com-footer').outerHeight()) {
            $('.com-footer').css({
                width: '100%',
                position: 'absolute',
                zIndex: 8,
                bottom: 0
            });
        } else {
            $('.com-footer').removeAttr('style');
        }
        $('.com-footer').show();
    }

    componentDidMount() {
        $(window)
            .on('hashchange.footer', () => {
                setTimeout(() => {
                    this.setFooter();
                }, 10);
            })
            .trigger('hashchange.footer');
    }

    render() {
        return (
            <footer className="com-footer">
                <div className="text com-width">
                    <div>
                        Copyright 2016 Barrior
                        &lt;<a href="mailto:Barrior@qq.com">Barrior@qq.com</a>&gt;&nbsp;
                    </div>
                    <div>
                        Licensed under the&nbsp;
                        <a href="http://www.opensource.org/licenses/mit-license.php"
                           target="_blank">
                            MIT&nbsp;
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/Barrior/Particleground.js"
                           target="_blank">
                            开源不易，支持作者，Star 一下
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}