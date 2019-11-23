import React, { Component } from 'react'
import { Row, Col } from 'antd'
import TabFrom from '../../../../froms/nav/TabFrom'
import CommentTableForm from '../../../../froms/comment/CommentTableForm'
import { commentAll } from '../../../../services/api'
export default class CommentLists extends Component {
    state={
        comments: []
    }
    UNSAFE_componentWillMount () {
        this.onGetComment();
    }
    onGetComment = async () => {
        const resp = await commentAll();
        resp.code === 200 && this.setState({
            comments: resp.data
        })
         
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <TabFrom />
                    </Col>
                </Row>
                <Row>
                    <Col offset={2} span={20} style={{paddingTop: '1.2%'}}>
                        <CommentTableForm 
                        dataSorce = { typeof this.state.comments !== 'undefined' ? this.state.comments : [] }
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
