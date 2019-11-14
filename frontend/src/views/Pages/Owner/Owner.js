import React, { Component } from 'react'
import { Row, Col } from 'antd'
import OwnerImgFrom from '../../../froms/owner/OwnerImgFrom'
import OwnerListFrom from '../../../froms/owner/OwnerListFrom'
import TabFrom from '../../../froms/nav/TabFrom' 
export default class Owner extends Component {
    state={}
    UNSAFE_componentWillMount(){}
    render() {
        return (
            <div className="body">
                <Row>
                    <Col span={24}>
                      <TabFrom />
                    </Col>   
                </Row>
                <Row style={{padding: '12px'}}> 
                    <Col span={6}>
                        <OwnerImgFrom />
                    </Col>
                    <Col span={18}>
                        <OwnerListFrom />
                    </Col>
                </Row>
                <Row>
                    <Col offset={2} span={20} style={{textAlign: 'center'}}>
                        <h1>Col 3</h1>
                    </Col>
                </Row>
            </div>
        )
    }
}
