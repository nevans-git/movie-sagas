import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';

class DetailsView extends Component {

    state = {
        movieDetails: ''
    }

    getMovieDetails = () => {
        this.props.dispatch({ type: 'FETCH_DETAILS'})
    }

    backToMovieListBtn = () => {
        console.log('Send back to movies list');

        this.props.history.push('/home');
        
    }

    // NEED TO FIGURE OUT HOW TO TARGET DETAILS FOR SPECIFIC MOVIES

    render(){
        return(
            <>
            {this.props.reduxState.movies.map((displayMovieDetails) => {
                console.log(displayMovieDetails);
                return(
                <ul>
                    <h3>{displayMovieDetails.title}</h3>
                    <p>{displayMovieDetails.description}</p>
                    <button onClick={this.backToMovieListBtn}>Back To Movie List</button>
                </ul>
                )
            })}
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        reduxState
    }
}

export default connect(mapStateToProps)(DetailsView);