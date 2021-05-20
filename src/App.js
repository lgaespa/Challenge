import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPost, setTagState } from './redux/actions/getPosts';
import './App.css';
import PostCard from './components/PostCards/PostCard';

function App() {

  const dispatch = useDispatch()

  let post = useSelector(store => store.postReducer.post)
  let cards = post?.data?.data

  const setTagHandler = (e) => {
    console.log(e)
    dispatch(setTagState(e))
  }

  let tagState = useSelector(store => store.postReducer.tag)
  console.log(tagState)


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
      {
        tagState.length !== 0 &&
        < button onClick={() => setTagHandler("")}>
          Limpiar filtro
     </button>
      }
      <div className="postContainer">
        {
          cards?.map(e => (
            <PostCard props={e} />
          ))
        }
      </div>
    </div >
  );
}

export default App;
