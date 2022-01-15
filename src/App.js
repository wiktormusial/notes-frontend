import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AuthLogin from '@views/Auth/AuthLogin/AuthLogin'
import AuthRegister from '@views/Auth/AuthRegister/AuthRegister'
import AuthRegisterSuccess from '@views/Auth/AuthRegister/AuthRegisterSuccess'
import NotesList from '@views/Notes/NotesList/NotesList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotesList />}/>
        <Route path="/login" element={<AuthLogin />}/>
        <Route path="/register" element={<AuthRegister />}/>
        <Route path="/register/success" element={<AuthRegisterSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
