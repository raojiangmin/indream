import React, { Component } from 'react';

import 'whatwg-fetch'

import  '../../css/clockTu.css'

class ClockTu extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentWillMount(){
        var that = this;
        fetch('clock.json').then(function(respons){
            return respons.json();
        }).then(function(json){
           that.setState({
               data:json
           })
            console.log(json)
        }).catch(function(e){
            console.log(e)
        })
    }
    render() {
        let clock = this.state.data.map((i,index)=>{
            return (
                <div key={index}>
                    <div className="clockDivd">
                        <div className="clockTuDiv">
                            <img src={i.img} className="clockImg" alt=""/>
                            <h3>{i.name}</h3>
                            <p>{i.namep}</p>
                        </div>
                    </div>
                </div>
            );
        })
        return (
                <div>
                    {clock}
                </div>
        )
    }
}

export default ClockTu;

