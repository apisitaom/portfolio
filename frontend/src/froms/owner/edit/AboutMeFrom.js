import React, { Component } from 'react'
import { Row, Col, Input, Button, Tag } from 'antd'
const { TextArea } = Input;
export default class AboutMeFrom extends Component {
    render() {
        return (
            <div>
                <Row>
                <h1>About Me</h1>
                    <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                    <Tag color="cyan">Abount Me</Tag>
                        <TextArea 
                        placeholder="Abount Me"
                        />
                        <Tag color="cyan">Hobby / Free time</Tag>
                        <TextArea 
                        placeholder="Hobby / Free time"
                        />
                        <Tag color="cyan">Interest</Tag>
                        <TextArea 
                        placeholder="Interest"
                        />
                        <Tag color="cyan">Family</Tag>
                        <TextArea 
                        placeholder="Family"
                        />
                        <Tag color="cyan">Address</Tag>
                        <TextArea 
                        placeholder="Address"
                        />
                        <Button type="primary">
                            Edit About me
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
