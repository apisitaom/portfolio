import React, { Component } from 'react'
import TabFrom from '../../../../froms/nav/TabFrom'
import { albumAdd } from '../../../../services/api'
import { message, Upload, Row, Col, Icon, Button, Form } from 'antd'
class ProductEdit extends Component {
  state = {
    imgNage: 'http://localhost:4000/images/picture-1574176373901.jpg',
    imgFile: null,
    loading: false,
    btnLoading: false,
    imageName: "",
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
      const formData = await this.setFormData(value);      
      // await albumAdd(formData);
    })
  }
  setFormData = (values) => {
    const formData = new FormData()
    formData.append('picture', this.state.imgFile)    
    return formData
  }
  render() {    
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
            <Row>
              <Col span={24}>
                <Form onSubmit = {this.handleSubmit}>
                <Form.Item label="Upload" labelAlign="left">
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
                  )}
                </Form.Item>
                <Button type="primary" htmlType="submit" loading={this.state.btnLoading} >
                    SUBMIT
                </Button>
                </Form>
              </Col>
            </Row>
          </div>
      )
  }
}
const ProductEditFrom = Form.create({ name: 'product_form' })(ProductEdit);
export default ProductEditFrom
