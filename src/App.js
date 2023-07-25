import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect } from './helpers/routes';
import { useAuthListener } from './hooks';

function App() {
  const {user} = useAuthListener();

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGN_IN} element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}><Signin /></IsUserRedirect>} />
        <Route path={ROUTES.SIGN_UP} element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}><Signup /></IsUserRedirect>} />
        <Route path={ROUTES.BROWSE} element={user ? <Browse /> : <Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
}

export default App;
