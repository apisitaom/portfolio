import React, { Component } from 'react'
import { Upload, message, Icon, Form, Button } from 'antd'
import { ownerAll, ownerPicture } from '../../../services/api'
import { imagurl } from '../../../services/config/apiurl'
class OwnerEditImgForm extends Component {
    state = {
      imgFile: null,
      loading: false,
      picture: '',
      id: ''
    }
    UNSAFE_componentWillMount () {
        this.onGetOwner();
    }
    onGetOwner = async () => {
        const resp = await ownerAll();        
        resp.code === 200 && this.setState({
            picture: resp.data[0].picture,
            id: resp.data[0].ownerid
        })
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
        const resp = await ownerPicture(formData);
        if (resp.code === 200) {
            window.location.assign('#');
        } else {
            message.error('Change Img failed, Please try again');
                }
            }
        })
    }
    setFormData = (values) => {
        const formData = new FormData()
        formData.append('picture', this.state.imgFile);
        formData.append('id', this.state.id);
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
        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 4,
              },
            },
          };
        return (
            <div>
                <Form style={{paddingTop: '1.2%'}} {...tailFormItemLayout} onSubmit = {this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('upload', {
                          })(
                            <Upload
                              name="avatar"
                              listType="picture-card"
                              className="avatar-uploader"
                              showUploadList={false}
                              beforeUpload={this.beforeUpload}
                            >
                            {this.state.picture ? <img src={`${imagurl}${this.state.picture}`} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        )}
                    </Form.Item>
                    <Form.Item >
                      <Button htmlType="submit"  >
                          CHANGE 
                      </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
const OwnerEditImgForms = Form.create({ name: 'product_form' })(OwnerEditImgForm);
export default OwnerEditImgForms