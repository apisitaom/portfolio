import React, { Component } from 'react'
import { Row, Col, Button, Tag, Input } from 'antd'
export default class SkillFrom extends Component {
    render() {
        return (
            <div>
                <Row>
                <h1>SKILLS</h1>
                    <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                        <Tag color="cyan">Skills</Tag>
                        <Input 
                        placeholder="skill"
                        />
                        <Button type="primary">
                            Add Skill
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
