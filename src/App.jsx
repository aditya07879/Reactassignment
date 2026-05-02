import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import JokesData from './pages/JokesData';
import BooksData from './pages/BooksData';
import ProductData from './pages/ProductData.jsx';


function App() {
  return (
    <>
      <Navbar />

      <div className="p-6">
        <Routes>
          <Route path='/' element={<ProductData />} />
          <Route path='/jokes' element={<JokesData />} />
          <Route path='/books' element={<BooksData />} />
         
        </Routes>
      </div>
    </>
  );
}

export default App;