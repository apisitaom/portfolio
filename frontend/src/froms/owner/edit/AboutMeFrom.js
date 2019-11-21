import React, { Component } from 'react'
import { Row, Col, Input, Button, Tag } from 'antd'
import { aboutmeAll } from '../../../services/api'
const { TextArea } = Input;
export default class AboutMeFrom extends Component {
    state = {
        aboutme: '',
        address: '',
        family: '',
        hobby: '',
        interest: '',
        id: ''
    }
    UNSAFE_componentWillMount () {
        this.onSetAboutme();
    }
    onSetAboutme = async () => {
        const resp = await aboutmeAll();
        this.setState({
            aboutme: resp.data[0].aboutme,
            address: resp.data[0].address,
            family: resp.data[0].family,
            hobby: resp.data[0].hobby,
            interest: resp.data[0].interest,
            id: resp.data[0].aboutid
        })
    }
    onSubmitEditAboutme = () => {
        const data = {
            aboutme: this.state.aboutme,
            address: this.state.address,
            family: this.state.family,
            hobby: this.state.hobby,
            interest: this.state.interest,
            id: this.state.id
        }        
        this.props.editAboutme(data);
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
                <h1>About Me</h1>
                    <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                    <Tag color="cyan">Abount Me</Tag>
                        <TextArea 
                        name="aboutme"
                        value={this.state.aboutme}
                        onChange={this.onChange}
                        />
                        <Tag color="cyan">Hobby / Free time</Tag>
                        <TextArea 
                        name="hobby"
                        value={this.state.hobby}
                        onChange={this.onChange}
                        />
                        <Tag color="cyan">Interest</Tag>
                        <TextArea 
                        name="interest"
                        value={this.state.interest}
                        onChange={this.onChange}
                        />
                        <Tag color="cyan">Family</Tag>
                        <TextArea 
                        name="family"
                        value={this.state.family}
                        onChange={this.onChange}
                        />
                        <Tag color="cyan">Address</Tag>
                        <TextArea 
                        name="address"
                        value={this.state.address}
                        onChange={this.onChange}
                        />
                        <Button 
                        onClick={this.onSubmitEditAboutme}
                        type="primary">
                            Edit About me
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
