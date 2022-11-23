import React from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const bgv = useNavigate();
  const navTo = _ => {
    bgv("/bgc");
  };
  return (
    <>
      <img
        onClick={navTo}
        src="https://cdn.dribbble.com/users/656195/screenshots/17460839/media/9ceca4163ec30ed578ed9a39f0eeb4ca.png"
      />
      <Footer />
    </>
  );
};

export default Home;
