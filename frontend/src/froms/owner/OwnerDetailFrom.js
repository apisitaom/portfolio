import React, { Component } from 'react'
import { Row, Col, Icon, Divider } from 'antd'
export default class OwnerDetailFrom extends Component {
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
                        apisitaom
                        <IconFont style={iconStype} type="icon-facebook" />
                        <Divider type="vertical" />
                        Aom Apisit
                        <Icon style={iconStype} type="wechat" />
                        <Divider type="vertical" />
                        apisitprompha@gmail.com
                        <Icon style={iconStype} type="phone" />
                        <Divider type="vertical" />
                        0933347977
                        <Icon style={iconStype} type="instagram" />
                        <Divider type="vertical" />
                        apisitaom21
                        <Icon style={iconStype} type="smile" />
                        <Divider type="vertical" />
                    </Col>
                </Row>
            </div>
        )
    }
}
