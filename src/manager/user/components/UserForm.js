import React from 'react';
import { Button, Container, Form, Image} from 'semantic-ui-react';

const UserForm = props => {
    return (
        <Container >
            <Form>
               
                <Form.Field 
                        control='input'
                        label='User Id'
                        placeholder='User Id'
                        onChange={props.handleChange}
                        value={props._id}
                        name="id"
                    />
                    <Form.Field 
                        control='input'
                        label='First Name'
                        placeholder='First Name'
                        onChange={props.handleChange}
                        defaultValue={props.firstName}
                        name="firstName"
                    />
                    <Form.Field 
                        control='input'
                        label='Last Name'
                        placeholder='Last Name'
                        onChange={props.handleChange}
                        defaultValue={props.lastName}
                        name="lastName"
                    />
                    <Form.Field 
                        control='input'
                        label='E-mail'
                        placeholder='Read only' 
                        readOnly
                        defaultValue={props.email}
                        name="email"
                    />
                    <Form.Field 
                        control='input'
                        label='Title'
                        placeholder='Title'
                        onChange={props.handleChange}
                        defaultValue={props.title}
                        name="title"
                    />
                    <Form.Field 
                        control='input'
                        label='Gender'
                        placeholder='Gender'
                        onChange={props.handleChange}
                        defaultValue={props.gender}
                        name="gender"
                    />
                    <Form.Field 
                        control='input'
                        label='Phone'
                        placeholder='Phone'
                        onChange={props.handleChange}
                        defaultValue={props.phone}
                        name="phome"
                    />
                    <Form.Field 
                        control='input'
                        label='Birthday'
                        placeholder='Birthday'
                        onChange={props.handleChange}
                        defaultValue={props.birthDay}
                        name="birthDay"
                    />
                    <Form.Field 
                        control='input'
                        label='Address'
                        placeholder='Address'
                        onChange={props.handleChange}
                        defaultValue={props.address}
                        name="address"
                    />
                    <Form.Field 
                        control='input'
                        label='User Type'
                        placeholder='User Type'
                        onChange={props.handleChange}
                        defaultValue={props.userType}
                        name="userType"
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

export default UserForm;