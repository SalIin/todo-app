import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component {
   render() {
      const { label, onDeleted, onToggleDone, onToggleImportant, done, important } = this.props;
      let classNames = "todo-list-item d-flex";

      if(done) {
         classNames += ' done';
      }
      if(important) {
         classNames += ' important';
      }
      
      return (
         <div className={ classNames }>
            <span className="label"
                  onClick={ onToggleDone }
            >
               { label }
            </span>
            <div className="btns-wrapper ml-auto">
               <button type="button" className="delete-btn"
                                     onClick={ onDeleted }
                                     
               >
                  <i className="fa fa-trash" aria-hidden="true"></i>
               </button>
               <button type="button" className="important-btn"
                                     onClick={ onToggleImportant }
               >
                  <i className="fa fa-exclamation" aria-hidden="true"></i>
               </button>
            </div>         
         </div>      
      );
   }
}