import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemFilter from '../item-filter';
import ItemAddForm from '../item-add-form';

export default class App extends React.Component {
   maxId = 100;
   state = {
      todoData: JSON.parse(localStorage.getItem('todos')) || [],
      term: '',
      filter: 'all'
   };  
   createItem = (label) => {
      return {
         id: this.maxId++,
         label,
         important: false,
         done: false
      };
   };
   deleteItem = (id) => {
      this.setState(({todoData}) => {
         const idx = todoData.findIndex(item => id === item.id);
         const updatedTodos = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

         return {
            todoData: updatedTodos
         };
      });
   };
   addNewTodoItem = (label) => {
      const newItem = this.createItem(label);
      
      this.setState(({todoData}) => {
         const shallowArr = [
            ...todoData,
            newItem
         ];
         return {
            todoData: shallowArr
         };
      });
   };
   onToggleDone = (id) => {
      this.setState(({todoData}) => {
         return {
            todoData: this.toggleProperty(todoData, id, 'done')
         };
      });
   };
   onToggleImportant = (id) => {
      this.setState(({todoData}) => {
         return {
            todoData: this.toggleProperty(todoData, id, 'important')
         };
      });
   };
   toggleProperty = (todoData, id, propName) => {
      const idx = todoData.findIndex(el => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};
      const newArr = [...todoData];
      newArr.splice(idx, 1, newItem);
      
      return newArr;
   };
   onSearch = (term) => {
      this.setState({term});
   };
   onBtnClick = (filter) => {
      this.setState({filter});
   };
   search = (todoData, term) => {
      if(term.length === 0) {
         return todoData;
      }
      return todoData.filter(item => {
         return item.label
                        .toLowerCase()
                        .indexOf(term.toLowerCase()) > -1;
      });
   };
   filter = (todoData, filter) => {
      switch(filter) {
         case 'all':
            return todoData;
         case 'active':
            return todoData.filter(item => {
               return !item.done;
            });
         case 'done':
            return todoData.filter(item => {
               return item.done;
            });
         default:
            return todoData;
      }
   };

   render() {
      const {todoData, term, filter} = this.state;
      const countDone = todoData.filter(el => el.done).length;
      const countNotDone = todoData.filter(el => !el.done).length;
      const visibleItems = this.filter(this.search(todoData, term), filter);
      localStorage.setItem('todos', JSON.stringify(todoData));

      return(
         <div className="container">
            <div className="row justify-content-center">
               <div className='col-lg-7 col-md-9 todo-app'>
                  <AppHeader done={countDone} 
                             notDone={countNotDone}
                  />
                  <div className="info-panel row no-gutters my-3">
                     <SearchPanel onSearch={this.onSearch} />
                     <ItemFilter onBtnClick={this.onBtnClick} />
                  </div>               
                  <TodoList todoData={visibleItems} 
                            onDeleted={this.deleteItem}
                            onToggleDone={this.onToggleDone}
                            onToggleImportant={this.onToggleImportant}
                  />
                  <ItemAddForm addNewTodoItem={this.addNewTodoItem} />
               </div>
            </div> 
         </div>
      );
      
           
   };
};