import React from 'react';
import ItemCard from './components/ItemCard';
import './styles/item.scss';
import { fetchItems } from '../../utils/api/item';

class Items extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoading: false,
            error: null,
            pagination: {},
            
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true}, () => {
            fetchItems().then(itemData => {
                this.setState({
                    isLoading: false,
                    items: itemData.items,
                    pagination: itemData.pagination,
                });
            }).catch(error => this.setState({error, isLoading: true}))
            
        });
    }

    loadItems = (pageNum, pageSize) => {
        this.setState({ isLoading: true, items: []}, ()=> {
            fetchItems(pageNum, pageSize)
                .then(this.updateItemData)
                .catch(error => this.setState({error}));
        });
    }

    

    render() {
        return (
            <React.Fragment>
                <ErrorMessage />
                <Header>

                </Header>
                <Container>
                    <Button as={Link} to={`${ITEM_BASE_URL}/new`} primary>

                    </Button>
                    <Segment>
                        <FlexContainer>
                            {
                                this.state.items.map(item => (
                                    <ItemCard 
                                        itemName = {item.name}
                                        itemDescritpion={item.description}
                                    />
                                ))
                            }
                        </FlexContainer>
                    </Segment>
                    
                </Container>
                 
            </React.Fragment>
        )
    }
}


const Items = () => {
    return (
        <div>
           <ItemCard /> 
           <ItemCard /> 
        </div>
    )   
};

export default Items;