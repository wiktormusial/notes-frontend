import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AuthLogin from './views/Auth/AuthLogin/AuthLogin'
import AuthRegister from './views/Auth/AuthRegister/AuthRegister'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthLogin />}/>
        <Route path="/register" element={<AuthRegister />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
