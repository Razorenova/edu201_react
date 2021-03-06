import './App.css';
import React  from 'react';
import {Route, BrowserRouter,NavLink} from "react-router-dom";
import {Menu} from "./Components/Menu";
import {PostList} from "./Components/PostList";




function ContactUs() {
    return (
        <div className="container my-5">
            <form action="">
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><textarea type="text" className="form-control"/></div>
                <div className="mb-3"><input type="text" className="form-control btn btn-primary"/></div>
            </form>
        </div>
    )
}
function Main() {
    return (
        <div className="container my-5">
            <h1>Главная</h1>
        </div>
    )
}
function AboutUs() {
    return (
        <div className="container my-5">
            <h1>О нас</h1>
        </div>
    )
}

function App() {
  return (
    <div className="Container">
        <BrowserRouter>
            <Menu/>
           <Route exact path="/" render={()=><PostList/>}/>
           <Route path="/about"render={()=><AboutUs/>}/>
           <Route path="/contact-us"render={()=><ContactUs/>}/>
        </BrowserRouter>

    </div>
  );
}

export default App;
