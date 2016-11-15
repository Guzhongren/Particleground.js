import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import './public/sass/build.scss';

const rootRoutes = {
    path: '/',
    indexRoute: {
        onEnter(nextState, replace, callback) {
            callback();
        },
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
                path: 'examples/:instance',
                getComponent(ns, cb) {
                    console.log(':inst', ns)
                    require.ensure([], () => {
                        cb(null, require('./routes/examples'));
                    }, 'examples');
                },
                getChildRoutes(partialNextState, cb) {
                    console.log('000:', partialNextState);
                    let instance = partialNextState.params.instance;
                    console.log('instance', instance)
                    require.ensure([], () => {
                        cb(null, [
                            //require(`./components/examples/${instance}`)
                            require(`./components/examples/intro`)
                        ]);
                    }, 'intro');
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