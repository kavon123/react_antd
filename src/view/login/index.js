



import React, { Component } from 'react';
import { Button } from 'antd';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.contal = React.createRef();
    }
    
    render() {
        return (
            <div>
                <h1>longin</h1>
                <input type='text' ref={this.contal}></input>
                <Button type="primary" onClick={this.show}>点击我提示数据</Button>
            </div>
        )
    }
    show = () => {
       console.log(this.contal.current.value)
    }
}