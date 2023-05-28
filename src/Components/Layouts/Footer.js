import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const Links = [
    {
      title: "VoxFlix",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About Us",
          link: "/about",
        },
        {
          name: "Contact Us",
          link: "/contact",
        },
      ],
    },
    {
      title: "Categories",
      links: [
        {
          name: "Movies",
          link: "/movies",
        },
        {
          name: "Tv Shows",
          link: "/shows",
        },
        {
          name: "Entertainment",
          link: "/entertainment",
        },
      ],
    },
    {
      title: "About Ayaan",
      links: [
        {
          name: "Protfolio",
          link: "Coming Soon",
        },
        {
          name: "Email",
          link: "mailto:ayaanhaider.dev@google.com",
        },
      ],
    },
  ];
  return (
    <>
      <div className="bg-dry py-4 border-t-2 border-black">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
            {Links.map((link, index) => (
              <div
                key={index}
                className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
              >
                <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                  {link.title}
                </h3>
                <ul className="text-sm flex flex-col space-y-3">
                  {link.links.map((text, index) => (
                    <li key={index} className="flex items-baseline">
                      <Link
                        to={text.link}
                        className="text-border inline-block w-full hover:text-subMain"
                      >
                        {text.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <Link to="/">
                <img
                  src="https://i.ibb.co/Tb835hk/image-removebg-preview-1.png"
                  alt="Logo"
                  className="w-2/4 object-contain h-12"
                />
              </Link>
              <p className="leading-7 text-sm text-border mt-3">
                <span>Made with ❤️, by Ayaan</span>
                <br />
                <span>Email: ayaanhaider.dev@gmail.com</span>
              </p>
                
              </div>
            </div>
          </div>
          <p className="leading-7 text-sm flex flex-col text-border mt-3 items-center justify-center">
          <span>Copyright © 2023 - VoxFlix. All rights reserved.</span>
          </p>
        </div>
    </>
  );
}

export default Footer;
