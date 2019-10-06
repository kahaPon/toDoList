import React, {Component} from 'react';
import List from './List';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  render() {
    return (
      <div>
        <center>
          <h1>To Do List</h1>
          <form className="App" onSubmit={this.onSubmit}>
            <input size='50' value={this.state.term} onChange={this.onChange} />
            <button>Add</button>
            
          </form>
          <List items={this.state.items}/>
        </center>
        
      </div>
    );
  }
}