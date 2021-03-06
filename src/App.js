
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu';

import Navigation from './Component/HomeNav/Navigation';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Fragment } from 'react';
import Header from './Pages/Header/Header';
import Media from 'react-media';
// import MobileHeader from './Component/MobileHeader/MobileHeader';
import Blog from './Component/Blog/Blog';
import MobileHeader from './Pages/MobileHeader/MobileHeader';
import Test from './Component/Test/Test';





function App() {
  return (
    <Fragment>
    <Media queries={{
      small: "(max-width: 425px)",
      medium: "(min-width: 426px)",
    }}> 
    {matches => (
            <Fragment>
              {matches.small && 
              <Router>
                <Switch>
                  <Route path="/home">
                    <MobileHeader> </MobileHeader>
                  </Route>
                  <Route path="/blog"> 
                    <Blog></Blog>
                    </Route>
                  <Route exact path="/">
                    <MobileHeader> </MobileHeader>
                  </Route>
                  
                </Switch>
              </Router>
              }
              {matches.medium && 
              <Router>
                <Switch>
                  <Route path="/home"> <Header></Header></Route>
                  <Route path="/blog"> <Blog></Blog> </Route>
                  <Route exact path="/test"> <Test></Test></Route>
                  <Route exact path="/*"> <Header></Header></Route>
                
                </Switch>
              </Router>
              }
       
            </Fragment>
          )}
    </Media>
    </Fragment>

  
    );
      
  
}

export default App;
