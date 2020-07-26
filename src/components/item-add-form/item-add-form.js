import React from 'react';
import './item-add-form.css';

export default class ItemAddForm extends React.Component {
   state = {
      label: ''
   };
   onTodoInputChanged = (e) => {
      this.setState({
         label: e.target.value
      });
   };
   onSubmit = (e) => {
      e.preventDefault();
      this.props.addNewTodoItem(this.state.label);
      this.setState({
         label: ''
      });
   };

   render() {
      let inputClasses = "w-100 mt-3 d-flex";
      return(
         <form className="add-todo d-flex"
               onSubmit={this.onSubmit}
         >
            <div className={inputClasses}>
               <input type="text" 
                      className="form-control mr-2 todo-label" 
                      placeholder="Type here to add new item"
                      onChange={this.onTodoInputChanged} 
                      value={this.state.label}
               />
               <button type="submit" 
                       className="btn btn-dark"
               >
                  Add
               </button>
            </div>
         </form>
      );
   }   
};