import React, { Component } from 'react'
import { Row, Col, Button, Tag, Input } from 'antd'
import { languageAll } from '../../../services/api'
const { TextArea } = Input
export default class LanguageFrom extends Component {
    state = {
        language: '',
        id: ''
    }
    UNSAFE_componentWillMount () {
        this.onSetLanguageEdit();
    }
    onSetLanguageEdit = async () => {
        const resp = await languageAll();
        this.setState({
            language: resp.data[0].language,
            id: resp.data[0].languageid
        })                
    }
    onSubmitLanguageEdit = async () => {
        const data = {
            language: this.state.language,
            id: this.state.id
        }
        this.props.editLanguage(data);
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
                <h1>LANGUAGE EDIT</h1>
                    <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                        <Tag color="cyan">Language</Tag>
                        <TextArea 
                        name="language"
                        value={this.state.language}
                        onChange={this.onChange}
                        />
                        <Button 
                        onClick={this.onSubmitLanguageEdit}
                        type="primary">
                            Edit Language
                        </Button>
                    </Col> 
                </Row>
            </div>  
        )
    }
}
