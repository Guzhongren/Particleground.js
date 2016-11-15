import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="com-body">
                    {
                        this.props.children
                    }
                </div>
                <Footer/>
            </div>
        )
    }
}