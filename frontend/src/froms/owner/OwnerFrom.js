import React, { Component } from 'react'
import { Image, Col } from 'react-bootstrap'
import profile from '../../assets/img/profile.jpg'
export default class OwnerFrom extends Component {
    render() {
        return (
            <div>
                <Col>
                   <Image  style={{width: '60%', height: 'auto'}} src={profile} roundedCircle />
                </Col>
            </div>
        )
    }
}
