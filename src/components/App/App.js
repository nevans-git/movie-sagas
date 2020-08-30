import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css'; 
import AddMovieView from '../AddMovieView/AddMovieView';
import DetailsView from '../DetailsView/DetailsView';
import MovieListView from '../MovieListView/MovieListView';

// Acting as 'Home Page / Movie List Page'
class App extends Component {


  // Renders the entire app on the DOM
  render() {
    return (
      <>
      <div className="App">
        <h1>Movies</h1>
        <p>Click an image to see their details!</p>
        <Router>
          {/* ADD PAGES! */}
          <div>
            <ul>
              <li><Link to="/home">Movie List</Link></li>
              <li><Link to="/add-movies">Add A Movie</Link></li>
              <li><Link to="/details">Movie Details</Link></li>
            </ul>

            <Route exact path="/home" component={MovieListView}/>
            <Route exact path="/add-movies" component={AddMovieView}/>
            <Route exact path="/details" component={DetailsView} />

          </div>
        </Router>
      </div>
      </>
    );
  }
}


export default App;
