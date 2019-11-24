import React, { Component } from 'react'
import { Row, Col, Input, Tag, Button } from 'antd'
import { ownerAll } from '../../../services/api'
const { TextArea } = Input
export default class OwnerEditFrom extends Component {
    state={
        name: '',
        phonnumber: '',
        address: '',
        subdistrict: '',
        district: '',
        provicne: '',
        zipcode: '',
        facebook: '',
        github: '',
        gitlab: '',
        okta: '',
        age: '',
        gender: '',
        birthday: '',
        text: '',
        email: '',
        ig: '',
        other: '',
        id: ''
    }
    UNSAFE_componentWillMount () {
        this.onSetEditOwner();
    }
    onSetEditOwner = async () => {
        const resp = await ownerAll();        
        resp.code === 200 && this.setState({
            name: resp.data[0].name,
            phonnumber: resp.data[0].phonnumber,
            address: resp.data[0].address,
            subdistrict: resp.data[0].subdistrict,
            district: resp.data[0].district,
            provicne: resp.data[0].provicne,
            zipcode: resp.data[0].zipcode,
            facebook: resp.data[0].facebook,
            github: resp.data[0].github,
            gitlab: resp.data[0].gitlab,
            okta: resp.data[0].okta,
            age: resp.data[0].age,
            gender: resp.data[0].gender,
            birthday: resp.data[0].birthday,
            other: resp.data[0].other,
            text: resp.data[0].text,
            email: resp.data[0].email,
            ig: resp.data[0].ig,
            id: resp.data[0].ownerid
        })
    }
    onSubmitEditOwner =  () => {
        const data = {
            name: this.state.name,
            phonnumber: this.state.phonnumber,
            address: this.state.address,
            subdistrict: this.state.subdistrict,
            district: this.state.district,
            provicne: this.state.provicne,
            zipcode: this.state.zipcode,
            facebook: this.state.facebook,
            github: this.state.github,
            gitlab: this.state.gitlab,
            okta: this.state.okta,
            age: this.state.age,
            gender: this.state.gender,
            birthday: this.state.birthday,
            text: this.state.text,
            other: this.state.other,
            email: this.state.email,
            ig: this.state.ig,
            id: this.state.id
        }        
        this.props.editOwnerEdit(data);
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 
    render() {
        return (
            <div>
                <Row>
                <h1>OWNER EDIT</h1>
                        <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                            <Tag color="cyan">Name</Tag>
                            <Input 
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Phone Number</Tag>
                            <Input 
                            name="phonnumber"
                            value={this.state.phonnumber}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Address</Tag>
                            <Input 
                            name="address"
                            value={this.state.address}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Subdistrict</Tag>
                            <Input 
                            name="subdistrict"
                            value={this.state.subdistrict}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">District</Tag>
                            <Input 
                            name="district"
                            value={this.state.district}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Provicne</Tag>
                            <Input 
                            name="provicne"
                            value={this.state.provicne}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Zipcode</Tag>
                            <Input 
                            name="zipcode"
                            value={this.state.zipcode}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Facebook</Tag>
                            <Input 
                            name="facebook"
                            value={this.state.facebook}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Github</Tag>
                            <Input 
                            name="github"
                            value={this.state.github}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Gitlab</Tag>
                            <Input 
                            name="gitlab"
                            value={this.state.gitlab}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Okta</Tag>
                            <Input 
                            name="okta"
                            value={this.state.okta}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Age</Tag>
                            <Input 
                            name="age"
                            value={this.state.age}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Gender</Tag>
                            <Input 
                            name="gender"
                            value={this.state.gender}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Birthday</Tag>
                            <Input 
                            name="birthday"
                            value={this.state.birthday}
                            onChange={this.state.birthday}
                            />
                            <Tag color="cyan">text</Tag>
                            <Input 
                            name="text"
                            value={this.state.text}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">email</Tag>
                            <Input 
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">ig</Tag>
                            <Input 
                            name="ig"
                            value={this.state.ig}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Other</Tag>
                            <TextArea 
                            name="other"
                            value={this.state.other}
                            onChange={this.onChange}
                            />
                            <Button 
                            onClick={this.onSubmitEditOwner}
                            type="primary">
                                Edit Owner
                            </Button>
                        </Col>
                </Row>
            </div>
        )
    }
}
