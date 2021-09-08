import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={() => this.setState({ items: [...this.state.items, {id: 5, value: "Oatmilk", qty: getRndInteger(1,10), unit: "ltr"}]})}>Oatmilk</button>
      <button onClick={() => this.setState({ items: [...this.state.items, {id: 5, value: "Popcorn", qty: getRndInteger(1,10), unit: "pcs"}]})}>Popcorn</button>
      <button onClick={() => this.setState({ items: [...this.state.items, {id: 5, value: "Chocolate", qty: getRndInteger(1,10), unit: "bars"}]})}>Chocolate</button>
      <button onClick={() => this.setState({ items: [...this.state.items, {id: 5, value: "Cornflakes", qty: getRndInteger(1,10), unit: "pcs"}]})}>Cornflakes</button>
    </div>
  }
}

export default App;