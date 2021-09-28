import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json'


class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: "",
    }
  }

  onSearchFieldChange = (event) => {

    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  render()
  {
    let output =
      <>
        <div style={{width: '80%', height: '40pt', backgroundColor: 'pink', marginLeft:'auto', marginRight:'auto'}}>
        <div style={{padding: '15px', fontSize: "14px", fontWeight: "600"}}>
        Search <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
        </div> 
        </div>
        <SearchView
          items={ this.state.items.filter((item) => 
            item.name.toUpperCase().includes
            (this.state.productSearchString.toUpperCase()) 
            || 
            item.author.toUpperCase().includes
            (this.state.productSearchString.toUpperCase()))
          }
          />
      </>


    return (
      <>
        { output }
      </>
    )
  }
}

export default App;