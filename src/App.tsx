import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  // const count = useAppSelector(state => state.userReducer.count)
  // const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();


  return (
    <div className="App">

    </div >
  );
}

export default App;
