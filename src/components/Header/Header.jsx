import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import close from "../../images/close.png";
import menu from "../../images/nav.png";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavBar = () => {
    setNavOpen(!navOpen);
  };

  const closeNavBar = () => {
    setNavOpen(false);
  };

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-4 shadow-md sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-purple-600">
      <Container>
        <nav className="flex justify-between items-center">
          <div>
            <Link to="/" onClick={closeNavBar}>
              <Logo />
            </Link>
          </div>
          <div className="md:hidden mr-4">
            <button onClick={toggleNavBar}>
              {navOpen ? (
                <img src={close} alt="close" />
              ) : (
                <img src={menu} alt="menu" />
              )}
            </button>
          </div>
          <ul
            className={`ml-auto md:flex md:items-center ${
              navOpen ? "flex flex-col items-center" : "hidden"
            }`}
          >
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug);
                    }}
                    className="inline-block font-semibold text-white px-4 py-2 mx-2 rounded-full text-lg bg-transparent hover:bg-white hover:text-purple-600 hover:border-purple-600 border border-transparent duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
