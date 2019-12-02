import { fetchItems, fetchItemsById } from "../../utils/api/item";
import ItemInfo from '../components/ItemInfo';

class ItemDetails extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isLoading: false,
            item: {},
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
        fetchItemsById(itemId)
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
                <ErrorMessage error={this.state.error}/>
                <div className="container">
                    <div className="header">
                        ItemDetails
                    </div>  
                    <ItemInfo 
                        
                    
                    />
                </div>
            </React.Fragment>
        )
    }
}