import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="text-center bg-image  rounded-3"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/white-abstract-wallpaper_23-2148830026.jpg?w=1380&t=st=1675787472~exp=1675788072~hmac=2b6cf8e20e89b57aa4d2cb919ed5e9b7248dd504f5190b4ea4ec3244051b498c')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div
        className="mask h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Welcome To N&M-Digital Store</h1>
            <h4 className="mb-3">Where you can Buy Amazing Gadgets</h4>
            <button
              onClick={() => {
                navigate("/categories");
              }}
              className="btn btn-outline-light btn-lg"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
