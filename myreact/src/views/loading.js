import React,{Component} from 'react'
import '../css/loading.css'
import Index from  './index.js'
import {Link} from 'react-router-dom'
class loading extends Component {
    render() {
        return (
            <div className='bgDiv'>
                <div className='circleDiv'>
                    <img src={require('../images/loading/red.png')} className='circle' alt=''/>
                    <img src={require('../images/loading/fengling.png')} className='circle' alt=''/>
                    <img src={require('../images/loading/hanfeng.png')} className='circle' alt=''/>
                </div>
                <div className='centerDiv'>
                    <p className='sleep'>安逸的睡眠即将开始</p>
                    <p className='start'>开始</p>
                </div>

                <div className='joinHome'>
                    <Link to='/index'>
                        <span>进入首页</span>
                        <img src={require('../images/loading/rightArrive.png')} alt=""/>
                    </Link>
                    </div>
            </div>
        );
    }
}
export default loading