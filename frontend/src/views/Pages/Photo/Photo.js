import React, { Component } from 'react'
import { Result } from 'antd';
import TabFrom from '../../../froms/nav/TabFrom' 
export default class Photo extends Component {
    render() {
        return (
            <div>
                <TabFrom />
                <Result
                  status="403"
                  title="photo doesn't have"
                />
            </div>
        )
    }
}
