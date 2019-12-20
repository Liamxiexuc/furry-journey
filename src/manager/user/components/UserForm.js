import React from 'react';
import { Button, Container, Form} from 'semantic-ui-react';
import '../styles/user_form.scss';

const gender = [
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'},
    {key: 'o', text: 'Other', value: 'other'},

]

const title = [
    {key: 'mr', text: 'Mr.', value: 'Mr.'},
    {key: 'mrs', text: 'Mrs.', value: 'Mrs.'},
    {key: 'miss', text: 'Miss.', value: 'Miss'},
    {key: 'ms', text: 'Ms.', value: 'Ms.'},
]

const userType = [
    {key: '1', text: '1', value: '1'},
    {key: '0', text: '0', value: '0'}
]


const UserForm = props => {
    return (
        <Container className="item-form-container" >
            <Form className="item-form-inner">
               
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
                    <Form.Dropdown 
                        selection
                        label='Title'
                        placeholder='Title'
                        options={title}
                        onChange={props.handleSelectChange}
                        defaultValue={props.title}
                        name="title"
                    />
                    <Form.Dropdown 
                        selection 
                        label='Gender'
                        placeholder='Gender'
                        options={gender}
                        onChange={props.handleSelectChange}
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
                    <Form.Dropdown 
                        selection
                        label='User Type'
                        placeholder='User Type'
                        onChange={props.handleSelectChange}
                        defaultValue={props.userType}
                        name="userType"
                        options={userType}
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