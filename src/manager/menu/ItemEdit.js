import React from 'react';
import ItemForm from './components/ItemForm';
//import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import { ITEM_BASE_URL } from '../route/URLMap';
import {fetchItemById, saveItemById} from '../utils/api/item';

class ItemEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            error: null,
            productName: '',
            price: '',
            productType: '',
            productInfo: '',
            photo: '',
            category: '',
            isLoading: false,
            isSaving: false,
            
        }
    }

    componentDidMount() {
        const itemId = this.props.match.params.id;
        this.setState( {isLoading: true}, () => {
            fetchItemById(itemId)
                .then(item => this.setState ({
                    id: item.id,
                    productName: item.productName,
                    price: item.price,
                    productType: item.productType,
                    productInfo: item.productInfo,
                    photo: item.photo,
                    category: item.category,
                    isLoading: false,
                    isSaving: false,
                }))
                .catch(error => this.setState({ error }));
        });
    }

    handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value } );
    }

    handleSave = () => {
        const item = {...this.state};
        const id = this.props.match.params.id;
        this.setState({ isSaving: true}, () => {
            saveItemById(id, item)
                .then(() => this.props.history.push(`${COURSE_BASE_URL}/${id}`))
                .catch(error => this.setState({ error }));
        });
    }

    render() {
        return (
            <React.Fragment>
                 
                <div className="container">
                    <div class="header">

                    </div>
                    <div >

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ItemEdit;