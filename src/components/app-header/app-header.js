import React from 'react';
import './app-header.css';

const AppHeader = (props) => {
   const {done, notDone} = props;
   return (
      <div className="app-header">
         <h1 className='app-header__title'>Todo List</h1>
         <p className='app-header__done-info'>{done} items done / {notDone} more to do</p>
      </div>
   );
};

export default AppHeader;