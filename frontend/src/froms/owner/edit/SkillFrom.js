import React, { Component } from 'react'
import { Row, Col, Button, Tag, Input } from 'antd'
import { skillAll } from '../../../services/api'
const { TextArea } = Input
export default class SkillFrom extends Component {
    state = {
        action: 'add',
        skill: '',
        id: ''
    }
    UNSAFE_componentWillMount () {
        this.onSetSkillEdit();
    }
    onSetSkillEdit = async () => {
        const resp = await skillAll(); 
        if (resp.code === 200 && resp.data[0] !== undefined) {
            this.setState({
                action: "edit",
                skill: resp.data[0].skill,
                id: resp.data[0].skillid
            })  
        }                
    }
    onSubmitEditSkill = () => {
        const data = {
            action: "edit",
            skill: this.state.skill,
            id: this.state.id
        }
        this.props.editSkill(data);
    }
    onSubmitAddSkill = () => {
        const data = {
            skill: this.state.skill,
        }
        this.props.addSkill(data);
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
                <h1>SKILLS</h1>
                    <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                        <Tag color="cyan">Skills</Tag>
                        <TextArea 
                        name="skill"
                        value={this.state.skill}
                        onChange={this.onChange}
                        />
                        <Button
                        onClick={this.state.action === "edit" ? this.onSubmitEditSkill : this.onSubmitAddSkill} 
                        type="primary">
                            {this.state.action}
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
