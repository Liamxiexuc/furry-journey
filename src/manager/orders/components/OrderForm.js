import React from 'react';
import {Button, Container, Form, Image } from 'semantic-ui-react';
import DishRow from "./dishComponents/DishRow";

const OrderForm = props => {
    return (
        <Container>
            <Form>

                <Form.Field 
                    control='input'
                    label='Order Status'
                    placeholder='Order Status'
                    onChange={props.handleChange}
                    defaultValue={props.orderStatus}
                    name="orderStatus"
                />
                <Form.Field 
                    control='input'
                    label='Order Total Price'
                    placeholder='Order Total Price'
                    onChange={props.handleChange}
                    defaultValue={props.orderTotalPrice}
                    name="orderTotalPrice"
                />
                <Form.Field 
                    control='input'
                    label='Pay Status'
                    placeholder='Pay Status'
                    onChange={props.handleChange}
                    defaultValue={props.payStatus}
                    name="payStatus"
                />
                <Form.Field 
                    control='input'
                    label='Receiver Name '
                    placeholder='Read only' 
                    readOnly 
                    onChange={props.handleChange}
                    defaultValue={props.receiverName}
                    name="receiverName"
                />
                <Form.Field 
                    control='input'
                    label='Receiver Address '
                    placeholder='Receiver Address'
                    onChange={props.handleChange}
                    defaultValue={props.receiverAddress}
                    name="Receiver Address"
                />
                <Form.Field 
                    control='input'
                    label='Receiver Phone'
                    placeholder='Receiver Phone'
                    onChange={props.handleChange}
                    defaultValue={props.receiverPhone}
                    name="receiverPhone"
                />                
                <Form.Field 
                    control='input'
                    label='Dishes'
                    placeholder='Dishes'
                    onChange={props.handleChange}
                    defaultValue={props.dishes}
                    name="dishes"
                />


                <Form.Field 
                    control='input'
                    label='Comment'
                    placeholder='Comment'
                    onChange={props.handleChange}
                    defaultValue={props.comment}
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

export default OrderForm;