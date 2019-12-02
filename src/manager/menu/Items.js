import React from 'react';
import { Link } from 'react-router-dom';


import ItemCard from './components/ItemCard';

import { ITEM_BASE_URL } from '../../route/URLMap';
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
        this.loadItems();
        // this.setState({ isLoading: true, items: []}, () => {
        //     fetchItems(pageNum, pageSize)
        //         .then(this.updateItemData)
        //         .catch(error => this.setState({ error }));
            //         itemData => {
            //     this.setState({
            //         isLoading: false,
            //         items: itemData.items,
            //         pagination: itemData.pagination,
            //     });
            // }).catch(error => this.setState({error, isLoading: true}))
            
        
    }

    loadItems = (pageNum, pageSize) => {
        this.setState({ isLoading: true, items: []}, ()=> {
            fetchItems(pageNum, pageSize)
                .then(this.updateItemData)
                .catch(error => this.setState({error}));
        });
    }

    updateItemData = itemData => {
        this.setState({
            items: itemData.items,
            isLoading: false,
            pagination: itemData.pagination,
        })
    }

    handlePageChange = (event, data) => {
        this.loadItems(data.activePage);
    }

    

    render() {
        const currentPath = this.props.location.pathname;

        return (
            <React.Fragment>
                {/* <ErrorMessage />
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
                    
                </Container> */}
                <div className="container">
                    <div className="header">

                    </div>
                    <div className="body">
                        {this.state.items.map(item => (
                            <ItemCard 
                                
                            
                            />
                        ))

                        }
                    </div>

                </div>


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