import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Surround from '../complate/surround/Surround'

import u127 from '../../src/images/u127.png'

import '../css/Discovery.css'

class Discovery extends Component {


    render() {
        return (
            <div>
                <div className="HuanImg1">
                    <Link to="/index">
                        <img src={u127} className="logo2" alt=""/>
                    </Link>
                    <p>发现中心</p>
                </div>
                <Surround></Surround>
            </div>
        );
    }
}

export default Discovery;