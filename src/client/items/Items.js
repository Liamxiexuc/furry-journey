import React from "react";
import ItemCard from "./components/ItemCard";
import { fetchItems } from "../../utils/api/item";
import { ErrorMessage } from "../../UI/errorMessage/ErrorMessage";
import { Segment, Placeholder } from "semantic-ui-react";

import "./styles/items.scss";

class Items extends React.Component {
  //    history 仅限于传给它的一级使用
  // const { history } = props;
  // history.push('/home');
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      fetchItems()
        .then(itemData => {
          this.setState({
            isLoading: false
            //items: itemData.items,
          });
        })
        .catch(error => this.setState({ error, isLoading: false }));
    });
  }

  render() {
    return (
      <div className="menu-body-container">
        <ErrorMessage error={this.state.error} />
        <div className="body-left">
          <div className="body-left-block">
            <h1>Favorites</h1>
            <div className="body-item-container">
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          </div>
          <div className="body-left-block">
            <h1>Premium Pizzas</h1>
            <div className="body-item-container">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          </div>
          <div className="body-left-block">
            <h1>Drinks</h1>
            <div className="body-item-container">
              <ItemCard />
              <ItemCard />
            </div>
          </div>
          <div className="body-left-block">
            <h1>Sides</h1>
            <div className="body-item-container">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          </div>
        </div>
        <div className="body-right">
          <Placeholder style={{ height: 500, width: 270 }}>
            <Placeholder.Image />
          </Placeholder>
        </div>
      </div>
    );
  }
}

export default Items;

/*   {
              this.state.items.map(item => (
                <ItemCard
                  
                  itemName={item.name}
                  itemDescription={item.description}
                />
              ));
            } */
