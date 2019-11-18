import React, { Component } from 'react'
import { List, Avatar, Icon, Col } from 'antd';
import profile from '../../assets/img/profile.jpg'
import star from '../../assets/img/star.png'
export default class OwnerAlbumFrom extends Component {
    render() {
    const listData = [];
        for (let i = 0; i < 23; i++) {
          listData.push({
            href: 'http://ant.design',
            title: `ant design part ${i}`,
            avatar: star,
            description:
              'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          });
        }
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
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText type="star-o" text="156" key="list-vertical-star-o" />,
          <IconText type="like-o" text="156" key="list-vertical-like-o" />,
          <IconText type="message" text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src={profile}
            />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
  <Col style={{paddingTop: '2.5%'}}>
  </Col>
            </div>
        )
    }
}
