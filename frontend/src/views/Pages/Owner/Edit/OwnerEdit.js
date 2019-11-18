import React, { Component } from 'react'
import { Row, Col, Divider, Input, Tag } from 'antd'
import TabFrom from '../../../../froms/nav/TabFrom'
const { TextArea } = Input;
export default class OwnerEdit extends Component {
    state={
    }
    UNSAFE_componentWillMount () {}
    render() {
        return (
            <div>
                <TabFrom />
                <Row style={{paddingTop: '1.5%'}}>
                    <Col offset={6} span={12}>
                    <h1>OWNER EDIT</h1>
                        <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                            <Tag color="cyan">Name</Tag>
                            <Input 
                            placeholder="name"
                            />
                            <Tag color="cyan">Phone Number</Tag>
                            <Input 
                            placeholder="phone number"
                            />
                            <Tag color="cyan">Address</Tag>
                            <Input 
                            placeholder="address"
                            />
                            <Tag color="cyan">Subdistrict</Tag>
                            <Input 
                            placeholder="subdistrict"
                            />
                            <Tag color="cyan">District</Tag>
                            <Input 
                            placeholder="district"
                            />
                            <Tag color="cyan">Provicne</Tag>
                            <Input 
                            placeholder="provicne"
                            />
                            <Tag color="cyan">Zipcode</Tag>
                            <Input 
                            placeholder="zipcode"
                            />
                            <Tag color="cyan">Facebook</Tag>
                            <Input 
                            placeholder="facebook"
                            />
                            <Tag color="cyan">Github</Tag>
                            <Input 
                            placeholder="github"
                            />
                            <Tag color="cyan">Gitlab</Tag>
                            <Input 
                            placeholder="gitlab"
                            />
                            <Tag color="cyan">Okta</Tag>
                            <Input 
                            placeholder="okta"
                            />
                            <Tag color="cyan">Age</Tag>
                            <Input 
                            placeholder="age"
                            />
                            <Tag color="cyan">Gender</Tag>
                            <Input 
                            placeholder="gender"
                            />
                            <Tag color="cyan">Birthday</Tag>
                            <Input 
                            placeholder="birthday"
                            />
                            <Tag color="cyan">Education</Tag>
                            <TextArea 
                            placeholder="education"
                            />
                            <Tag color="cyan">Other</Tag>
                            <Input 
                            placeholder="other"
                            />
                        </Col>
                        <Divider />
                    <h1>SKILLS</h1>
                        <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                            <Tag color="cyan">Skills</Tag>
                            <Input 
                            placeholder="name"
                            />
                        </Col>
                        <Divider />
                    <h1>LANGUAGE</h1>
                        <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                            <Tag color="cyan">Language</Tag>
                            <Input 
                            placeholder="name"
                            />
                        </Col>
                        <Divider />
                    <h1>REMUME</h1>
                        <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                            <Tag color="cyan">Professional info</Tag>
                            <TextArea 
                            placeholder="Professional info"
                            />
                            <Tag color="cyan">Work​ experience</Tag>
                            <TextArea 
                            placeholder="Work​ experience​"
                            />
                            <Tag color="cyan">Education</Tag>
                            <TextArea 
                            placeholder="Education"
                            />
                            <Tag color="cyan">Activity</Tag>
                            <TextArea 
                            placeholder="Activity"
                            />
                        </Col>
                        <Divider />
                    <h1>ABOUT ME</h1>
                        <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                            <Tag color="cyan">Abount Me</Tag>
                            <TextArea 
                            placeholder="Abount Me"
                            />
                            <Tag color="cyan">Hobby / Free time</Tag>
                            <TextArea 
                            placeholder="Hobby / Free time"
                            />
                            <Tag color="cyan">Interest</Tag>
                            <TextArea 
                            placeholder="Interest"
                            />
                            <Tag color="cyan">Family</Tag>
                            <TextArea 
                            placeholder="Family"
                            />
                            <Tag color="cyan">Address</Tag>
                            <TextArea 
                            placeholder="Address"
                            />
                        </Col>
                        <Divider />
                    </Col>
                </Row>
            </div>
        )
    }
}
