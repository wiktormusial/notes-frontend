import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AuthLogin from './views/Auth/AuthLogin/AuthLogin'
import AuthRegister from './views/Auth/AuthRegister/AuthRegister'
import NotesList from './views/Notes/NotesList/NotesList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotesList />}/>
        <Route path="/login" element={<AuthLogin />}/>
        <Route path="/register" element={<AuthRegister />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
