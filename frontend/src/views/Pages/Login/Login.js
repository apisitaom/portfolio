import React, { Component } from 'react'
import { Row, Col, Input } from 'antd';
export default class Login extends Component {
    UNSAFE_componentWillMount(){}
    render() {
        return (
            <div>
                <Row>
                    <Col offset={8} span={8} style={{padding: '25px'}}>
                        <Input 
                        placeholder="Insert your email"
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
