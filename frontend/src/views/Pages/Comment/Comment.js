import React, { Component } from 'react'
import { Drawer } from 'antd'
import { NavDropdown } from 'react-bootstrap' 
export default class Comment extends Component {
    state = {
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
                        <p>commentation please</p>
                    </Drawer>
            </div>
        )
    }
}
