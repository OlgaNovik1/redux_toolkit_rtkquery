import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { fetchUsers } from './store/reducers/ActionCreators';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

function App() {
  // const { users, isLoading, error } = useAppSelector(state => state.userReducer)
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])


  return (
    <div className="App">
      {/* {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      {/* {users.map(user => user.id)} */}

      <div style={{ display: 'flex' }}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div >
  );
}

export default App;
