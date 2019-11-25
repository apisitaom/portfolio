import React, { Component } from 'react'
import { List, Avatar, Icon } from 'antd';
import star from '../../assets/img/star.png'
import { albumAll, ownerAll } from '../../services/api'
import { imagurl } from '../../services/config/apiurl'
export default class OwnerAlbumFrom extends Component {
  state={
    name: '',
    album: [],
  }  
  UNSAFE_componentWillMount () {
    this.onGetOwner();
    this.onGetAlbum();
  }
  onGetOwner = async () => {
    const resp = await ownerAll();
    resp.code === 200 && this.setState({
      name: resp.data[0].name
    })
  }
  onGetAlbum = async () => {
    const resp = await albumAll();
    resp.code === 200 && await this.setState({
      album: resp.data,
    })
  }
  render() {
        const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} style={{ marginRight: 8 }} />
              {text}
            </span>
          );          
        return (
            <div>
              <List
                itemLayout="vertical"
                size="large"
                style={{paddingTop: '2.5%'}}                
                pagination={{
                  onChange: page => {
                  },
                  pageSize: 3,
                }}
                dataSource={this.state.album}
                footer={
                  <div>
                    <b>Project by</b> {this.state.name}
                  </div>
                }
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText type="star-o" text="9.9k" key="list-vertical-star-o" />,
                      <IconText type="like-o" text="9.9k" key="list-vertical-like-o" />,
                      <IconText type="message" text="9.9k" key="list-vertical-message" />,
                    ]}
                    extra={
                      <img
                        width={272}
                        alt="logo"
                        src={`${imagurl}${item.album}`}
                        />
                    }
                  >
                    <List.Item.Meta
                        avatar={<Avatar src={star} />}
                        title={<a href={item.url}>{item.name}</a>}
                        description={item.detail}
                      />
                      {item.content}
                    </List.Item>
                )}
              />
            </div>
        )
    }
}
