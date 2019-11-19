import React, { Component } from 'react'
import { Row, Col, Drawer, Input, message } from 'antd';
import { Button } from 'react-bootstrap'
import { login } from '../../../services/api'
export default class Login extends Component {
    state={
        visible: false,
        placement: 'right'
    }
    showDrawer = () => {
      this.setState({
        visible: true
      });
    };
    onClose = () => {
      this.setState({
        visible: false
      });
    };
    onSubmit = async () => {
      const { email, password } = this.state
      const data = {
        email: email,
        password: password
      }
      const resp = await login(data);
      if (resp.code === 200) {
        await sessionStorage.setItem("access_token", resp.token);
        await message.success('Login success, Please wait');
        window.location.assign('#owner/edit');
      } else {
        await message.error('Login failed, Please try again.');
      }
    }
    render() {
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
                        onChange={(e)=>this.setState({email: e.target.value})}
                        />
                        <p>your password</p>
                        <Input.Password
                        placeholder="password"
                        onChange={(e)=>this.setState({password: e.target.value})}
                        />
                        <Col offset={9} style={{padding: '10px'}}>
                        <Button 
                        variant="outline-success" 
                        size="sm"
                        onClick={() => this.onSubmit()}
                        >
                          success
                        </Button>
                        </Col>
                    </Drawer>
                </Row>
            </div>
        )
    }
}
