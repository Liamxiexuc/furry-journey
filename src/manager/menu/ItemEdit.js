import React from 'react';
import { Segment, Container, Form, Button } from 'semantic-ui-react';

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
            
            productName: '',
            price: '',
 
            productInfo: '',
            photo: '',
            category: '',
            isLoading: false,
            isSaving: false,
            error: null,
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
        delete item.isLoading;
        delete item.isSaving;
        delete item.error;
        
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

                    {/* <Container >
                                <Form>

                                        <Form.Field 
                                            control='input'
                                            label='Product Id'
                                            placeholder='Product id'
                                            handleChange={this.handleChange}
                                            defaultValue={this.state.id}
                                    
                                        />
                                        <Form.Field 
                                            control='input'
                                            label='Product Name'
                                            placeholder='Product Name'
                                            handleChange={this.handleChange}
                                            productName={this.state.productName}
                                        />
                                        <Form.Field 
                                            control='input'
                                            label='Price'
                                            placeholder='Price'
                                            handleChange={this.handleChange}
                                            price={this.state.price}
                                        />
                                        <Form.Field 
                                            control='input'
                                            label='Product Info'
                                            placeholder='Product Info'
                                            handleChange={this.handleChange}
                                            productInfo={this.state.productInfo}
                                        />
                                        <Form.Field 
                                            control='input'
                                            label='Photo'
                                            placeholder='Photo'
                                            handleChange={this.handleChange}
                                            photo={this.state.photo}
                                        />
                                        <Form.Field 
                                            control='input'
                                            label='Product Category'
                                            placeholder='Product Category'
                                            handleChange={this.handleChange}
                                            category={this.state.category}
                                        />
                                    
                                    <Button 
                                        disabled={this.isButtonDisabled}
                                        handleSubmit={this.handleSave}
                                        submitButtonText="Save"
                                        >
                                             save
                                    </Button>
                                </Form>
                            </Container>                     */}
                </Segment>
            </React.Fragment>
        );
    }
}

export default ItemEdit;