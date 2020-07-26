import React from 'react';
import './search-panel.css';

export default class SearchPanel extends React.Component {
   state = {
      term: ''
   };
   onSearch = (e) => {
      const term = e.target.value;
      this.setState({term});
      this.props.onSearch(term);
   };

   render() {
      return (
         <input type="text" 
                placeholder="Search" 
                className='pl-3 col-md-7 search'
                value={this.state.term}
                onChange={this.onSearch}
         />
      );
   }   
};