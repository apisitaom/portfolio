import React, { Component } from 'react'
import { Row, Col } from 'antd'
import OwnerAlbumFrom from '../../../froms/owner/OwnerAlbumFrom'
import TabFrom from '../../../froms/nav/TabFrom' 
export default class Result extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <TabFrom />
                    </Col>
                </Row>
                <Row>
                    <Col offset={2} span={20}>
                        <OwnerAlbumFrom />
                    </Col>
                </Row>
            </div>
        )
    }
}
