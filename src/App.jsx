import React, {Component}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './component/home.jsx';
import About from './component/about.jsx';
import News from './component/news.jsx';
import CustomNavbar from './component/customNavbar'

class App extends Component{
  render (){
    return (
      <div>
        
        <Router>
        <div>
          <CustomNavbar/>
          <br/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </div>
      </Router>
      </div>
      
    );
  }
 
}

export default App;