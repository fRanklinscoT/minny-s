import './App.css';
import Navbar from './NavBar';
import Home from './Body';
import Footer from './footer';
import Services from './Services';
import CategoryDetail from './Sections/services/CategoryDetail.jsx';
import ItemDetail from './Sections/services/ItemDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorPage from './error';
// import Contact from './contact-component/contact';

const App = () => {
  return(
    <Router>
      <div className="min-h-screen bg-slate-100 dark:bg-neutral-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/services/category/:categoryName" element={<CategoryDetail />} /> {/* Dynamic route for category details */}
          <Route path="/services/category/:categoryName/item/:itemId" element={<ItemDetail />} /> {/* Dynamic route for item details */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;