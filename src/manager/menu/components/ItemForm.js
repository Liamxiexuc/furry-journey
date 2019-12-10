import React from 'react';
import { Button, Container, Form, Image} from 'semantic-ui-react';

const ItemForm = props => {
    return (
        <Container >
            <Form>
                <Form.Group>
                    <Form.Field 
                        label='Dish Form'
                    />
                    <Form.Field 
                        control='input'
                        label='Product Name'
                        placeholder='Product Name'
                        onChange={props.handleChange}
                        value={props.productName}
                    />
                    <Form.Field 
                        control='input'
                        label='Price'
                        placeholder='Price'
                        onChange={props.handleChange}
                        value={props.price}
                    />
                    <Form.Field 
                        control='input'
                        label='Product Type'
                        placeholder='Product Type'
                        onChange={props.handleChange}
                        value={props.productType}
                    />
                    <Form.Field 
                        control='input'
                        label='Product Info'
                        placeholder='Product Info'
                        onChange={props.handleChange}
                        value={props.productInfo}
                    />
                    <Form.Field 
                        control='input'
                        label='Photo'
                        placeholder='Photo'
                        onChange={props.handleChange}
                        value={props.photo}
                    />
                    <Form.Field 
                        control='input'
                        label='Product Category'
                        placeholder='Product Category'
                        onChange={props.handleChange}
                        value={props.category}
                    />
                </Form.Group>
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