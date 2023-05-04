import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Posts from './components/Posts';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Comments from './components/Comments';
import Albums from './components/Albums';
import Photos from './components/Photos';
import Todos from './components/Todos';
import Users from './components/Users';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/posts">
        <Posts/>
      </Route>
      <Route path="/comments">
        <Comments/>
      </Route>
      <Route path="/albums">
        <Albums/>
      </Route>
      <Route path="/photos">
        <Photos/>
      </Route>
      <Route path="/todos">
        <Todos/>
      </Route>
      <Route path="/users" exact>
        <Users/>
      </Route>
      <Route path="/users/:id">
        <Users/>
      </Route>
    </BrowserRouter>
    </>
  );
};

export default App;
