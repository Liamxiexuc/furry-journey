import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import ItemForm from './components/ItemForm';


import { createItem } from "../../utils/api/item";
import { ITEM_BASE_URL } from '../../route/URLMap';


class ItemNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            productName: '',
            price: '',
            productType: '',
            productInfo: '',
            photo: '',
            category: '',
            isCreating: false,
            error: null,
        };
    }

    handleChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value});
    }

    handleCreate = () => {
        const item = {...this.state};
        this.setState({ isCreating: true}, () => {
            createItem(item)
                .then(newItem => {
                    this.props.history.push(`${ITEM_BASE_URL}/${newItem.id}`);
                })
                .catch(error => this.setState({ error }));
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header >
                    Create Dish
                </Header>
                <Segment className="item-form-segment" loading={this.state.isCreating}>
                    <ItemForm 
                        id={this.state.id}
                        productName={this.state.productName}
                        price={this.state.price}
                        productType={this.state.productType}
                        productInfo={this.state.productInfo}
                        photo={this.state.photo}
                        category={this.state.category}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleCreate}
                        submitButtonText="Create"
                    />
                </Segment>
            </React.Fragment>
        );
    }
};

export default ItemNew;