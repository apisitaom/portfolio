import React, { Component } from 'react'
import { Row, Card } from 'antd'
export default class CardNextPage extends Component {
    onChangePageComment = () => {
        window.location.assign('#/comment/lists');
    }
    onChangePageAddproducts = () => {
        window.location.assign('#product/add');
    }
    onChangepageProductLists = () => {
        window.location.assign('#product/lists');
    }
    render() {
        return (
            <div>
                <Row>
                    <Card.Grid style={{color: 'white'}} onClick={() => this.onChangePageAddproducts()} >ADD PRODUCTS</Card.Grid>
                    <Card.Grid style={{color: 'white'} } onClick={() => this.onChangepageProductLists()} >PRODUCTS LISTS</Card.Grid>
                    <Card.Grid style={{color: 'white'}} onClick={() => this.onChangePageComment()} >COMMENT LISTS</Card.Grid>
                </Row>
            </div>
        )
    }
}
