import logo from './logo.svg';
import './App.css';
import template from './template';
import axios from 'axios';
import Row from './row'
import react,{ useState } from 'react'
import request from './requests';
import Info from './info/info'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">

    <Router>
    <Route path='/' exact>
    <Row row_title="Trending" fetch_url={request.trending}></Row>
    <Row row_title="Originals" fetch_url={request.netflixoriginals}></Row>
    <Row row_title="Top Rated" fetch_url={request.toprated}></Row>  
    <Row row_title="Action" fetch_url={request.acitonmovies}></Row>
    <Row row_title="Comedy" fetch_url={request.comedymovies}></Row>
    <Row row_title='Horror' fetch_url={request.horrormovies}/>
    </Route>
    <Route path='/info' exact>
      <Info/>
    </Route>
    </Router>


    </div>
  );
}

export default App;
