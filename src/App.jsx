import React, {Component}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './component/home.jsx';
import About from './component/about.jsx';
import News from './component/news.jsx';
import Navbar from './component/customNavbar'
import Footer from './component/footer'

class App extends Component{
  render (){
    return (
      <div>
        <Navbar/>
        <Router>
          <div>
            <br/>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
          </div>
        </Router>
        
        <Footer/>
      </div>
      
    );
  }
 
}

export default App;