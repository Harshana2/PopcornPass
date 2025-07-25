import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Favorite from "./pages/Favorite";
import MyBookings from "./pages/MyBookings";
import SeatLayout from "./pages/SeatLayout";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");
  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
