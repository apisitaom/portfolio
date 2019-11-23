import React, { Component } from 'react'
import TabFrom from '../../../../froms/nav/TabFrom'
import { albumAdd } from '../../../../services/api'
import { message, Upload, Row, Col, Icon, Button, Form, Input } from 'antd'
const { TextArea } = Input
class ProductEdit extends Component {
  state = {
    imgFile: null,
    loading: false,
  }
  beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
      return false;
    }
    const reader = new FileReader();
    reader.onload = e => {
      this.setState({
        imageUrl: e.target.result
      });
    };
    reader.readAsDataURL(file);
    this.setState({
      imgFile: file
    })    
    return false;
  };
  handleSubmit = async e => {
    e.preventDefault()    
    this.props.form.validateFields(async (err, value) => {
      if (!err) {
        const formData = await this.setFormData(value);      
        const resp = await albumAdd(formData);
        if (resp.code === 200) {
          window.location.assign('#product');
        } else {
          message.error('Add Product failed, Please try again');
        }
      }
    })
  }
  setFormData = (values) => {
    const formData = new FormData()
    formData.append('picture', this.state.imgFile)    
    formData.append('detail', values.detail)    
    formData.append('url', values.url)    
    formData.append('name', values.name)    
    return formData
  }
  render() {  
    const formItemLayout = {
      labelCol: {
        xs: { span: 0 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 2,
        },
      },
    };
    const { getFieldDecorator } = this.props.form;
    const uploadButton = (
        <div>
          <Icon type={this.state.loading ? "loading" : "plus"} />
          <div className="ant-upload-text">Upload</div>
        </div>
      )
      return (
          <div>
            <Row>
              <Col>
                <TabFrom />
              </Col>
            </Row>
            <Form  style={{paddingTop: '1.2%'}} {...formItemLayout} onSubmit = {this.handleSubmit}>
                <Form.Item label="Upload" >
                  {getFieldDecorator('upload', {
                  })(
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      beforeUpload={this.beforeUpload}
                    >
                    {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                )}
                </Form.Item>
                <Form.Item label="Name"  >
                  {getFieldDecorator('name', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your names!'
                      }
                    ],
                  })(
                    <Input
                      placeholder="Product names"
                    />,
                  )}
                </Form.Item>
                <Form.Item label="URL"  >
                  {getFieldDecorator('url', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your urls!'
                      }
                    ],
                  })(
                    <Input
                      placeholder="Product urls"
                    />,
                  )}
                </Form.Item>
                <Form.Item label="Detail"  >
                  {getFieldDecorator('detail', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your details!'
                      }
                    ],
                  })(
                    <TextArea
                      placeholder="Product details"
                    />,
                  )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit"  >
                      SUBMIT
                  </Button>
                </Form.Item>
                </Form>
          </div>
      )
  }
}
const ProductEditFrom = Form.create({ name: 'product_form' })(ProductEdit);
export default ProductEditFrom
