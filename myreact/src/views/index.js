import React, { Component } from "react";
import {Link} from "react-router-dom";
// 引用同级css文件
import "../css/index.css";
import "whatwg-fetch";
class index extends Component {
    constructor() {
        super();
        this.state = {
            aside: "none",
            bottomPage: "none",
            musicData: [
                {src: "../musicData/CG - 文爱.mp3"}
            ],
            playStatus: true
        };
        this.arrive = this.arrive.bind(this);
        this.showDown = this.showDown.bind(this);
        this.menuShow = this.menuShow.bind(this);
        this.down = this.down.bind(this);
        this.btnPlay = this.btnPlay.bind(this);
    }

    componentWillMount() {
        var that = this;
        fetch("music.json")
            .then(function (resp) {
                return resp.json();
            })
            .then(function (json) {
                that.setState({musicData: json});
                console.log(json)
            })
            .catch(function (e) {
                console.log(e);
            });
    }

    arrive() {
        let that = this;
        that.setState({
            aside: "none",
            fade: "all 3s linear"
        });
    }

    menuShow() {
        let that = this;
        that.setState({
            aside: "block"
        });
    }

    down() {
        let that = this;
        that.setState({
            bottomPage: "none"
        });
    }

    showDown() {
        let that = this;
        that.setState({
            bottomPage: "block"
        });
    }

    btnPlay() {
        var that = this;
        that.setState({playStatus: false});
    }

;
    render() {
        console.log(this.state.musicData);
        console.log(this.state.playStatus);
        return <div className="indexBox">
            <div className="aside" ref="aside" style={{ display: this.state.aside, transition: this.state.fade }}>
                <div className="logo"/>
                <div className="aboutHelp">
                    <ul>
                        <li><Link to="/aboutUs">关于我们</Link></li>
                        <li><Link to="/help">使用帮助</Link></li>
                        <li><Link to="/discovery">发现中心</Link></li>
                        <li><Link to="/takiling">意见反馈</Link></li>
                    </ul>
                    <img src={require("../images/aside/划入箭头@2x.png")} onClick={this.arrive}/>
                </div>
                <div className="Pattern">
                    <div>
                        <img src={require("../images/aside/夜间模式@2x.png")}/>

                        <p>夜间模式</p>
                    </div>
                    <div>
                        <img src={require("../images/aside/设置@2x.png")}/>

                        <p>我的设置</p>
                    </div>
                    <div>
                        <Link to="/clockUs">
                            <img src={require("../images/aside/闹钟@2x.png")}/>
                            <p>闹钟设定</p>
                        </Link>
                    </div>
                    <div className="patternPic">

                    </div>
                </div>
            </div>
            <div className="choose">
                <div className="Menu" onClick={this.menuShow}/>
                <div className="leftPic"/>
                <div className="middlePic"/>
                <div className="rightPic"/>
                <div className="Share"/>
            </div>
            <div className="playbox">
                <div className="play" onClick={this.btnPlay}/>
            </div>
            <div className="randomPlay">
                <div className="debugging"/>
                <div className="Plays"/>
            </div>
            <div className="Album">
                <div className="leftTitle"/>
            </div>
            <div className="chooseRain">
                <ul>
                    <li>
                        <span>雨打芭蕉</span>
                    </li>
                    <li>
                        <span>隐隐春雷</span>
                    </li>
                    <li>
                        <span>雨落无言</span>
                    </li>
                    <li>
                        <span>秋雨凄凄</span>
                    </li>
                    <li>
                        <span>夏雨倾盆</span>
                    </li>
                    <li>
                        <span>春雨无声</span>
                    </li>
                    <li>
                        <span>夏雷阵阵</span>
                    </li>
                    <li>
                        <span>为你撑伞</span>
                    </li>
                    <li>
                        <span>平地惊雷</span>
                    </li>
                    <li>
                        <span>雷鸣雨落</span>
                    </li>
                    <li>
                        <span>雨落叶响</span>
                    </li>
                    <li>
                        <span>海潮拍岸</span>
                    </li>
                </ul>
            </div>
            <div className="otherBottom">
                <img src={require("../images/homePage/加号弹窗@2x.png")} onClick={this.showDown}/>
            </div>
            <div className="bottomPage" ref="bottomPage" style={{ display: this.state.bottomPage }}>
                <ul>
                    <li><Link to="/shareGroup"><p></p></Link></li>
                    <li></li>
                    <li><Link to="/personal"><p></p></Link></li>
                    <li></li>
                    <li><Link to="/personal"><p></p></Link></li>
                    <li><Link to="/personal"><p></p></Link></li>
                    <li></li>
                    <li><Link to="/around"><p></p></Link></li>
                    <li>
                        <img src={require("../images/bottom/下滑关闭@2x.png")} onClick={this.down}/>
                    </li>
                </ul>
            </div>
        </div>;
    }
}

export default index;
