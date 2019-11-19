import React, { Component } from 'react'
import { Row, Col, Button, Tag, Input } from 'antd'
const { TextArea } = Input
export default class SkillFrom extends Component {
    render() {
        return (
            <div>
                <Row>
                <h1>SKILLS</h1>
                    <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                        <Tag color="cyan">Skills</Tag>
                        <TextArea 
                        placeholder="skill"
                        />
                        <Button type="primary">
                            Edit Skill
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
