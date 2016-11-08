import { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import './public/less/build.less';

const rootRoutes = {
    path: '/',
    indexRoute: {
        onEnter(nextState, replace, callback) {
            callback();
        },
        getComponent(ns, cb) {
            require.ensure([], () => {
                cb(null, require('../routes/index'));
            }, 'index');
        }
    },
    getComponent(ns, cb){
        cb(null, require('./components/layout'));
    },
    getChildRoutes(ns, cb){
        require.ensure([], () => {
            cb(null, [
                {
                    path: 'changelog',
                    getComponent(ns, cb) {
                        require.ensure([], () => {
                            cb(null, require('./routes/changelog'));
                        }, 'changelog');
                    }
                },
                {
                    path: 'examples/:instance',
                    getChildRoutes(ns, cb) {

                    }
                }
            ]);
        }, 'children');
    }
};

render(
    <Router history={hashHistory} routes={rootRoutes}/>,
    document.getElementById('app')
);