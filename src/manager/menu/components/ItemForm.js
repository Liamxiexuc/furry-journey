import React from 'react';
import { Button, Container, Form, Image, Divider} from 'semantic-ui-react';

const ItemForm = props => {
    return (
        <Container >
            <Form>

                    <Form.Field 
                        control='input'
                        label='Product Id'
                        placeholder='Product id'
                        onChange={props.handleChange}
                        defaultValue={props._id}
                
                    />
                    <Form.Field 
                        control='input'
                        label='Product Name'
                        placeholder='Product Name'
                        onChange={props.handleChange}
                        defaultValue={props.productName}  
                        value={this.state.productName}
                    />
                    <Form.Field 
                        control='input'
                        label='Price'
                        placeholder='Price'
                        onChange={props.handleChange}
                        defaultValue={props.price}
                    />
                    <Form.Field 
                        control='input'
                        label='Product Info'
                        placeholder='Product Info'
                        onChange={props.handleChange}
                        defaultValue={props.productInfo}
                    />
                    <Form.Field 
                        control='input'
                        label='Photo'
                        placeholder='Photo'
                        onChange={props.handleChange}
                        defaultValue={props.photo}
                    />
                    <Form.Field 
                        control='input'
                        label='Product Category'
                        placeholder='Product Category'
                        onChange={props.handleChange}
                        defaultValue={props.category}
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