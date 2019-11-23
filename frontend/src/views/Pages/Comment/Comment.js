import React, { Component } from 'react'
import { Drawer, Input, Divider, Button, Col, Icon } from 'antd'
import { NavDropdown } from 'react-bootstrap' 
import { commentAdd } from '../../../services/api'
const { TextArea } = Input;
export default class Comment extends Component {
    state = {
        visible: false,
        placement: 'right',
        comment: ''
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
    onChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
    } 
    onSubmit = () => {
      const data = {
        comment: this.state.comment
      }
      window.location.reload();
      commentAdd(data);
    }
    render() {
        return (
            <div>
                <NavDropdown.Item onClick={() => this.showDrawer()} >Comment</NavDropdown.Item>
                <Drawer
                  placement={this.state.placement}
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.visible}
                  width={'50%'}
                >
                  <p>COMMENT</p>
                  <Divider />
                  <Icon type="user" style={{fontSize:'150%'}} />
                  <Col style={{paddingTop:'1.5%'}}>
                  <TextArea 
                  name="comment"
                  onChange={this.onChange}
                  style={{height: '150px'}}
                  placeholder="add some comment"
                  />                    
                  </Col>
                  <Col style={{paddingTop:'1.5%'}}>
                    <Button 
                    onClick={this.onSubmit}
                    type="primary">
                      Add Comment
                    </Button>
                  </Col>
                </Drawer>
            </div>
        )
    }
}
