import React, { Component } from 'react'
import { Row, Col, Button, Tag, Input } from 'antd'
import { languageAll } from '../../../services/api'
const { TextArea } = Input
export default class LanguageFrom extends Component {
    state = {
        action: 'add',
        language: '',
        id: ''
    }
    UNSAFE_componentWillMount () {
        this.onSetLanguageEdit();
    }
    onSetLanguageEdit = async () => {
        const resp = await languageAll();
        if (resp.code === 200 && resp.data[0] !== undefined) {
            this.setState({
                action: "edit",
                language: resp.data[0].language,
                id: resp.data[0].languageid
            })  
        }              
    }
    onSubmitLanguageEdit = async () => {
        const data = {
            language: this.state.language,
            id: this.state.id
        }
        this.props.editLanguage(data);
    }
    onSubmitLanguageAdd = async () => {
        const data = {
            language: this.state.language,
        }
        this.props.addLanguage(data);
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
                <h1>LANGUAGE</h1>
                    <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                        <Tag color="cyan">Language</Tag>
                        <TextArea 
                        name="language"
                        value={this.state.language}
                        onChange={this.onChange}
                        />
                        <Button 
                        onClick={this.state.action === "edit" ? this.onSubmitLanguageEdit : this.onSubmitLanguageAdd}
                        type="primary">
                            {this.state.action}
                        </Button>
                    </Col> 
                </Row>
            </div>  
        )
    }
}
