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
        other: '',
        id: ''
    }
    UNSAFE_componentWillMount () {
        this.onSetEditOwner();
    }
    onSetEditOwner = async () => {
        const resp = await ownerAll();
        this.setState({
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
                            placeholder="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Phone Number</Tag>
                            <Input 
                            placeholder="phone number"
                            name="phonnumber"
                            value={this.state.phonnumber}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Address</Tag>
                            <Input 
                            placeholder="address"
                            name="address"
                            value={this.state.address}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Subdistrict</Tag>
                            <Input 
                            placeholder="subdistrict"
                            name="subdistrict"
                            value={this.state.subdistrict}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">District</Tag>
                            <Input 
                            placeholder="district"
                            name="district"
                            value={this.state.district}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Provicne</Tag>
                            <Input 
                            placeholder="provicne"
                            name="provicne"
                            value={this.state.provicne}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Zipcode</Tag>
                            <Input 
                            placeholder="zipcode"
                            name="zipcode"
                            value={this.state.zipcode}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Facebook</Tag>
                            <Input 
                            placeholder="facebook"
                            name="facebook"
                            value={this.state.facebook}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Github</Tag>
                            <Input 
                            placeholder="github"
                            name="github"
                            value={this.state.github}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Gitlab</Tag>
                            <Input 
                            placeholder="gitlab"
                            name="gitlab"
                            value={this.state.gitlab}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Okta</Tag>
                            <Input 
                            placeholder="okta"
                            name="okta"
                            value={this.state.okta}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Age</Tag>
                            <Input 
                            placeholder="age"
                            name="age"
                            value={this.state.age}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Gender</Tag>
                            <Input 
                            placeholder="gender"
                            name="gender"
                            value={this.state.gender}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Birthday</Tag>
                            <Input 
                            placeholder="birthday"
                            name="birthday"
                            value={this.state.birthday}
                            onChange={this.state.birthday}
                            />
                            <Tag color="cyan">text</Tag>
                            <Input 
                            placeholder="text"
                            name="text"
                            value={this.state.text}
                            onChange={this.onChange}
                            />
                            <Tag color="cyan">Other</Tag>
                            <TextArea 
                            placeholder="other"
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
