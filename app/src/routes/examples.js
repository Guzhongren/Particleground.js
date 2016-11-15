import React, { Component } from 'react';
import { Link, IndexLink, Router } from 'react-router';
import $ from 'jquery';
import pjs from 'pjs';
import examplesData from '../data/examples';

export default class Examples extends Component {

    static contextTypes = {
        router: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        $('body').attr('id', 'page-example');
    }

    componentWillUnmount() {
        $('body').removeAttr('id');
    }

    render() {
        this.pageID = this.context.router.params.instance;

        return (
            <div className="cf">
                <aside className="menu fl pr">
                    {
                        examplesData.intro.map(item => {
                            return <h5 className="pr" key={item.name}>
                                <Link to={`/examples/${item.name}`}
                                    activeClassName="active">
                                    {item.title}
                                </Link>
                            </h5>
                        })
                    }
                    <h5>实例及API</h5>
                    <ul className="list-unstyled">
                        {
                            examplesData.instances.map(item => {
                                let className = item.name === this.pageID ? 'active' : '';
                                return <li className={className} key={item.name}>
                                    <Link to={`/examples/${item.name}`}>{item.title}</Link>
                                </li>
                            })
                        }
                    </ul>
                </aside>
                {
                    /*console.log(this.props),
                    require(`../components/examples/${this.pageID}`)*/
                }
                {
                    this.props.children
                }
            </div>
        )
    }
}