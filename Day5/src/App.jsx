// import Hello_World from "./components/Hello_World"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Signup1 from "./pages/Signup1";
import Userhome from "./pages/Userhome";
import Admin from "./pages/Admin";
import Viewevents from "./pages/Viewevents";
import Venues from "./pages/Venues";
import BookingForm from "./pages/BookingForm";
import UserProfile from "./pages/ProfilePage";
import Event from "./pages/Event";
import AdminVenues from "./pages/AdminVenues";
import AdminProfile from "./pages/AdminProfile";
import ViewBook from "./pages/ViewBook";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/signup1"element={<Signup1/>}/>
        <Route path="/user"element={<Userhome/>}/>
       
        <Route path="/view"element={<Viewevents/>}/>
        <Route path="/vv"element={<Venues/>}/>
        <Route path="/book"element={<BookingForm/>}/>
        <Route path="/profile"element={<UserProfile/>}/>
        <Route path="/admin"element={<Admin/>}/>
        <Route path="/e"element={<Event/>}/>
        <Route path="/ae"element={<AdminVenues/>}/>
        <Route path="/ap"element={<AdminProfile/>}/>
        <Route path="/vb"element={<ViewBook/>}/>
        
        

      </Routes>
    </Router>
  )
}

export default App;

