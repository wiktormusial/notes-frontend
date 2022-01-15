import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AuthLogin from './views/Auth/AuthLogin/AuthLogin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthLogin />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
