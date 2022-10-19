import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(authContext);
  // console.log("context : ", user)

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log("Logged out successfully");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="navbar bg-primary text-primary-content flex justify-between">
      <div className="">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Awesome Auth
        </Link>
        <Link to="/" className="btn btn-ghost normal-case text-md">
          Home
        </Link>
        <Link to="/login" className="btn btn-ghost normal-case text-md">
          Log in
        </Link>
        <Link to="/register" className="btn btn-ghost normal-case text-md">
          Register
        </Link>
      </div>
      <div className="">
        {user?.email && <div><span className="mr-5">Welcome {user.email}</span> <button onClick={handleLogOut} className="btn btn-sm">Log out
        </button></div> }
        
        
          
      </div>
    </div>
  );
};

export default Header;
