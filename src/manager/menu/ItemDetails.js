import React from 'react';
import ItemInfo from '../menu/components/ItemInfo';

import ErrorMessage from '../../UI/ErrorMessage/errorMessage';
import Header from '../../UI/header/Header';
import { fetchItemById } from "../../utils/api/item";


class ItemDetails extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isLoading: false,
            isEditing: false,
            error: null,
            item: {}, 
        };
    }

    componentDidMount() {
        const itemId = this.props.match.params.id;

        this.loadItem(itemId);
    }

    loadItem = itemId => this.setState({ isLoading: true}, () => {
        fetchItemById(itemId)
            .then(item => this.setState({ item, isLoading: false}))
            .catch(this.setErrorState);
    });


    setErrorState = error => this.setState({error});

    render() {
        return(
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header >
                    Dish Details
                </Header>
                <ItemInfo 
                    itemId={this.state.item._id}
                    productName={this.state.item.productName}
                    price={this.state.item.price}
                    productInfo={this.state.item.productInfo}
                    category={this.state.item.category}
                    isLoading={this.state.isLoading}
                    photo={this.state.item.photo}
                    reloadPage={this.loadItem}
                    setErrorState={this.setErrorState}
                />
            </React.Fragment>
        )
    }
}

export default ItemDetails;