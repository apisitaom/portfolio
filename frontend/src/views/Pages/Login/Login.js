import React, { Component } from 'react'
import { Row, Col, Drawer, Input } from 'antd';
import { Button } from 'react-bootstrap'
export default class Login extends Component {
    state={
        visible: false,
        placement: 'right'
    }
    UNSAFE_componentWillMount(){}
    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
    render() {
        console.log('LOGIN :', this.state);
        return (
            <div>
                <Row>
                    <Button variant="outline-warning" onClick={this.showDrawer}>EDIT</Button>
                    <Drawer
                        title="LOGIN "
                        placement={this.state.placement}
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        width={'25%'}
                    >
                        <p>your email</p>
                        <Input 
                        placeholder="emial"
                        />
                        <p>your password</p>
                        <Input 
                        placeholder="password"
                        />
                        <Col offset={9} style={{padding: '10px'}}>
                        <Button variant="outline-success" size="sm">success</Button>
                        </Col>
                    </Drawer>
                </Row>
            </div>
        )
    }
}
