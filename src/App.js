import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from './redux/actions/getPosts';
import './App.css';
import PostCard from './components/PostCards/PostCard';

function App() {

  const dispatch = useDispatch()

  let post = useSelector(store => store.postReducer.post)
  let cards = post?.data?.data


  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPost())
  }, [dispatch])


  return (
    <div className="App">
      <div className="App_title">
        <img className="App_logo_image" src="/pawprint.png" alt="not found " />
        <h1>
          INSTA-DOGS
          </h1>
      </div>
      <div className="postContainer">
        {
          cards?.map(e => (
            <PostCard props={e} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
