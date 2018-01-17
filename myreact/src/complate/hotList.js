import React,{Component} from 'react'
import '../css/hotList.css'
import 'whatwg-fetch'
class hotList extends Component {
    constructor(){
        super();
        this.state={
            data:[
                {
                    "img":"../images/hotOrder/tree1.png",
                    "name":"林中鸟语",
                    "num":14966
                },
                {
                    "img":"images/hotOrder/tree2.png",
                    "name":"海鸥掠影",
                    "num":14870
                },
                {
                    "img":"images/hotOrder/tree3.png",
                    "name":"布谷之鸟",
                    "num":14800
                },
                {
                    "img":"images/hotOrder/qingwa.png",
                    "name":"蛙鸣蝉噪",
                    "num":14117
                },
                {
                    "img":"images/hotOrder/sleep.png",
                    "name":"打盹的猫",
                    "num":14023
                },
                {
                    "img":"images/hotOrder/naizhui.png",
                    "name":"婴儿安抚",
                    "num":13458
                },
                {
                    "img":"images/hotOrder/car.png",
                    "name":"摇篮小曲",
                    "num":13321
                },
                {
                    "img":"images/hotOrder/reg.png",
                    "name":"半岛铁盒",
                    "num":13211
                },
                {
                    "img":"images/hotOrder/fly.png",
                    "name":"凌云翱翔",
                    "num":12987
                },
                {
                    "img":"images/hotOrder/see.png",
                    "name":"海潮拍岸",
                    "num":12566
                }
            ]
        };
    }
    //componentWillMount(){
    //    var that = this;
    //    fetch('order.json').then( (response) => {
    //        console.log(response);
    //        return response.json();
    //    }).then((json)=>{
    //        that.setState({
    //            data:json
    //        });
    //    }).catch((ex)=>{
    //        console.log(ex);
    //    })
    //}
    render() {
        let order = this.state.data.map(function(i,index){
            if(index===0){
                return (
                    <div key={index} className='two'>
                        <img src={require('../images/hotOrder/order'+(index+1)+'.png')} alt=""/>
                        <img src={i.img} alt=""/>
                        <p>{i.name}</p>
                        {i.num}
                    </div>
                );
            }else if(index===1){
                return (
                    <div key={index} className='one'>
                        <img src={require('../images/hotOrder/order'+0+'.png')} alt=""/>
                        <img src={i.img} alt=""/>
                        <p>{i.name}</p>
                        {i.num}
                    </div>
                );
            }else if(index===2){
                return (
                    <div key={index} className='three'>
                        <img src={require('../images/hotOrder/order'+index+'.png')} alt=""/>
                        <img src={i.img} alt=""/><br/>
                        <p>{i.name}</p>
                        {i.num}
                    </div>
                );
            }
        });
        let orderList =this.state.data.map(function(i,index){
            if(index>2){
                return (
                    <div className='hot' key={index}>
                        {index+1}
                        <img src={i.img} alt=""/>
                        {i.name}
                        <div>
                            <img src={require('../images/hotOrder/ting.png')} alt=""/>
                            {i.num}
                        </div>
                    </div>
                )
            }
        });
        return (
            <div>
                <div className='hotDiv'>
                    {order}
                </div>
                <div className='total'>
                    <img src={require('../images/hotOrder/total.png')} alt=""/>
                </div>
                <div className='hotListDiv'>
                    {orderList}
                </div>
            </div>
        );
    }
}
export default hotList;