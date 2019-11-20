import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import TabFrom from '../../../../froms/nav/TabFrom'
import OwnerEditFrom from '../../../../froms/owner/edit/OwnerEditFrom'
import AboutMeFrom from '../../../../froms/owner/edit/AboutMeFrom'
import ResumeFrom from '../../../../froms/owner/edit/ResumeFrom'
import SkillFrom from '../../../../froms/owner/edit/SkillFrom'
import LanguageFrom from '../../../../froms/owner/edit/LanguageFrom'
import { ownerEdit, aboutmeEdit } from '../../../../services/api'
export default class OwnerEdit extends Component {
    state={
    }
    UNSAFE_componentWillMount () {}
    onEditOwner = async (data) => {
        await ownerEdit(data); 
    }
    onEditAboutme = async (data) => {
        await aboutmeEdit(data);
    }
    render() {
        return (
            <div>
                <TabFrom />
                <Row style={{paddingTop: '1.5%'}}>
                    <Col offset={6} span={12}>
                    <OwnerEditFrom 
                    editOwnerEdit={this.onEditOwner}
                    />
                    <Divider />
                    <AboutMeFrom 
                    editAboutme={this.onEditAboutme}
                    />
                        <Divider />
                    <ResumeFrom />
                        <Divider />
                    <SkillFrom />
                        <Divider />
                    <LanguageFrom />
                        <Divider />
                    </Col>
                </Row>
            </div>
        )
    }
}
