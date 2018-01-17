import React, { Component } from 'react';
import u127 from '../images/u127.png'
import u128 from '../images/u128.png'
import '../css/aboutus.css'
import {Link} from 'react-router-dom'
class Aboutus extends Component {
    render() {
        return (
            <div className="aboutUs">
                <div>
                    <Link to='/index'>
                      <img src={u127} className="logo1" alt=""/>
                    </Link>
                </div>
                <div className="aboutUsDiv">
                    <h1>探索声音之美</h1>
                    <p>概念性的睡眠辅助应用<br/>
                    专业催眠<br/>
                    与色彩心理的交融<br/>
                    帮你阻挡世界的嘈杂<br/>
                    营造完美氛围<br/>
                    不仅于此，<br/>
                    入梦出色的背景音乐<br/>
                    同样有助于创作.<br/>
                    工作.学习.冥想</p>
                </div>
                <div className="aboutUsDiv1">
                    <p><span>官方网站</span> | <span>服务协议</span></p>
                </div>
            </div>
        );
    }
}

export default Aboutus;