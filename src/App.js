import React from 'react';
import './App.css';
import Nav from './component/nav';
import AddPost from './component/addPost';
import ViewPosts from './component/viewPosts';
import Post from './component/post';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PostProvider } from './context/postContext';
import { AddPostsProvider } from './context/addPostsContext';
import Details from './component/details';

function App() {
  return (

    <PostProvider>
      <AddPostsProvider>
        <Router >
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/AddPost" component={AddPost} />
              <Route path="/ViewPosts" component={ViewPosts} />
              <Route path="/Details" component={Details} />
            </Switch>
          </div>
        </Router>
      </AddPostsProvider>
    </PostProvider>

  );
}
const Home = () => {
  return (<div>
    <h1>Home</h1>
  </div>);
};



export default App;
