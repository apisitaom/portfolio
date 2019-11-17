import React, { Component } from 'react'
import { Row, Col, Divider, Tag } from 'antd'
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
                    <Col offset={8} span={8}><p style={{fontSize: '450%'}}>ABOUT ME</p></Col>
                    <Col offset={8} span={8}> 
                    <Tag color="#2db7f5" style={{fontSize: '150%'}}>Hobby / Free time</Tag>
                        <p>"NYC" and "New York, New York" redirect here.
                            For other uses, see New York City (disambiguation); 
                            NYC (disambiguation); and New York, New York (disambiguation).
                        </p>
                    <Divider />   
                    <Tag color="#2db7f5" style={{fontSize: '150%'}}>Interest</Tag>
                        <p>"NYC" and "New York, New York" redirect here.
                            For other uses, see New York City (disambiguation); 
                            NYC (disambiguation); and New York, New York (disambiguation).
                        </p>
                    <Divider />   
                    <Tag color="#2db7f5" style={{fontSize: '150%'}}>Family</Tag>
                        <p>"NYC" and "New York, New York" redirect here.
                            For other uses, see New York City (disambiguation); 
                            NYC (disambiguation); and New York, New York (disambiguation).
                        </p>
                    <Divider />  
                    <Tag color="#2db7f5" style={{fontSize: '150%'}}>Address</Tag>
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
