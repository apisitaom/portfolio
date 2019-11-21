import React, { Component } from 'react'
import { Row, Col, Button, Tag, Input } from 'antd'
import { skillAll } from '../../../services/api'
const { TextArea } = Input
export default class SkillFrom extends Component {
    state = {
        skill: '',
        id: ''
    }
    UNSAFE_componentWillMount () {
        this.onSetSkillEdit();
    }
    onSetSkillEdit = async () => {
        const resp = await skillAll();
        this.setState({
            skill: resp.data[0].skill,
            id: resp.data[0].skillid
        })                  
    }
    onSubmitEditSkill = () => {
        const data = {
            skill: this.state.skill,
            id: this.state.id
        }
        this.props.editSkill(data);
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
                        placeholder="skill"
                        name="skill"
                        value={this.state.skill}
                        onChange={this.onChange}
                        />
                        <Button
                        onClick={this.onSubmitEditSkill} 
                        type="primary">
                            Edit Skill
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
