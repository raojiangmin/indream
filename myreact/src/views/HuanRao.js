import React, { Component } from 'react';
import u791 from '../images/u791.png'
import Shang from '../complate/center/Shang'
import Xia from '../complate/center/Xia'
import Zuo from '../complate/center/Zuo'
import You from '../complate/center/You'
import '../css/huanrao.css'
import {Link} from 'react-router-dom'
class HuanRao extends Component {
    render() {
        return (
            <div>
                <div className="HuanP">
                    <p>3D音效</p>
                </div>
                <div className="HuanImg">
                    <Shang></Shang>
                    <Xia></Xia>
                    <Zuo></Zuo>
                    <You></You>
                </div>
                <div className="HuanPp">
                    <p>点击图标选不同的3D音效</p>

                    <p>请配带耳机体验专为睡眠放松研发的3D立体音效</p>
                </div>

                <div className="divImg">
                    <Link to='/index'>
                        <img src={u791} alt=""/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HuanRao;

