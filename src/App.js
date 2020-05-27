import React from 'react';
import './App.css';
import ListItems from './ListItems';

class App extends React.Component {
  constructor(){
    super();
      this.state={
        items: [],
        currentItem:{
          text:'',
          key:''
        }
      }
  }

  handleInput= e =>{
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
    }

    addItem = e => {
      e.preventDefault();
      const newItem = this.state.currentItem;
      if (newItem.text !== "") {
        const todos = [...this.state.items, newItem]
        this.setState({
          items: todos,
          currentItem: { 
            text: "",
            key: "" 
          }
        });
      }
    };

  render(){
    return (
      <div className="App">
          <header>
            <form id="to-do-form" onSubmit={this.addItem}>
              <input type="text" placeholder="Create list" value={this.state.currentItem.text} onChange={this.handleInput} />
              <button type="submit">Add List</button>
            </form>
          </header>
          <ListItems />
      </div>
     
    );
  }
}

export default App;
