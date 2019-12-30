import React, { Component } from 'react'
import { Row, Col, Divider, Tag, Icon } from 'antd'
import TabFrom from '../../../froms/nav/TabFrom'
import { resumemeAll, languageAll, skillAll, aboutmeAll } from '../../../services/api'
// Mock Data
import { professional, experience, education, activity, skill, language, interest } from '../../../mock/Resume'
export default class Resume extends Component {
    state={
        professional: professional,
        experience: experience,
        education: education,
        activity: activity,
        skill: skill,
        language: language,
        interest: interest
    }
    UNSAFE_componentWillMount () {
        this.onGetResume();
        this.onGetSkill();
        this.onGetLanguage();
        this.onGetAboutme();
    }
    onGetResume = async () => {
        const resp = await resumemeAll();
        resp.code === 200 && this.setState({
            activity: resp.data[0].activity,
            education: resp.data[0].education,
            experience: resp.data[0].experience,
            professional: resp.data[0].professional
        })
    }
    onGetSkill = async () => {
        const resp = await skillAll();
        resp.code === 200 && this.setState({
            skill: resp.data[0].skill
        })        
    }
    onGetLanguage = async () => {
        const resp = await languageAll();
        resp.code === 200 && this.setState({
            language: resp.data[0].language    
        })
    }
    onGetAboutme = async () => {
        const resp = await aboutmeAll();
        resp.code === 200 && this.setState({
            interest: resp.data[0].interest
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
                    <Col offset={6} span={8}><p style={{fontSize: '450%'}}>RESUME</p></Col>
                    <Col offset={6} span={8}>                        
                        <Tag color="gold" style={{fontSize: '150%'}}>Professional ​info​​</Tag>
                        <p>{this.state.professional}</p>
                    <Divider />
                        <Tag color="lime" style={{fontSize: '150%'}}>Work​ experience​</Tag>
                        <p>{this.state.experience}</p>
                    <Divider />
                        <Tag color="green" style={{fontSize: '150%'}}>Education</Tag>
                        <p>{this.state.education}</p>
                    <Divider />
                        <Tag color="cyan" style={{fontSize: '150%'}}>Activity</Tag>
                        <p>{this.state.activity}</p>
                    </Col>
                    <Col offset={1} span={3} style={{paddingTop: '1.5%'}}>
                        <Icon style={{fontSize:'300%'}} type="unlock" /> 
                        <Tag color="blue" style={{fontSize: '80%'}}>Skills</Tag>                       
                        <p>{this.state.skill}</p>
                    <Divider />
                        <Icon style={{fontSize:'300%'}} type="global" /> 
                        <Tag color="geekblue" style={{fontSize: '80%'}}>Language</Tag>                                              
                            <p>{this.state.language}</p>
                    <Divider />
                        <Icon style={{fontSize:'300%'}} type="star" />
                        <Tag color="purple" style={{fontSize: '80%'}}>Interest</Tag>                                                                     
                        <p>{this.state.interest}</p>
                    </Col>
                </Row>
            </div>
        )
    }
}
