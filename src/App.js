import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import Feed from './components/feed/feed';
import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/login/login'
import Widget from './components/widget/widget'
import { auth } from './firebase';
// import {login} from './features/userSlice'

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">

      {/* Header */}
      <Header />
      {!user ? <Login /> : ( 
          <div className='app_body'>
            {/* Sidebar */}
            <SideBar/>
            {/* Feed */}
            <Feed/>
            {/* Widgets */}
            <Widget/>
          </div>
      )}
      
    </div>
  );
}

export default App;
