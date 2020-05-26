import React from "react";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <img
          src='https://a.mktgcdn.com/p/6We7Amd6qS4NAeK9aR1eKseVaiJPf5yMMGeQCxq4lqo/1.0000/466x466.png'
          alt=''
          className='round-img'
          style={{ width: "75px", height: "75px" }}
        />
        Your state tax resource
      </h1>
    </nav>
  );
};

export default Navbar;
