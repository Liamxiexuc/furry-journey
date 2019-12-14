import React from 'react';
import { Segment } from 'semantic-ui-react';

import ItemForm from './components/ItemForm';
import ErrorMessage from '../../UI/ErrorMessage/errorMessage';
import Header from '../../UI/header/Header';
import { ITEM_BASE_URL } from '../../route/URLMap';
import {fetchItemById, saveItemById} from '../../utils/api/item';

import { throwStatement } from '@babel/types';

class ItemEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            error: null,
            productName: '',
            price: '',
 
            productInfo: '',
            photo: '',
            category: '',
            isLoading: false,
            isSaving: false,
            
        }
    }

    componentDidMount() {
        const itemId = this.props.match.params.id;
        console.log(itemId);
        this.setState( {isLoading: true}, () => {
            fetchItemById(itemId)
                .then(item => this.setState (
                    {
                    id: itemId,
                    productName: item.productName,
                    price: item.price,
                    productInfo: item.productInfo,
                    photo: item.photo,
                    category: item.category,
                    isLoading: false,
                    isSaving: false,
                })
                
                )
                .catch(error => this.setState({ error }));
        });
    }

    handleChange = (event, data) => {
        const key = event.target.name;
        console.log(event.target.name);
        console.log(event.target.value);
   
 
        const value = event.target.value;
        this.setState({ [key]: value } );
    }

    handleSave = () => {
        const item = {...this.state};
        console.log(item);
        const id = this.props.match.params.id;
        this.setState({ isSaving: true}, () => {
            saveItemById(id, item)
                .then(
                    console.log(item),
                    () => this.props.history.push(`${ITEM_BASE_URL}/${id}`))
                .catch(error => this.setState({ error }));
        });
    }

    render() {
        return (
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header >
                    Edit Dish
                </Header>
                <Segment loading={this.state.isLoading || this.state.isSaving} >
                    <ItemForm 
                        id={this.state.id}
                        productName={this.state.productName}
                        price={this.state.price}
                        productInfo={this.state.productInfo}
                        photo={this.state.photo}
                        category={this.state.category}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSave}
                        submitButtonText="Save"
                    />
                </Segment>
            </React.Fragment>
        );
    }
}

export default ItemEdit;