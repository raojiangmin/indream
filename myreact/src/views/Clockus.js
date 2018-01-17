import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ClockTu from '../complate/clock/ClockTu'

import u128 from '../images/u128.png'
import u127 from '../images/u127.png'

import  '../css/clockus.css'


class Clockus extends Component {
    render() {
        return (
            <div className="clockDiv">
                <div className="clockH">
                    <Link to='/index'>
                        <img src={u127} className="logo3" alt=""/>
                    </Link>
                    <h1>设置闹钟</h1>
                    <span>闹钟异常？</span>
                </div>
                <div className="clockYr">
                    <hr/>
                    <span>一键入梦</span>
                    <hr/>
                </div>
                <ClockTu></ClockTu>
            </div>
        );
    }
}

export default Clockus;
