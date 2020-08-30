import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

// Acting as 'Add Movie Page'
class AddMovieView extends Component {
    
    state = {
        newMovie: '',
        newMovieUrl: '',
        newMovieDescription: ''

    }


    handleAddMovieInput = (event) => {
        console.log('event happened in handleAddMovieInput');

        // configuring new movie
        this.setState({
            newMovie: event.target.value,

        });
    }

    handleAddMovieUrlInput = (event) => {
        console.log('event happened in handleAddMovieUrlInput');

        // configuring new movie url
        this.setState({
            newMovieUrl: event.target.value
        })
    }

    handleAddMovieDescInput = (event) => {
        console.log('event happened in handleAddMovieDescInput');

        // configuring new movie description
        this.setState({
            newMovieDescription: event.target.value
        })
    }

    handleNewMovieSave = () => {
        console.log('new movie added to DB!');

        this.props.history.push('/home')

    }

    cancleBtn = () => {
        
        this.props.history.push('/home');
    }

    render(){
        return(
            <>
            <h3>Add A Movie</h3>
            <input type="text" placeholder="Add Movie" onChange={this.handleAddMovieInput}/>
            <h3>Poster URL</h3>
            <input type="text" placeholder="Add Poster URL" onChange={this.handleAddMovieUrlInput}></input>
            <h3>Description</h3>
            <input type="text" placeholder="Add Movie Description" onChange={this.handleAddMovieDescInput}></input>
            <br />
            <button onClick={this.handleNewMovieSave}>Save</button>
            <button onClick={this.cancleBtn}>Cancel</button>

            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return(
        reduxState
    )
}

export default connect(mapStateToProps)(AddMovieView);