import React from 'react';
import { Button, Container, Form, Image} from 'semantic-ui-react';

const UserForm = props => {
    return (
        <Container >
            <Form>
                <Form.Group>
                    <Form.Field 
                        label='User Form'
                    />
                    <Form.Field 
                        control='input'
                        label='First Name'
                        placeholder='First Name'
                        onChange={props.handleChange}
                        value={props.firstName}
                    />
                    <Form.Field 
                        control='input'
                        label='Last Name'
                        placeholder='Last Name'
                        onChange={props.handleChange}
                        value={props.lastName}
                    />
                    <Form.Field 
                        control='input'
                        label='E-mail'
                        placeholder='E-mail'
                        onChange={props.handleChange}
                        value={props.productType}
                    />
                    <Form.Field 
                        control='input'
                        label='Title'
                        placeholder='Title'
                        onChange={props.handleChange}
                        value={props.productInfo}
                    />
                    <Form.Field 
                        control='input'
                        label='Gender'
                        placeholder='Gender'
                        onChange={props.handleChange}
                        value={props.photo}
                    />
                    <Form.Field 
                        control='input'
                        label='Phone'
                        placeholder='Phone'
                        onChange={props.handleChange}
                        value={props.category}
                    />
                    <Form.Field 
                        control='input'
                        label='Birthday'
                        placeholder='Birthday'
                        onChange={props.handleChange}
                        value={props.category}
                    />
                    <Form.Field 
                        control='input'
                        label='Address'
                        placeholder='Address'
                        onChange={props.handleChange}
                        value={props.category}
                    />
                    <Form.Field 
                        control='input'
                        label='User Type'
                        placeholder='User Type'
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

export default UserForm;