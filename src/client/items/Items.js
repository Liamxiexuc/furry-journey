import React from "react";
import ItemCard from "./components/ItemCard";
import { fetchItems } from "../../utils/api/item";
import { ErrorMessage } from "../../UI/errorMessage/ErrorMessage";
import { Segment, Placeholder, Rail, Ref, Sticky } from "semantic-ui-react";

import { ERROR_URL } from "../../routes/URLMap";
import Menu from "./components/Menu";
import Basket from "./components/Basket";
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

  componentWillMount() {
    this.setState({ isLoading: true }, () => {
      fetchItems()
        .then(itemData => {
          console.log(itemData);
          this.setState({
            isLoading: false,
            items: itemData.data
          });
        })
        .catch(error =>
          this.setState({ error, isLoading: false }, error => {
            this.props.history.push({ pathname: ERROR_URL, state: { error } });
          })
        );
    });
  }

  render() {
    return (
      <div className="menu-body-container">
        <Menu items={this.state.items} />
        <div className="body-right">
          <div className="body-right-sticky">
            <Basket items={this.state.items} />
          </div>
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
