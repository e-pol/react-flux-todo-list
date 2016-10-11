import React from 'react';
import AppDispatcher from './dispatcher/AppDispatcher';

export default React.createClass({
  displayName: 'App',
  render: function() {
    return (
      <div
        className='text-danger'
        >App
      </div>
    );
  }
});
