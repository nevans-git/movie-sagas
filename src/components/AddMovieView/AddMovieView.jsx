import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

// Acting as 'Add Movie Page'
class AddMovieView extends Component {
    
    state = {
        title: '',
        poster: '',
        description: '',
        genre_id: 0

    }

    // componentDidMount(){
        
    //     this.props.dispatch({ type: 'FETCH_GENRES'})
       
    // }


    handleAddMovieInput = (event) => {
        console.log('event happened in handleAddMovieInput');

        // configuring new movie
        this.setState({
            title: event.target.value,

        });
    }

    handleAddMovieUrlInput = (event) => {
        console.log('event happened in handleAddMovieUrlInput');

        // configuring new movie url
        this.setState({
            poster: event.target.value
        })
    }

    handleAddMovieDescInput = (event) => {
        console.log('event happened in handleAddMovieDescInput');

        // configuring new movie description
        this.setState({
            description: event.target.value
        })
    }

    handleNewMovieSave = () => {
        console.log('new movie added to DB!');

        this.props.dispatch({ type: 'SET_SAVE', payload: this.state })
        this.props.history.push('/home');

    }

    cancelBtn = () => {
        
        this.props.history.push('/home');
    }

    handleDropdown = (event) => {
        switch (event.target.value){
            case 'adventure':
                this.setState({
                    genre_id: 1
                }) // set up for each case
            case 'animated':
                this.setState({
                    genre_id: 2
                });
            case 'biographical':
                this.setState({
                    genre_id: 3
                });
            case 'comedy':
                this.setState({
                    genre_id: 4
                });
            case 'disaster':
                this.setState({
                    genre_id: 5
                });
            case 'drama':
                this.setState({
                    genre_id: 6
                });
            case 'epic':
                this.setState({
                    genre_id: 7
                });
            case 'fantasy':
                this.setState({
                    genre_id: 8
                });
            case 'musical':
                this.setState({
                    genre_id: 9
                });
            case 'romantic':
                this.setState({
                    genre_id: 10
                });
            case 'science fiction':
                this.setState({
                    genre_id: 11
                });
            case 'space-opera':
                this.setState({
                    genre_id: 12
                });
            case 'superhero':
                this.setState({
                    genre_id: 13
                });
            case 'thriller':
                this.setState({
                    genre_id: 14
                });
            case 'action':
                this.setState({
                    genre_id: 15
                });
        }
        
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
                <option value="thriller">Thriller</option>
                <option value="action">Action</option>
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