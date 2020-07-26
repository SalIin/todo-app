import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = ({todoData, onDeleted, onToggleDone, onToggleImportant}) => {
   let elements;
   if(todoData.length === 0) {
      elements = <i>You have no things to do.. It's nice time to start!</i>
   } else {
      elements = todoData.map(item => {
         const {id, ...itemProps} = item;
         return (
            <li key={id} className='list-group-item'>
               <TodoListItem {...itemProps}
                             onDeleted={() => onDeleted(id)}
                             onToggleDone={() => onToggleDone(id)}
                             onToggleImportant={() => onToggleImportant(id)}
               />
            </li>
         );
      });
   }
   
   return (
      <ul className='list-group todo-list'>
         {elements}
      </ul>
   );
};

export default TodoList;