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

    deleteItem = key => {

      const filteredItems= this.state.items.filter(item =>
        item.key!==key);
      this.setState({
        items: filteredItems
      })
  
      
    };

    setUpdate = (text, key) => {

      console.log("items:"+this.state.items);
      const items = this.state.items;
      items.map(item=>{      
        if(item.key===key){
          console.log(item.key +"    "+key)
          item.text= text;
        }
      })
      this.setState({
        items: items
      })
      
    };

    setUpdate

  render(){
    return (
      <div className="App">
          <header>
            <form id="to-do-form" onSubmit={this.addItem}>
              <input type="text" placeholder="Create list" value={this.state.currentItem.text} onChange={this.handleInput} />
              <button type="submit">Add List</button>
            </form>
          </header>
          <ListItems 
          deleteItem={this.deleteItem} 
          items={this.state.items}
          setUpdate={this.setUpdate} />
      </div>
     
    );
  }
}

export default App;
