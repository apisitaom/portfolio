import React, { Component } from 'react'
import { Row, Col, Button, Tag, Input } from 'antd'
const { TextArea } = Input;
export default class ResumeFrom extends Component {
    render() {
        return (
            <div>
                <Row>
                <h1>REMUME</h1>
                    <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                        <Tag color="cyan">Professional info</Tag>
                        <TextArea 
                        placeholder="Professional info"
                        />
                        <Tag color="cyan">Work​ experience</Tag>
                        <TextArea 
                        placeholder="Work​ experience​"
                        />
                        <Tag color="cyan">Education</Tag>
                        <TextArea 
                        placeholder="Education"
                        />
                        <Tag color="cyan">Activity</Tag>
                        <TextArea 
                        placeholder="Activity"
                        />
                        <Button type="primary">
                            Edit Resume
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
