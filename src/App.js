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
import NoteEdit from '@views/Notes/NoteEdit/NoteEdit'
import CategoriesList from '@views/Categories/CategoriesList/CategoriesList'
import CategoryFilter from '@views/Categories/CategoryFilter/CategoryFilter'
import CategoryAdd from '@views/Categories/CategoryAdd/CategoryAdd'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <CategoriesList />
      <Routes>
        <Route path="/" element={<NotesList />}/>
        <Route path="/addnote" element={<NoteAdd />}/>
        <Route path="/:slug" element={<Note />}/>
        <Route path="/:slug/edit" element={<NoteEdit />}/>
        <Route path="/category/add" element={<CategoryAdd />}/>
        <Route path="/category/:id" element={<CategoryFilter />}/>
        <Route path="/login" element={<AuthLogin />}/>
        <Route path="/register" element={<AuthRegister />}/>
        <Route path="/register/success" element={<AuthRegisterSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
