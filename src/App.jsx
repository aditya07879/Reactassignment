import { lazy, Suspense } from "react";
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Loader from "./components/Loader";





const ProductData = lazy(() => import("./pages/ProductData"));
const JokesData = lazy(() => import("./pages/JokesData"));
const BooksData = lazy(() => import("./pages/BooksData"));
const QuoteData = lazy(() => import("./pages/QuoteData"));
const UserData = lazy(() => import("./pages/UserData"));
const MealData = lazy(() => import("./pages/MealData"));
const VideoData = lazy(() => import("./pages/VideoData"));
const CatData = lazy(() => import("./pages/CatData"));


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
          <Route path='/quote' element={<QuoteData />} />
          <Route path='/user' element={<UserData />} />
          <Route path='/meal' element={<MealData />} />
          <Route path='/videos' element={<VideoData />} />
          <Route path='/cats' element={<CatData />} />
         
        </Routes>
       </Suspense>
      </div>
    </>
  );
}

export default App;