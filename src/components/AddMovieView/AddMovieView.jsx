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

    handleNewMovieSave = (newMovieData) => {
        console.log('new movie added to DB!');

        this.props.dispatch({ type: 'SET_SAVE', payload: newMovieData })
        this.props.history.push('/home');

    }

    cancelBtn = () => {
        
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
            <select>
                <option value="adventure">Adventure</option>
                <option value="animated">Animated</option>
                <option value="biographical">Biographical</option>
                <option value="comedy">Comedy</option>
                <option value="disaster">Disaster</option>
                <option value="drama">Drama</option>
                <option value="epic">Epic</option>
                <option value="fantasy">Fantasy</option>
                <option value="musical">Musical</option>
                <option value="romantic">Romantic</option>
                <option value="science fiction">Science Fiction</option>
                <option value="space-opera">Space-Opera</option>
                <option value="superhero">Superhero</option>
            </select>
            <br />
            <br />
            
            <button onClick={this.handleNewMovieSave}>Save</button>
            <button onClick={this.cancelBtn}>Cancel</button>
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