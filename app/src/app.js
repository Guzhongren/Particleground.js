import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import './public/sass/build.scss';

const rootRoutes = {
    path: '/',
    indexRoute: {
        getComponent(ns, cb) {
            require.ensure([], () => {
                cb(null, require('./routes/index'));
            }, 'index');
        }
    },
    getComponent(ns, cb) {
        cb(null, require('./components/layout'));
    },
    getChildRoutes(ns, cb) {
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
                path: 'examples(/:instance)',
                onEnter(ns) {
                    if(!ns.params.instance){
                        location.hash = '#/examples/intro';
                    }
                },
                getComponent(ns, cb) {
                    let instance = ns.params.instance;
                    require.ensure([], () => {
                        cb(null, require(`./components/examples/${instance}`));
                        /*cb(null, [
                            require('./components/menu'),
                            require(`./components/examples/${instance}`)
                        ]);*/
                    }, 'examples');
                }
            },
            {
                path: '404',
                getComponent(ns, cb) {
                    require.ensure([], () => {
                        cb(null, require('./routes/404'));
                    }, '404');
                }
            }
        ]);
    }
};

render(
    <Router history={hashHistory} routes={rootRoutes}/>,
    document.getElementById('app')
);