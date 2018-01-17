import React,{Component} from 'react'
import {Link} from "react-router-dom";
import '../css/takiling.css'
class takiling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: ''
        };
        this._onChange = this._onChange.bind(this);
        this.sub = this.sub.bind(this);
        this.showOperationSheet = this.showOperationSheet.bind(this);
    }

    sub() {
        alert('提交成功')
    }

    _onChange() {
        console.log(this.refs.uploadFile.value);
        var that = this;
        that.setState({
            imgSrc: this.refs.uploadFile.value
        })
    }

    showOperationSheet() {
        console.log('点击上传');
        console.log(this.refs);
        if (this.refs) {
            console.log('进入判断');
            console.log(this.refs);
            this.refs.uploadFile.click()
        }
    }

;
    render() {
        return (
            <div className='takilingDiv'>
                <form action="" encType="multipart/form-data">
                    <div className='takiling'>
                        <Link to='/index'>
                            <button type='button'>取消</button>
                        </Link>
                        <p className='takilingP'>意见反馈</p>
                        <button type='reset' onClick={this.sub}>提交</button>
                    </div>
                    <p className='request'>提供任意联系方式一边为您解决问题(非必填)</p>
                    <input type="text" placeholder='QQ'/>
                    <input type="text" placeholder='手机'/>
                    <input type="text" placeholder='邮箱'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='意见反馈，请至少输入10个字，最多输入500字'></textarea>
                    <img src={require('../images/takiling/reg.png')} alt="" className='uploadButton'
                         onClick={this.showOperationSheet}/>

                    <p className='request1'>您至多可以添加三张图片</p>
                    <input type="file" style={{display:'none'}} name='uploadFile' ref='uploadFile'
                           onChange={this._onChange}/>
                    <img src={this.state.imgSrc}/>
                </form>

            </div>

        );
    }
}
export default takiling