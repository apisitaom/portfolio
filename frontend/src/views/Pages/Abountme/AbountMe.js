import React, { Component } from 'react'
import { Row, Col, Divider, Tag, Descriptions } from 'antd'
import TabFrom from '../../../froms/nav/TabFrom' 
import { aboutmeAll, ownerAll } from '../../../services/api'
export default class AbountMe extends Component {
    state={
        aboutme: 'NOT HAVE',
        address: 'NOT HAVE',
        family: 'NOT HAVE',
        hobby: 'NOT HAVE',
        interest: 'NOT HAVE',
        //OWNER 
        name: '',
        age: '',
        gender: '',
        github: '',
        gitlab: '',
        ig: '',
        phonnumber: '',
        email: ''
    }
    UNSAFE_componentWillMount () {
        this.onGetAboutMe();
        this.onGetOwner();
    }
    onGetAboutMe = async () => {
        const resp = await aboutmeAll();
        resp.code === 200 && this.setState({
            aboutme: resp.data[0].aboutme,
            address: resp.data[0].address,
            family: resp.data[0].family,
            hobby: resp.data[0].hobby,
            interest: resp.data[0].interest
        })
    }
    onGetOwner = async () => {
        const resp = await ownerAll();
        resp.code === 200 && this.setState({   
            name: resp.data[0].name.toLowerCase(),
            age: resp.data[0].age,
            gender: resp.data[0].gender,
            github: resp.data[0].github,
            gitlab: resp.data[0].gitlab,
            ig: resp.data[0].ig,
            phonnumber: resp.data[0].phonnumber,
            email: resp.data[0].email      
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
                <Row style={{paddingTop: '1.5%'}}>
                    <Col offset={8} span={8}><p style={{fontSize: '450%'}}>ABOUT ME</p></Col>
                    <Col offset={8} span={8}> 
                    <Tag color="#2db7f5" style={{fontSize: '150%'}}>Introduce Myself</Tag>
                    <Descriptions>
                      <Descriptions.Item label="Name">{this.state.name}</Descriptions.Item>
                      <Descriptions.Item label="Age">{this.state.age}</Descriptions.Item>
                      <Descriptions.Item label="Gender">{this.state.gender}</Descriptions.Item>
                      <Descriptions.Item label="Github">{this.state.github}</Descriptions.Item>
                      <Descriptions.Item label="Gitlab">{this.state.gitlab}</Descriptions.Item>
                      <Descriptions.Item label="IG">{this.state.ig}</Descriptions.Item>
                      <Descriptions.Item label="Phone Number">{this.state.phonnumber}</Descriptions.Item>
                      <Descriptions.Item label="Email" span={2}>{this.state.email}</Descriptions.Item>
                    </Descriptions>
                    <Divider /> 
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
