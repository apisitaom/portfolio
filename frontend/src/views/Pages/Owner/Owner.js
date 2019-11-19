import React, { Component } from 'react'
import { Row, Col } from 'antd'
import OwnerImgFrom from '../../../froms/owner/OwnerImgFrom'
import OwnerListFrom from '../../../froms/owner/OwnerListFrom'
import TabFrom from '../../../froms/nav/TabFrom' 
import OwnerDetailFrom from '../../../froms/owner/OwnerDetailFrom'
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
                <Row style={{padding: '50px'}}> 
                    <Col offset={6} span={6}>
                        <OwnerImgFrom />
                    </Col>
                    <Col span={12}>
                        <OwnerListFrom />
                    </Col>
                </Row>
                <Row style={{paddingBottom: '0.5%'}}>
                    <Col span={24}>
                        <OwnerDetailFrom />
                    </Col>
                </Row>
            </div>
        )
    }
}
