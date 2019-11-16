import React, { Component } from 'react'
import { Card, Row, Col } from 'antd'
export default class OwnerListFrom extends Component {
    onChangePageResult = () => {
        window.location.assign('#result');
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
                        <h1 style={textColorGrey}>APISIT PROMPHA</h1>
                        <h4 style={textColorGrey}>Computer Engineering / frontend and backend developer</h4>
                    </Col>
                    <Col offset ={2}>
                        <h4 style={{fontSize:'600%', color:'#839192'}}>Hello,</h4>
                    </Col>
                    <Col offset ={4}>
                        <h4 style={{fontSize:'180%', color:'#839192'}}> a little bit abount me</h4>
                    </Col>
                    <Col style={paddingStype}>
                        <Card.Grid style={gridStyle}>MY RESUME</Card.Grid>
                        <Card.Grid style={gridStyle}>ABOUT ME</Card.Grid>
                        <Card.Grid style={gridStyle} onClick={() => this.onChangePageResult()} >PRODUCTS</Card.Grid>
                    </Col>
                    <Col offset={2} span={20} style={paddingStype}>
                        <h5>
                            Hello, My name is apisit Prompha but you can call me "Aom" 
                            I enjoy to improve and interest to build web application/mobile application 
                            I'm also interest Stock of Thailand, property and Cryptocurrency
                        </h5>
                    </Col>
                </Row>
            </div>
        )
    }
}
