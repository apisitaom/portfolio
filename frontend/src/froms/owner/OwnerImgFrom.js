import React, { Component } from 'react'
import { Image, Col } from 'react-bootstrap'
import profile from '../../assets/img/profile.jpg'
export default class OwnerImgFrom extends Component {
    render() {
        return (
            <div>
                <Col>
                   <Image style={{width:'85%', height:'auto'}} src={profile} roundedCircle />
                </Col>
            </div>
        )
    }
}
