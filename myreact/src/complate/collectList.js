import React,{Component} from 'react'
import '../css/collect.css'
//import Collect from './collect.js';
class collectList extends Component {
    render() {
        return (
                    <div>
                        <div className='collect'>
                            <img src={require('../images/collect/play.png')} alt=""/>
                        </div>
                        <div className='collect2'>
                            <img src={require('../images/collect/play.png')} alt=""/>
                        </div>
                        <div className='collect3'>
                            <img src={require('../images/collect/play.png')} alt=""/>
                        </div>
                    </div>

        );
    }
}
export default collectList