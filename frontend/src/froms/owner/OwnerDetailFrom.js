import React, { Component } from 'react'
import { Row, Col, Icon, Divider } from 'antd'
import { ownerAll } from '../../services/api'
// Mock Data
import { github, facebook, email, phonenumber, ig } from '../../mock/Owner'
export default class OwnerDetailFrom extends Component {
    state={
        github: github,
        facebook: facebook,
        email: email,
        phonnumber: phonenumber,
        ig: ig
    }
    UNSAFE_componentWillMount () {
        this.onGetOwner();
    }
    onGetOwner = async () => {
        const resp = await ownerAll();
        resp.code === 200 && this.setState({
            github: resp.data[0].github,
            facebook: resp.data[0].facebook,
            email: resp.data[0].email,
            phonnumber: resp.data[0].phonnumber,
            ig: resp.data[0].ig
        })
    }
    render() {
        const iconStype = {
            fontSize: '300%',
            paddingLeft: '1%'
        }
        return (
            <div>
                <Row style={{backgroundColor: 'white', textAlign: 'center'}}>
                    <Col offset={4} span={16} style={{padding: '10px'}}> 
                        <Icon style={iconStype} type="github" />
                        <Divider type="vertical" />
                        {this.state.github}
                        <Icon style={iconStype} type="facebook" />
                        <Divider type="vertical" />
                        {this.state.facebook}
                        <Icon style={iconStype} type="wechat" />
                        <Divider type="vertical" />
                        {this.state.email}
                        <Icon style={iconStype} type="phone" />
                        <Divider type="vertical" />
                        {this.state.phonnumber}
                        <Icon style={iconStype} type="instagram" />
                        <Divider type="vertical" />
                        {this.state.ig}
                        <Icon style={iconStype} type="smile" />
                        <Divider type="vertical" />
                    </Col>
                </Row>
            </div>
        )
    }
}
