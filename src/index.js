import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga'; 
import axios from 'axios';
import { takeEvery, put} from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_GENRES', getTheGenres )
    yield takeEvery('DISPLAY_MOVIES', fetchMovies)
    yield takeEvery('SET_SAVE', saveMovie)

}

// NOT SURE IF I SET THIS UP RIGHT...
// SAGA function getting data from the DB
function* getTheGenres(){
    try{
        let response = yield axios.get('/api/genre')
        console.log(response.data);
        
        yield put({ type: 'SET_GENRES', payload: response.data })

    } catch (error) {
        console.log('error in GET getTheGenres:', error);
        
    }
}

// TRYING TO GET MOVIES TO DISPLAY HERE
function* fetchMovies(){
    try{
        // console.log(action.payload);
        let response  = yield axios.get('/api/movie'); // might need to add a key here

        console.log(response.data);
        
        yield put({type: 'SET_MOVIES', payload: response.data})
    } catch (error) {
        console.log('error in GET request!', error);
        
    }
}

// SAVING MOVIE TO THE DATA BASE
function* saveMovie(action){
    try{
        let response = yield axios.post('/api/movie', action.payload)
        
        // yield put({ type: 'FETCH_NEW_MOVIE'}) // reloading

    } catch (error) {
        console.log('error in POST request!', error);
        
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
