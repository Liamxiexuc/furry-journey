import React from 'react';
import { Segment } from 'semantic-ui-react';

import OrderForm from './components/CourseForm';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import Header from '../UI/header/Header';
import { Order_BASE_URL } from '../routes/URLMap';
import { createOrder } from '../utils/api/order';

class OrderNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            orderStatus: '',
            orderTotalPrice: '',
            payStatus: '',
            receiverAddress: '',
            receiverName: '',
            receiverPhone: '',
            userId: '',
            comment: '',
            dishes: '',
            error: null,
            image: '',
            isCreating: false,
          
        };
    }

    handleChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value } );
    }

    handleCreate = () => {
        const order = { ...this.state };
        this.setState({ isCreating: true }, () => {
            createOrder(order)
                .then(newOrder => {
                    this.props.history.push(`${ORDER_BASE_URL}/${newOrder.id}`);
                })
                .catch(error => this.setState({ error }));
        });
    }

    render() {
        return (
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header as="h2" textAlign="center">
                    Create Course
                </Header>
                <Segment basic loading={this.state.isCreating}>
                    <CourseForm
                        code={this.state.code}
                        description={this.state.description}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleCreate}
                        image={this.state.image}
                        name={this.state.name}
                        submitButtonText="Create"
                    />
                </Segment>
            </React.Fragment>
        );
    }
};

export default CourseNew;