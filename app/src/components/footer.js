import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="com-footer">
                <div className="text">
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