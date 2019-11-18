import React, { Component } from 'react'
import { Row, Col, Input, Tag, Button } from 'antd'
export default class OwnerEditFrom extends Component {
    render() {
        return (
            <div>
                <Row>
                <h1>OWNER EDIT</h1>
                        <Col offset={4} span={16} style={{paddingBottom: '0.5%'}}>
                            <Tag color="cyan">Name</Tag>
                            <Input 
                            placeholder="name"
                            />
                            <Tag color="cyan">Phone Number</Tag>
                            <Input 
                            placeholder="phone number"
                            />
                            <Tag color="cyan">Address</Tag>
                            <Input 
                            placeholder="address"
                            />
                            <Tag color="cyan">Subdistrict</Tag>
                            <Input 
                            placeholder="subdistrict"
                            />
                            <Tag color="cyan">District</Tag>
                            <Input 
                            placeholder="district"
                            />
                            <Tag color="cyan">Provicne</Tag>
                            <Input 
                            placeholder="provicne"
                            />
                            <Tag color="cyan">Zipcode</Tag>
                            <Input 
                            placeholder="zipcode"
                            />
                            <Tag color="cyan">Facebook</Tag>
                            <Input 
                            placeholder="facebook"
                            />
                            <Tag color="cyan">Github</Tag>
                            <Input 
                            placeholder="github"
                            />
                            <Tag color="cyan">Gitlab</Tag>
                            <Input 
                            placeholder="gitlab"
                            />
                            <Tag color="cyan">Okta</Tag>
                            <Input 
                            placeholder="okta"
                            />
                            <Tag color="cyan">Age</Tag>
                            <Input 
                            placeholder="age"
                            />
                            <Tag color="cyan">Gender</Tag>
                            <Input 
                            placeholder="gender"
                            />
                            <Tag color="cyan">Birthday</Tag>
                            <Input 
                            placeholder="birthday"
                            />
                            <Tag color="cyan">Other</Tag>
                            <Input 
                            placeholder="other"
                            />
                            <Button type="primary">
                                Edit Owner
                            </Button>
                        </Col>
                </Row>
            </div>
        )
    }
}
