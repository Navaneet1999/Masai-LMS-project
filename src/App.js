import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Front } from './components/front/front';
import { Lectures } from './components/lectures/lectures';
import { Login } from './components/login/login';
import { Assignment } from './components/assignment/assignment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Front/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/assignment' element={<Assignment/>}/>
          <Route path='/lectures' element={<Lectures/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
