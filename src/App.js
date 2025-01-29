import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Topnav from "./Pages/Topnav";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange";
import University from "./Pages/UniDetail";
import WorkTabs from "./Pages/Newcomp";
import Admin from './Blog/Admin';
import Blogcategory from './Blog/Blogcategory';
import Allposts from './Blog/Allposts';
import Addcategory from './Blog/Addcategory';
import Allcategory from './Blog/Allcategory';
import Board from './Blog/Board';
import Login from './Blog/Login';
import Blog from './Blog/Blog';
import Blogcat from './Blog/Blogcat';
import MyProvider from "./ContextApi/MyProvider";
import OppForU from "./Pages/OppForU";
import Walkway from "./Pages/Walkway";
import EventGallery from "./Pages/Events";

function App() {
  return (
    <div>
      <Router>
        <MyProvider>
          <Topnav />
          <Navbar />
          <ScrollToTopOnRouteChange />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/tab" element={<WorkTabs />}></Route>
            <Route path="/university" element={<University />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/service" element={<Service />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/oppurtunity-for-you" element={<OppForU />} />
            <Route path="/walk-way" element={<Walkway />} />
            <Route path="/events" element={<EventGallery />} />
            <Route path="/blog/:postSlug" element={<Blogcat />} />
            <Route path="/signin" element={<Login />} />
            <Route path='/adminPanel' element={<Admin />}>
              <Route index element={<Navigate to="addblog" />} />
              <Route path="addblog" element={<Blogcategory />} />
              <Route path="allposts" element={<Allposts />} />
              <Route path="addcategory" element={<Addcategory />} />
              <Route path="allcategory" element={<Allcategory />} />
              <Route path="board" element={<Board />} />
            </Route>
          </Routes>
          <Footer />
        </MyProvider>
      </Router>
    </div>
  );
}

export default App;
