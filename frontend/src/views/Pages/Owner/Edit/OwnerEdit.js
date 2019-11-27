import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import TabFrom from '../../../../froms/nav/TabFrom'
import OwnerEditFrom from '../../../../froms/owner/edit/OwnerEditFrom'
import AboutMeFrom from '../../../../froms/owner/edit/AboutMeFrom'
import ResumeFrom from '../../../../froms/owner/edit/ResumeFrom'
import SkillFrom from '../../../../froms/owner/edit/SkillFrom'
import LanguageFrom from '../../../../froms/owner/edit/LanguageFrom'
import CardNextPage from '../../../../froms/owner/edit/CardNextPage'
import OwnerEditImgForm from '../../../../froms/owner/edit/OwnerEditImgForm'
import {  ownerEdit, 
          aboutmeEdit, 
          resumemeEdit, 
          skillEdit, 
          languageEdit,
          ownerAdd,
          aboutmeAdd,
          resumemeAdd,
          skillAdd,
          languageAdd
        } from '../../../../services/api'
export default class OwnerEdit extends Component {
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
    onAddOwner = async (data) => {
        await ownerAdd(data);
    }
    onAddAboutme = async (data) => {
        await aboutmeAdd(data);
    }
    onAddResume = async (data) => {
        await resumemeAdd(data);
    }
    onAddSkill = async (data) => {
        await skillAdd(data);
    }
    onAddLanguage = async (data) => {
        await languageAdd(data);
    }
    render() {
        return (
            <div>
                <TabFrom />
                <Row style={{paddingTop: '1.5%'}}>
                    <Col offset={6} span={12}>
                    <CardNextPage />
                    </Col>
                    <Col offset={6} span={12}>
                    <OwnerEditImgForm 
                    />
                    <OwnerEditFrom 
                    editOwnerEdit={this.onEditOwner}
                    addOwner={this.onAddOwner}
                    />
                        <Divider />
                    <AboutMeFrom 
                    editAboutme={this.onEditAboutme}
                    addAboutme={this.onAddAboutme}
                    />
                        <Divider />
                    <ResumeFrom 
                    editResume={this.onEditResume}
                    addResume={this.onAddResume}
                    />
                        <Divider />
                    <SkillFrom 
                    editSkill={this.onEditSkill}
                    addSkill={this.onAddSkill}
                    />
                        <Divider />
                    <LanguageFrom 
                    editLanguage={this.onEditLanguage}
                    addLanguage={this.onAddLanguage}
                    />
                        <Divider />
                    </Col>
                </Row>
            </div>
        )
    }
}
