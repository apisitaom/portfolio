import React, { Component } from 'react'
import { Row, Col, Table } from 'antd'
export default class CommentTableForm extends Component {
    render() {
        const columns = [
            {
                width:'15%',
                title: 'ลำดับ',
                dataIndex: 'key',
                key: 'key',
                render: (text, record, index) => (
                    <span key={index}>
                        {index + 1}
                    </span>
                )
            },
            {
                title: 'ความคิดเห็น',
                dataIndex: 'comment',
                key: 'comment',
            }
        ]
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <h1>COMMENT LISTS</h1>
                    </Col>
                    <Col>
                        <Table 
                        columns={columns}
                        dataSource={this.props.dataSorce}
                        rowKey={(row, index)=> index}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
