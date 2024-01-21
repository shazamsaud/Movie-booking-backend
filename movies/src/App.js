import './App.css';
import { Route, Routes } from "react-router-dom";
import Admin from './components/Admin/Admin.js';
import Auth from './components/Auth/Auth.js';
import Header from './components/Header.js';
import HomePage from './components/HomePage.js';
import Movies from './components/Movies/Movies.js';



function App() {
  return(
    <div> 
      <Header/>
       <section>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/auth" element={<Auth/>}/>

        </Routes>
       </section>
    </div>
  );
}

export default App;
