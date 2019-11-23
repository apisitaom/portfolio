import React, { Component } from 'react'
import { Row, Col, Table, Tag } from 'antd'
import moment from 'moment'
export default class CommentTableForm extends Component {
    render() {
        const columns = [
            {
                width:'15%',
                title: 'ลำดับ',
                dataIndex: 'commentid',
                key: 'commentid',
                render: text => {
                    return (
                        <Tag color="geekblue">
                            {text}
                        </Tag>
                    )
                }                
            },
            {   width:'15%',
                title: 'วันที่เเสดงความคิดเห็น',
                dataIndex: 'createdate',
                key: 'createdate',
                render: text => {
                    return (
                        <Tag color="#108ee9">
                            {<span>{moment(text).format('lll')}</span>}
                        </Tag>
                    )
                } 
            },
            {
                title: 'ความคิดเห็น',
                dataIndex: 'comment',
                key: 'comment',
                render: text => {
                    return (
                        <Tag color="#108ee9">
                            {text}
                        </Tag>
                    )
                }
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
