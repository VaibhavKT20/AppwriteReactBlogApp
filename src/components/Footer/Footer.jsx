import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { Logo } from "../index";
import github from "../../images/github.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 py-6 border-t border-gray-200/10 bg-gray-900">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center mb-4 lg:mb-0">
            <span className="w-[125px]">
              <Logo />
            </span>
            <div className="mt-4 lg:mt-0 lg:ml-6">
              <p className="text-base font-semibold text-white">
                © {currentYear} BlogVista
              </p>
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <div>
                <p className="mb-4 text-lg font-semibold text-white">Legal</p>
                <ul className="flex flex-col space-y-2 text-[14px] font-medium text-white">
                  <li>
                    <Link to="/" className="hover:text-gray-400">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-gray-400">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-gray-400">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-gray-400">
                      Disclaimer
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-gray-400">
                      Media Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-4 text-lg font-semibold text-white">
                  Social Links
                </p>
                <ul className="flex flex-col space-y-2 text-[14px] font-medium text-white">
                  <li>
                    <Link to="/" className="hover:text-gray-400">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-gray-400">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-gray-400">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-gray-400">
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-gray-400">
                      YouTube
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-4 text-lg font-semibold text-white">
                  Additional Links
                </p>
                <ul className="flex flex-col space-y-2 text-[14px] font-medium text-white">
                  <li>
                    <Link to="/" className="hover:text-gray-400">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-gray-400">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="flex justify-center sm:justify-end mt-6 px-4">
        <a
          href="https://github.com/VaibhavKT20"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md flex items-center gap-2 bg-white text-black px-3 py-2 text-sm font-semibold hover:bg-white/80"
        >
          <img src={github} alt="github" className="w-6 h-6" />
          Created By Vaibhav
        </a>
      </div>
    </footer>
  );
}

export default Footer;
