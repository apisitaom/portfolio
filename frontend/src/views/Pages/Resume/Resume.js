import React, { Component } from 'react'
import { Row, Col, Divider, Tag, Icon } from 'antd'
import TabFrom from '../../../froms/nav/TabFrom'
export default class Resume extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <TabFrom />
                    </Col>
                </Row>
                <Row style={{paddingTop: '1.5%'}}>
                    <Col offset={6} span={8}><p style={{fontSize: '450%'}}>RESUME</p></Col>
                    <Col offset={6} span={8}>                        
                        <Tag color="gold" style={{fontSize: '150%'}}>Professional ​info​​</Tag>
                        <p>"NYC" and "New York, New York" redirect here.
                            For other uses, see New York City (disambiguation); 
                            NYC (disambiguation); and New York, New York (disambiguation).
                        </p>
                    <Divider />
                        <Tag color="lime" style={{fontSize: '150%'}}>Work​ experience​</Tag>
                        <p>"NYC" and "New York, New York" redirect here.
                            For other uses, see New York City (disambiguation); 
                            NYC (disambiguation); and New York, New York (disambiguation).
                        </p>
                    <Divider />
                        <Tag color="green" style={{fontSize: '150%'}}>Education</Tag>
                        <p>"NYC" and "New York, New York" redirect here.
                            For other uses, see New York City (disambiguation); 
                            NYC (disambiguation); and New York, New York (disambiguation)
                        </p>
                    <Divider />
                        <Tag color="cyan" style={{fontSize: '150%'}}>Activity</Tag>
                        <p>"NYC" and "New York, New York" redirect here.
                            For other uses, see New York City (disambiguation); 
                            NYC (disambiguation); and New York, New York (disambiguation).
                        </p>
                    </Col>


                    <Col offset={1} span={3} style={{paddingTop: '1.5%'}}>
                        <Icon style={{fontSize:'300%'}} type="unlock" /> 
                        <Tag color="blue" style={{fontSize: '80%'}}>Skills</Tag>                       
                            <p>"NYC" and "New York, New York" redirect here.
                            For other uses, see New York City (disambiguation); 
                            NYC (disambiguation); and New York, New York (disambiguation).
                        </p>
                    <Divider />
                        <Icon style={{fontSize:'300%'}} type="global" /> 
                        <Tag color="geekblue" style={{fontSize: '80%'}}>Language</Tag>                                              
                            <p>"NYC" and "New York, New York" redirect here.
                            For other uses, see New York City (disambiguation); 
                            NYC (disambiguation); and New York, New York (disambiguation).
                        </p>
                    <Divider />
                        <Icon style={{fontSize:'300%'}} type="star" />
                        <Tag color="purple" style={{fontSize: '80%'}}>Interest</Tag>                                                                     
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
