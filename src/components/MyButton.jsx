import React from 'react';

const MyButton = ({ message, onClick }) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={onClick}>
        Click Me
        {message}
      </button>
    </div>
  );
};

export default MyButton;