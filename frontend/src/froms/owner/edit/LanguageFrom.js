import React, { Component } from 'react'
import { Row, Col, Button, Tag, Input } from 'antd'
const { TextArea } = Input
export default class LanguageFrom extends Component {
    render() {
        return (
            <div>
                <Row>
                <h1>LANGUAGE</h1>
                    <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                        <Tag color="cyan">Language</Tag>
                        <TextArea 
                        placeholder="language"
                        />
                        <Button type="primary">
                            Edit Language
                        </Button>
                    </Col> 
                </Row>
            </div>  
        )
    }
}