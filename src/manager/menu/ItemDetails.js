import React from 'react';
import { fetchItemById } from "../../utils/api/item";
import ItemInfo from '../menu/components/ItemInfo';
import { Header } from 'semantic-ui-react';

class ItemDetails extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isLoading: false,
            isEditing: false,
            error: null,
            item: null,
            error: null,  
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
                    itemId={this.state.item.id}
                    productName={this.state.productName}
                    price={this.state.price}
                    productType={this.state.productType}
                    productInfo={this.state.productInfo}
                    photo={this.state.photo}
                    category={this.state.category}
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