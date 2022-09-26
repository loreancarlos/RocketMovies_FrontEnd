import { Routes, Route } from "react-router-dom";
import { NewMovie } from "../pages/NewMovie";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";


export function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/new" element={<NewMovie />} />
         <Route path="/:id" element={<Details />} />
      </Routes>
   );
};