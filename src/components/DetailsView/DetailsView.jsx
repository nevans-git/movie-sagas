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
            <div>
                <p>SPECIFIC MOVIE DETAILS GO HERE</p>
                
                <button onClick={this.backToMovieListBtn}>Back To Movie List</button>
            </div>
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