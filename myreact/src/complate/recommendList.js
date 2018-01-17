import React,{Component} from 'react'
import 'whatwg-fetch'
import '../css/recommendList.css'
class recommendList extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            autoPlay:true
        };
        this.play = this.play.bind(this);
    }
    play(){

    }

    render() {
        console.log(this.state.autoPlay);
        return (
            <div>
                <div>
                    <audio autoPlay>
                        <source src={require('../music/CG - 文爱.mp3')} />
                    </audio>
                </div>
                <div className='recommendList'>
                    <div className='recommend'>
                        <img src={require('../images/tuijian/play.png')} onClick={this.play} alt=""/>
                        <img src={require('../images/tuijian/icon@2x.png')} alt=""/>
                        <img src={require('../images/tuijian/erji@2x.png')} alt=""/>
                        <img src={require('../images/tuijian/yellowCollect.png')} alt=""/>
                    </div>
                </div>
                <div className='recommendList2'>
                    <div className='recommend'>
                        <img src={require('../images/tuijian/play.png')} onClick={this.play} alt=""/>
                        <img src={require('../images/tuijian/icon@2x.png')} alt=""/>
                        <img src={require('../images/tuijian/erji@2x.png')} alt=""/>
                        <img src={require('../images/tuijian/yellowCollect.png')} alt=""/>

                    </div>
                </div>
                <div className='recommendList3'>
                    <div className='recommend'>

                        <img src={require('../images/tuijian/play.png')} alt=""/>
                        <img src={require('../images/tuijian/icon@2x.png')} alt=""/>
                        <img src={require('../images/tuijian/erji@2x.png')} alt=""/>
                        <img src={require('../images/tuijian/yellowCollect.png')} alt=""/>

                    </div>
                </div>
                <div className='recommendList4'>
                    <div className='recommend'>

                        <img src={require('../images/tuijian/play.png')} alt=""/>
                        <img src={require('../images/tuijian/icon@2x.png')} alt=""/>
                        <img src={require('../images/tuijian/erji@2x.png')} alt=""/>
                        <img src={require('../images/tuijian/yellowCollect.png')} alt=""/>

                    </div>
                </div>
                <div className='recommendList5'>
                    <div className='recommend'>
                        <img src={require('../images/tuijian/play.png')} alt=""/>
                        <img src={require('../images/tuijian/icon@2x.png')} alt=""/>
                        <img src={require('../images/tuijian/erji@2x.png')} alt=""/>
                        <img src={require('../images/tuijian/yellowCollect.png')} alt=""/>
                    </div>
                </div>
            </div>

        );
    }
}
export default recommendList;