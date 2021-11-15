import React from "react";
import { Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import Blog from "./pages/Blog";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Videos from "./pages/Video"
import Videoplay from "./pages/Videoplay"
import Expert from "./pages/Expert";
import Profile from "./pages/Profile";
import { LoadingPage } from "./pages/LoadingPage";
import PageNotFound from "./pages/PageNotFound";
import ForbiddenPage from "./pages/ForbiddenPage";
import InfoPsi from "./pages/InfoPsi";


function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/blogs" element={<Blog />}/>
          <Route path="/blogs/:id" element={<Article />}/>
          <Route path="/videos" element={<Videos />}/>
          <Route path="/videos/:id" element={<Videoplay />}/>
          <Route path="/experts" element={<Expert />}/>
          <Route path="/experts/:id" element={<InfoPsi />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/load" element={<LoadingPage />}/>
          <Route path="*" element={<PageNotFound />}/>
          <Route path="/403" element={<ForbiddenPage />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
