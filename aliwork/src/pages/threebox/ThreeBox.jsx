import React, { Component } from 'react';
import {ThreeBoxWrap} from './boxstyled'
import List from '../../components/List/List'
class ThreeBox extends Component {
    render() {
        return (
            <ThreeBoxWrap>
                <List></List>
                <div className="img">
                  <dl className="top">
                      <img src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt=""/>
                  </dl>
                    <dl>
                        <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt=""/>
                    </dl>
                </div>
                
            </ThreeBoxWrap>
        );
    }
}

export default ThreeBox;