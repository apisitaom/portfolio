import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import TabFrom from '../../../froms/nav/TabFrom' 
export default class AbountMe extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <TabFrom />
                    </Col>
                </Row>
                <Row style={{paddingTop: '1.5%'}}>
                    <Col offset={6} span={8}><p style={{fontSize: '450%'}}>ABOUT ME</p></Col>
                    <Col offset={6} span={8}> 
                    <Divider />                       
                        <p>"NYC" and "New York, New York" redirect here.
                            For other uses, see New York City (disambiguation); 
                            NYC (disambiguation); and New York, New York (disambiguation).
                        </p>
                    </Col>
                    <Col offset={1} span={3} style={{paddingTop: '1.5%'}}>
                        <p>"NYC" and "New York, New York" redirect here.
                            For other uses, see New York City (disambiguation); 
                            NYC (disambiguation); and New York, New York (disambiguation).
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}
