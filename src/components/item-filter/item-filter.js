import React from 'react';
import './item-filter.css';

export default class ItemFilter extends React.Component {
   buttons = [
      {filter: 'all', label: 'All', id: 1},
      {filter: 'active', label: 'Active', id: 2},
      {filter: 'done', label: 'Done', id:3}
   ];
   
   render() {
      const {onBtnClick} = this.props;
      const buttons = this.buttons.map(({filter, label, id}) => {
         return(
            <button type="button" 
                    className="btn btn-secondary" 
                    key={id}
                    onClick={() => onBtnClick(filter)}
            >
                    {label}
            </button>
         );
      });
      return(
         <div className="btn-group ml-auto col-md-4 filter-btns">
            {buttons}
         </div>
      );
   }
}