import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./routes/Home";
import UploadImage from "./routes/UploadImage"
import ImageGallery from './routes/ImageGallery'



function App() {
  return (
   <Router>
    <Header />
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/upload' element={<UploadImage/>}/>
      <Route path='/gallery' element={<ImageGallery/>}/>
    </Routes>
    <Footer />

   </Router>
  );
}

export default App;
