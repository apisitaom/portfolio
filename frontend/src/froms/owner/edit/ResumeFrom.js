import React, { Component } from 'react'
import { Row, Col, Button, Tag, Input } from 'antd'
import { resumemeAll } from '../../../services/api'
const { TextArea } = Input;
export default class ResumeFrom extends Component {
    state = {
        action: 'add',
        professional: '',
        experience: '',
        education: '',
        activity: '',
        id: ''
    }
    UNSAFE_componentWillMount () {
        this.onSetResumeEdit();
    }
    onSetResumeEdit = async () => {
        const resp = await resumemeAll();
        if (resp.code === 200 && resp.data[0] !== undefined) {
            this.setState({
                professional: resp.data[0].professional,
                experience: resp.data[0].experience,
                education: resp.data[0].education,
                activity: resp.data[0].activity,
                id: resp.data[0].resumeid
            }) 
        }
    }
    onSubmitEditResume = () => {
        const data = {
            professional: this.state.professional,
            experience: this.state.experience,
            education: this.state.education,
            activity: this.state.activity,
            id: this.state.id      
        }
        this.props.editResume(data);
    }
    onSubmitAddResume = () => {
        const data = {
            professional: this.state.professional,
            experience: this.state.experience,
            education: this.state.education,
            activity: this.state.activity,
        }
        this.props.addResume(data);
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 
    render() {
        return (
            <div>
                <Row>
                <h1>REMUME</h1>
                    <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                        <Tag color="cyan">Professional info</Tag>
                        <TextArea 
                        name="professional"
                        value={this.state.professional}
                        onChange={this.onChange}
                        />
                        <Tag color="cyan">Work​ experience</Tag>
                        <TextArea 
                        name="experience"
                        value={this.state.experience}
                        onChange={this.onChange}
                        />
                        <Tag color="cyan">Education</Tag>
                        <TextArea 
                        name="education"
                        value={this.state.education}
                        onChange={this.onChange}
                        />
                        <Tag color="cyan">Activity</Tag>
                        <TextArea 
                        name="activity"
                        value={this.state.activity}
                        onChange={this.onChange}
                        />
                        <Button 
                        onClick={this.state.action === "edit" ? this.onSubmitEditResume : this.onSubmitAddResume}
                        type="primary">
                            {this.state.action}
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
