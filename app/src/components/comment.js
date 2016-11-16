import React, { Component } from 'react';
import $ from 'jquery';

export default class Intro extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $('.comments').html(`
            <div class="ds-thread"
                 data-thread-key=${ location.hash }
                 data-title=${ document.title }
                 data-url=${ location.href }>
            </div>
        `);
        window.duoshuoQuery = {short_name:"particleground"};
        const ds = document.createElement('script');
        ds.type = 'text/javascript';ds.async = true;
        ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('head')[0]
        || document.getElementsByTagName('body')[0]).appendChild(ds);
    }

    render() {
        return (
            <div className="comments"></div>
        )
    }
}