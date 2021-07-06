import React from 'react';
import './App.css';
import Header from './classcomponents/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './classcomponents/Footer';
import Register from './functioncomponents/Register';
import Guest from './functioncomponents/Guest';
import EmployeeList from './functioncomponents/EmployeeList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="Main">
          <Route path="/" exact component={Guest} />
          <Route path="/register/:id" component={Register} />
          <Route path="/list" component={EmployeeList} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
