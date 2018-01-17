import React, { Component } from 'react';

import '../../css/surround.css'

import 'whatwg-fetch'

class Surround extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentWillMount(){
        var that = this;
        fetch('surround.json').then(function(respons){
            return respons.json();
        }).then(function(json){
            that.setState({
                data:json
            });
            console.log(json)
        }).catch(function(e){
            console.log(e)
        })
    }
    render() {
        let surround = this.state.data.map((i,index)=>{
            return (
                <div key={index}>
                    <div className="surroundImg">
                        <img src={i.img} alt=""/>
                    </div>
                </div>
            );
        })
        return (
            <div>
                {surround}
            </div>
        );
    }
}

export default Surround;


