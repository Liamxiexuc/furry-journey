import React from 'react';
import {Button, Container, Form, Image } from 'semantic-ui-react';

const OrderForm = props => {
    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Field     
                        label='Order Form'     
                    />
                    <Form.Field 
                        control='input'
                        label='Order Status'
                        placeholder='Order Status'
                        onChange={props.handleChange}
                        value={props.orderStatus}
                    />
                    <Form.Field 
                        control='input'
                        label='Order Total Price'
                        placeholder='Order Total Price'
                        onChange={props.handleChange}
                        value={props.orderTotalPrice}
                    />
                    <Form.Field 
                        control='input'
                        label='Pay Status'
                        placeholder='Pay Status'
                        onChange={props.handleChange}
                        value={props.payStatus}
                    />
                    <Form.Field 
                        control='input'
                        label='Receiver Addresss'
                        placeholder='Receiver Addresss'
                        onChange={props.handleChange}
                        value={props.receiverAddresss}
                    />
                    <Form.Field 
                        control='input'
                        label='Receiver Name '
                        placeholder='Receiver Name'
                        onChange={props.handleChange}
                        value={props.receiverName}
                    />
                    <Form.Field 
                        control='input'
                        label='Receiver Phone'
                        placeholder='Receiver Phone'
                        onChange={props.handleChange}
                        value={props.receiverPhone}
                    />
                    <Form.Field 
                        control='input'
                        label='Comment'
                        placeholder='Comment'
                        onChange={props.handleChange}
                        value={props.comment}
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

export default OrderForm