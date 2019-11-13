import React, { Component } from 'react'
import { Row, Col } from 'antd'
import OwnerFrom from '../../../froms/owner/OwnerFrom'
export default class Owner extends Component {
    state={}
    UNSAFE_componentWillMount(){}
    render() {
        return (
            <div>
              <Row>
                  <Col span={24}>
                      <h1>Col 1</h1>
                  </Col>
                  <Col span={6}>
                      <OwnerFrom />
                  </Col>
                  <Col offset={2} span={16}>
                      <h1>Col 2</h1>
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
