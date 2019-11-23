import React, { Component } from 'react'
import { Row, Col } from 'antd'
import TabFrom from '../../../../froms/nav/TabFrom'
export default class CommentLists extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <TabFrom />
                    </Col>
                </Row>
                <h1>CommentLists</h1>
            </div>
        )
    }
}
