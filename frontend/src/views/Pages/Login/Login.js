import React, { Component } from 'react'
import { Row, Col, Input, Card } from 'antd'
export default class Login extends Component {
    render() {
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title="Card title" bordered={false} style={{ width: '50%' }}>
                    <Row>
                        <Col offset={8} span={8}>
                            <Input 
                            placeholder="insert your email"
                            />
                        </Col>
                        <Col offset={8} span={8}>
                            <Input 
                            placeholder="insert your password"
                            />
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}
