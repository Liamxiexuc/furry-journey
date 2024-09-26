import React from 'react';
import { Button, Container, Form } from 'semantic-ui-react';

import '../styles/item_form.scss';

const category = [
    {key: 'p', text: 'pizza', value: 'pizza'},
    {key: 'd', text: 'drinks', value: 'drinks'},
    {key: 's', text: 'sides', value: 'sides'}

]

const ItemForm = props => {
    return (
        <Container className="item-form-container">
            <Form className="item-form-inner">

                    <Form.Field 
                        control='input'
                        label='Product Id'
                        placeholder='Product id'
                        onChange={props.handleChange}
                        defaultValue={props._id}
                        name="id"
                    />
                    <Form.Field 
                        control='input'
                        label='Product Name'
                        placeholder='Product Name'
                        onChange={props.handleChange}
                        defaultValue={props.productName}  
                        name="productName" 
                    />
                    <Form.Field 
                        control='input'
                        label='Price'
                        placeholder='Price'
                        onChange={props.handleChange}
                        defaultValue={props.price}
                        name="price"
                    />
                    <Form.Field 
                        control='input'
                        label='Product Info'
                        placeholder='Product Info'
                        onChange={props.handleChange}
                        defaultValue={props.productInfo}
                        name="productInfo"
                        
                    />
                    <Form.Field 
                        control='input'
                        label='Photo'
                        placeholder='Photo'
                        onChange={props.handleChange}
                        defaultValue={props.photo}
                        name="photo"
                    />
                    <Form.Dropdown                       
                        label='Product Category'
                        placeholder='Product Category'
                        selection
                        options={category}
                        onChange={props.handleCategoryChange}
                        defaultValue={props.category}
                        name="category"
                    />
                 
                <Button 
                    disabled={props.isButtonDisabled}
                    onClick={props.handleSubmit}
                    >
                        {props.submitButtonText}
                </Button>
            </Form>
        </Container>
    );
};

export default ItemForm;