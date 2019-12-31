import React, { Component } from 'react';
import {MainWrap} from './mainstyled'
class Main extends Component {
    render() {
        return (
            <MainWrap>
               <div className='ifnot'>
                   <h4>If not now, when? </h4>
                   <h4>If not me, who?</h4>
                   <p>此时此刻，非我莫属！</p>
                   
                   <div className="searchbox">
                       <div className="opacity"></div>
                       <div className="search">
                            <div className="inputbox">
                                <input type='text' placeholder="请输入职位关键词"></input>
                            </div>
                            <span>搜索</span>
                       </div>                     
                     
                   </div>
                   <ul>
                       <li>热门搜索：</li>
                       <li>JAVA</li>
                       <li>IOS</li>
                       <li>数据</li>
                       <li>安全</li>
                       <li>搜索</li>
                       <li>算法</li>
                       <li>运营</li>
                       <li>视觉</li>
                       <li>交互</li>
                       <li>前端</li>
                   </ul>
               </div>
               <img src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png"  alt=""></img>
            </MainWrap>
        );
    }
}

export default Main;