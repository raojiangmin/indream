import React,{Component} from 'react'
import '../css/collect.css'
class collect extends Component {
    render() {
        return (
            <div className='collect'>
                <img src={require('../images/collect/play.png')} alt=""/>
            </div>
        );
    }
}
export default collect;