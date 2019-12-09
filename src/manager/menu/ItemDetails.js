import React from 'react';
import { fetchItems, fetchItemById } from "../../utils/api/item";
import ItemInfo from '../menu/components/ItemInfo';

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
        // this.setState({ isLoading: true}, () => {
        //     fetchItemsById(itemId).then(item => this.setState({
        //         item,
        //         isLoading: false,
        //     }))
        //     .catch(error => this.setState({ 
        //         error, 
        //         isLoading: false,
        //     }))
            
        // })
        this.loadItem(itemId);
    }

    loadItem = itemId => this.setState({ isLoading: true}, () => {
        fetchItemById(itemId)
            .then(item => this.setState({ item, isLoading: false}))
            .catch(this.setErrorState);
    });

    // deleteItem = () => {
    //     if (window.confirm('Are you sure?')) {
    //         const itemId = this.props.match.params.id;
    //         this.setState({ isDeleting: true}, () => {
    //             this.deleteItemById(itemId).then(() => {
    //                 this.props.history.replace()
    //             });
    //         })
    //     }
        
    // }

    setErrorState = error => this.setState({error});

    render() {
        return(
            <React.Fragment>
                
                <div className="container">
                    <div className="header">
                        ItemDetails
                    </div>  

                </div>
            </React.Fragment>
        )
    }
}

export default ItemDetails;