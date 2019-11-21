import React, { Component } from 'react'
import { Card, Row, Col } from 'antd'
import { ownerAll } from '../../services/api'
export default class OwnerListFrom extends Component {
    state = {
        name: 'NOT HAVE',
        text: 'NOT HAVE',
        other: 'NOT HAVE'
    }
    UNSAFE_componentWillMount () {
        this.onGetOwner();
    }
    onGetOwner = async () => {
        const resp = await ownerAll();
        this.setState({
            name: resp.data[0].name,
            text: resp.data[0].text,
            other: resp.data[0].other
        })        
    }
    onChangePageResult = () => {
        window.location.assign('#product');
    }
    onChangePageResume = () => {
        window.location.assign('#resume');
    }
    onChangePageAbountMe = () => {
        window.location.assign('#abountme');
    }
    render() {
        const gridStyle = {
            width: '30%',
            textAlign: 'center',
            margin: '5px',
            color: 'white'
          };
        const textColorGrey = {
            color: '#839192'
        }
        const paddingStype = {
            paddingTop:'20px'
        }
        return (
            <div>
                <Row>
                    <Col>
                        <h1 style={textColorGrey}>{this.state.name}</h1>
                        <h4 style={textColorGrey}>{this.state.text}</h4>
                    </Col>
                    <Col offset ={2}>
                        <h4 style={{fontSize:'600%', color:'#839192'}}>Hello,</h4>
                    </Col>
                    <Col offset ={4}>
                        <h4 style={{fontSize:'180%', color:'#839192'}}> a little bit abount me</h4>
                    </Col>
                    <Col style={paddingStype}>
                        <Card.Grid style={gridStyle} onClick={() => this.onChangePageResume()} >MY RESUME</Card.Grid>
                        <Card.Grid style={gridStyle} onClick={() => this.onChangePageAbountMe()} >ABOUT ME</Card.Grid>
                        <Card.Grid style={gridStyle} onClick={() => this.onChangePageResult()} >PRODUCTS</Card.Grid>
                    </Col>
                    <Col offset={2} span={20} style={paddingStype}>
                        <h5>{this.state.other}</h5>
                    </Col>
                </Row>
            </div>
        )
    }
}
