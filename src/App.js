import { Routes, Route, Link } from 'react-router-dom';
import Invisible from './pages/Invisible';
import Layout from './Components/Layout';
import Posts from './pages/Posts';
import './App.css';

function App() {
  return (
    <>
      
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Invisible/>}></Route>
              <Route path="users/:id" element={<Posts/>}></Route>
          </Route>
      </Routes>
    </>
  );
}

export default App;