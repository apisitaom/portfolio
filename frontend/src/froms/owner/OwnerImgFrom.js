import React, { Component } from 'react'
import { Image, Col } from 'react-bootstrap'
import { ownerAll } from '../../services/api'
import { imagurl } from '../../services/config/apiurl'
export default class OwnerImgFrom extends Component {
    state={
        imgName: ''
    }
    UNSAFE_componentWillMount () {
        this.onGetOwner();
    }
    onGetOwner = async () => {
        const resp = await ownerAll();
        resp.code === 200 && this.setState({
            imgName: `${imagurl}${resp.data[0].picture}` 
        })
    }
    render() {
        return (
            <div>
                <Col>
                   <Image style={{width:'85%', height:'auto'}} src={this.state.imgName} roundedCircle />
                </Col>
            </div>
        )
    }
}
