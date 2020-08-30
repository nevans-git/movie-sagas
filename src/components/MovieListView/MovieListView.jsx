import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';

// This is the home view

class MovieListView extends Component {

    componentDidMount(){
        // using componentDidMount to dispatch an action to request data from DB
        this.getGenres();
        this.getMoviesToDisplay();
    }

    // getting genres function
    getGenres = () => {
        this.props.dispatch({ type: 'FETCH_GENRES'})
    }

    getMoviesToDisplay(){
        console.log('Getting movies to display');

        this.props.dispatch({ type: 'DISPLAY_MOVIES' })
    }

    render(){
        return(
            <>
            {/* map through array of movies to get movies */}
            <ul>
            {this.props.reduxState.movies.map((displayMovies) => {
                console.log(displayMovies);
                return(
                    <div>
                         <h3>{displayMovies.title}</h3>
                         <img src={displayMovies.poster} />
                        <p>{displayMovies.description}</p>
                    </div>
                )
                })}
            </ul>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        reduxState
    }
}

export default connect(mapStateToProps)(MovieListView);