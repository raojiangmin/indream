import React, { Component } from 'react';

import '../css/help.css'
class Help extends Component {

    render() {
        return (
            <div className="helpDiv">
                <div className="helpHr">
                    <hr/>
                    <h1>使用帮助</h1>
                    <hr/>
                </div>
                <div className="helpP">
                    <p>网络出故障了？</p>
                    <p>新手引导</p>
                    <p>完整使用说明</p>
                </div>


            </div>
        );
    }
}

export default Help;