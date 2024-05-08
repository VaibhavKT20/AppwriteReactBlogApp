import React from "react";
import { Container } from "../components/index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import homeImage from "../images/home.png";

function Home() {
  const authStatus = useSelector((state) => state.auth.status);

  return (
    <div className="bg-gray-900 text-white">
      <Container>
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold">
              Welcome to BlogVista
            </h1>
            <p className="mt-6 text-lg">
              Discover a world of creativity, inspiration, and knowledge with
              BlogVista. Explore a diverse range of articles, stories, and
              discussions curated just for you.
            </p>

            <Link to={authStatus ? "/all-posts" : "/login"}>
              <button
                type="button"
                className="mt-8 rounded-md bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 font-semibold"
              >
                {authStatus ? "Explore Posts" : "Get Started"}
              </button>
            </Link>
          </div>
          <div className="lg:col-span-5 xl:col-span-6">
            <img
              className="object-cover w-full h-full lg:h-auto"
              src={homeImage}
              alt="Home"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
