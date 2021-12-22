import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
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
import useAuth from "./services/useAuth";
import Teams from "./pages/Teams";
import Collab from "./pages/Collab";

function PrivateOutlet() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/forbidden " />;
}

function App() {
  return (
    <>
      <main>
        <Routes>

          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<LandingPage />}/>

          <Route path="/teams" element={<Teams />} />
        
          <Route path="*" element={<PageNotFound />}/>
          <Route path="/forbidden" element={<ForbiddenPage />}/>
          
          <Route path="/blogs" element={<PrivateOutlet />}>
            <Route element={<Blog />} />
          </Route>
          <Route path="/blogs/:id" element={<PrivateOutlet />}>
            <Route element={<Article />} />
          </Route>
          <Route path="/videos" element={<PrivateOutlet />}>
            <Route element={<Videos />} />
          </Route>
          <Route path="/videos/:id" element={<PrivateOutlet />}>
            <Route element={<Videoplay />} />
          </Route>
          <Route path="/experts" element={<PrivateOutlet />}>
            <Route element={<Expert />} />
          </Route>
          <Route path="/experts/:id" element={<PrivateOutlet />}>
            <Route element={<InfoPsi />} />
          </Route>
          <Route path="/profile" element={<PrivateOutlet />}>
            <Route element={<Profile />} />
          </Route>
          <Route path="/loading" element={<PrivateOutlet />}>
            <Route element={<LoadingPage />} />
          </Route>

          <Route path="/collab" element={<PrivateOutlet />}/>
            <Route element={<Collab />} />
          </Route>
          
        </Routes>
      </main>
    </>
  );
}

export default App;
