import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import TabFrom from '../../../../froms/nav/TabFrom'
import OwnerEditFrom from '../../../../froms/owner/edit/OwnerEditFrom'
import AboutMeFrom from '../../../../froms/owner/edit/AboutMeFrom'
import ResumeFrom from '../../../../froms/owner/edit/ResumeFrom'
import SkillFrom from '../../../../froms/owner/edit/SkillFrom'
import LanguageFrom from '../../../../froms/owner/edit/LanguageFrom'
import { ownerEdit, aboutmeEdit, resumemeEdit, skillEdit, languageEdit } from '../../../../services/api'
export default class OwnerEdit extends Component {
    UNSAFE_componentWillMount () {}
    onEditOwner = async (data) => {
        await ownerEdit(data); 
    }
    onEditAboutme = async (data) => {
        await aboutmeEdit(data);
    }
    onEditResume = async (data) => {   
        await resumemeEdit(data);     
    }
    onEditSkill = async (data) => {
        await skillEdit(data);
    }
    onEditLanguage = async (data) => {
        await languageEdit(data);  
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
                    <ResumeFrom 
                    editResume={this.onEditResume}
                    />
                        <Divider />
                    <SkillFrom 
                    editSkill={this.onEditSkill}
                    />
                        <Divider />
                    <LanguageFrom 
                    editLanguage={this.onEditLanguage}
                    />
                        <Divider />
                    </Col>
                </Row>
            </div>
        )
    }
}
