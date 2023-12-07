import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Header';

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
