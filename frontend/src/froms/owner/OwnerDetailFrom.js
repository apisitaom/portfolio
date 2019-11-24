import React, { Component } from 'react'
import { Row, Col, Icon, Divider } from 'antd'
import { ownerAll } from '../../services/api'
export default class OwnerDetailFrom extends Component {
    state={
        github: 'NOT HAVE',
        facebook: 'NOT HAVE',
        email: 'NOT HAVE',
        phonnumber: 'NOT HAVE',
        ig: 'NOT HAVE'
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
        const IconFont = Icon.createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
          });
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
                        <IconFont style={iconStype} type="icon-facebook" />
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
