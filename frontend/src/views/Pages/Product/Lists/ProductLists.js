import React, { Component } from 'react'
import TabFrom from '../../../../froms/nav/TabFrom'
import { Row, Col, Table, Button, Tag, message } from 'antd'
import moment from 'moment'
import { albumDeleted, albumAll } from '../../../../services/api'
export default class ProductLists extends Component {
    state={
        albums: []
    }
    UNSAFE_componentWillMount () {
        this.onGetAlbum();
    }
    onGetAlbum = async () => {
        const resp = await albumAll();
        resp.code === 200 && this.setState({
            albums: resp.data
        })
    }
    onhandleDelete = async (id) => {
        const resp = await albumDeleted(id);         
        if (resp.code === 200) {
            message.success(`Deleted is Success`);
            window.location.assign('#product/lists');
        } else {
            message.error(`failed, Please try again.`);
        }
        
    }
    render() {
        const columns = [
            {
                width:'20%',
                title: 'PRODUCT NAME',
                dataIndex: 'name',
                key: 'name',             
            },
            {   width:'30%',
                title: 'DATE',
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
                key: "action",
                title: "Action",
                width: "65%",
                align: "center",
                render: (text, record) => (
                  <span>
                    <Button
                      type="danger"
                      className="button-danger"
                      onClick={() => this.onhandleDelete(text.albumid)}
                    >
                      REMOVE
                    </Button>
                  </span>
                )
              }
        ]
        return (
            <div>
                <Row>
                    <Col>
                        <TabFrom />
                    </Col>
                </Row>
                <Row>
                    <Col offset={2} span={20} style={{paddingTop:'1.2%'}}>
                        <Table 
                        columns={columns}
                        dataSource={this.state.albums}
                        rowKey={(row, index)=> index}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
