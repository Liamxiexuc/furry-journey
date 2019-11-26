import { fetchItems, fetchItemsById } from "../../utils/api/item";

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
        this.setState({ isLoading: true}, () => {
            fetchItemsById(itemId).then(item => this.setState({
                item,
                isLoading: false,
            }))
            .catch(error => this.setState({ 
                error, 
                isLoading: false,
            }))
            
        })
    }

    deleteItem = () => {
        if (window.confirm('Are you sure?')) {
            const itemId = this.props.match.params.id;
            this.setState({ isDeleting: true}, () => {
                this.deleteItemById(itemId).then(() => {
                    this.props.history.replace()
                });
            })
        }
        
    }

    render() {
        return(
            <React.Fragment>
                <ErrorMessage />
            </React.Fragment>
        )
    }
}