import React,{Component} from 'react'
import '../css/shareGroup.css'
import {Link} from 'react-router-dom'
class shareGroup extends Component {
    render() {
        return (
            <div className='shareGroupDiv'>
                <Link to="/index">
                    <div className='close'>
                        <img src={require('../images/shareGroup/close.png')}  alt=""/>
                    </div>
                </Link>
                <div className='clickMe'>
                    <img src={require('../images/shareGroup/clickMe.png')} alt=""/>
                </div>
                <div className='share'>
                    <img src={require('../images/shareGroup/wenxin.png')} alt=""/>
                    <img src={require('../images/shareGroup/QQ.png')} alt=""/>
                    <img src={require('../images/shareGroup/weibo.png')} alt=""/>
                    <img src={require('../images/shareGroup/friendCirle.png')} alt=""/>
                </div>
            </div>
        );
    }
}
export default shareGroup;