import React from 'react';
import {Button, Container, Form, Image } from 'semantic-ui-react';

const OrderForm = props => {
    return (
        <Container>
            <Form>
                <Form.Field>
                    <label> Order Here </label>
                    <input
                        name="id"
                        onChange={props.handleChange}
                        placeholder="Order Here"
                        value={props.id}
                    />
                </Form.Field>
                <Form.Field>
                    
                </Form.Field>
            </Form>
        </Container>
    )
}