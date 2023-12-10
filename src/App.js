import React from 'react';
import ReactDOM from 'react-dom';
//import Navbar from './components/Header';
import Sign_up from './components/log-sup/sign_up';
import Usest from './components/Usest';

const App = () => {
  return (
    <div>
      <Sign_up/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
