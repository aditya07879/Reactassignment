import { lazy, Suspense } from "react";
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Loader from "./components/Loader";


const ProductData = lazy(() => import("./pages/ProductData"));
const JokesData = lazy(() => import("./pages/JokesData"));
const BooksData = lazy(() => import("./pages/BooksData"));


function App() {
  return (
    <>
      <Navbar />

      <div className="p-6 min-h-screen bg-black text-white">
       <Suspense fallback={<Loader/>}>
         <Routes>
          <Route path='/' element={<ProductData />} />
          <Route path='/jokes' element={<JokesData />} />
          <Route path='/books' element={<BooksData />} />
         
        </Routes>
       </Suspense>
      </div>
    </>
  );
}

export default App;