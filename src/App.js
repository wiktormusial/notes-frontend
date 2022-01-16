import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './app/Navbar'
import AuthLogin from '@views/Auth/AuthLogin/AuthLogin'
import AuthRegister from '@views/Auth/AuthRegister/AuthRegister'
import AuthRegisterSuccess from '@views/Auth/AuthRegister/AuthRegisterSuccess'
import NotesList from '@views/Notes/NotesList/NotesList'
import Note from '@views/Notes/Note/Note'
import NoteAdd from '@views/Notes/NoteAdd/NoteAdd'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<NotesList />}/>
        <Route path="/:slug" element={<Note />}/>
        <Route path="/addnote" element={<NoteAdd />}/>
        <Route path="/login" element={<AuthLogin />}/>
        <Route path="/register" element={<AuthRegister />}/>
        <Route path="/register/success" element={<AuthRegisterSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
