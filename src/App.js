import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostView from './components/PostView.jsx';
import PostViewLandscape from './components/PostViewLandscape'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/landscape" component={PostViewLandscape}/>  
            <Route path="/" component={PostView}/>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;