import React, { Component } from 'react'
import { Row, Col, Divider, Tag } from 'antd'
import TabFrom from '../../../froms/nav/TabFrom' 
import { aboutmeAll } from '../../../services/api'
export default class AbountMe extends Component {
    state={
        aboutme: 'NOT HAVE',
        address: 'NOT HAVE',
        family: 'NOT HAVE',
        hobby: 'NOT HAVE',
        interest: 'NOT HAVE'
    }
    UNSAFE_componentWillMount () {
        this.onGetAboutMe();
    }
    onGetAboutMe = async () => {
        const resp = await aboutmeAll();
        this.setState({
            aboutme: resp.data[0].aboutme,
            address: resp.data[0].address,
            family: resp.data[0].family,
            hobby: resp.data[0].hobby,
            interest: resp.data[0].interest
        })}
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
                    <Tag color="#2db7f5" style={{fontSize: '150%'}}>About me</Tag>
                        <p>{this.state.aboutme}</p>
                    <Divider /> 
                    <Tag color="#2db7f5" style={{fontSize: '150%'}}>Hobby / Free time</Tag>
                        <p>{this.state.hobby}</p>
                    <Divider />   
                    <Tag color="#2db7f5" style={{fontSize: '150%'}}>Interest</Tag>
                        <p>{this.state.interest}</p>
                    <Divider />   
                    <Tag color="#2db7f5" style={{fontSize: '150%'}}>Family</Tag>
                        <p>{this.state.family}</p>
                    <Divider />  
                    <Tag color="#2db7f5" style={{fontSize: '150%'}}>Address</Tag>
                        <p>{this.state.address}</p>
                    </Col>
                </Row>
            </div>
        )
    }
}
