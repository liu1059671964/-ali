import React, { Component } from 'react';
import {HeaderWrap} from './headerStyled'

class Header extends Component {
    render() {
        return (
            <HeaderWrap>
                <div className='container'>
                    <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" height="20" alt=""></img>
                    <i></i>
                    <span>社招官网</span>
                    <ul>
                        <li>首&nbsp;&nbsp;&nbsp;&nbsp;页</li>
                        <li>社会招聘</li>
                        <li>校园招聘</li>
                        <li>了解阿里</li>
                        <li>个人中心</li>
                    </ul>
                    <div className="login">
                        <p>欢迎来到阿里巴巴集团招聘！</p>
                        <p>登陆</p>
                        <h4>|</h4>
                        <p>注册</p>
                    </div>
                </div>
                
            </HeaderWrap>
        );
    }
}

export default Header;