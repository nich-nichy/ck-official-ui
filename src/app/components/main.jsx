"use client"; // This is a client component 👈🏽
import { useState } from "react";
import Image from "next/image";
import { InputBase, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { Navbar } from "./partitions";
import { useSelector, useDispatch } from "react-redux";
import "./main.css";

console.log("Auto complete");
console.log("Auto complete");

const HeroSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const main = () => {
  // const open = Boolean(anchorEl);

  // Functions
  const handleLogin = () => {
    console.log("Hello: ");
  };

  // Variables

  const isLogin = useSelector((state) => state.authentication.isLoggedIn);
  console.log({ isLogin });

  return (
    <div>
      {/* Navbar */}
      <Navbar handleDrawerOpen handleDrawerClose isLogin />
      {/* Hero */}
      <div className="mt-5 hidden md:block">
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col max-w-7xl justify-center items-center space-y-3 w-full ">
              <div className="flex flex-col md:flex-row lg:flex-row space-x-2 space-y-3 md:space-x-4 w-full items-center justify-center ">
                <div className="lg:w-40 w-12 h-32 overflow-hidden rounded-xl hero-lg-img-wrapper">
                  <Image
                    src="/Images/Hero/tshirt-anime.jpeg"
                    alt=""
                    className="hero-lg-img"
                    width={300}
                    height={290}
                  />
                </div>
                <div className="flex flex-row md:flex-col lg:flex-col space-x-3 space-y-6 items-center justify-center">
                  <div className="lg:w-40 h-32 overflow-hidden rounded-xl hero-md-img-small">
                    <Image
                      src="/Images/Hero/random-gift.jpeg"
                      alt=""
                      className=""
                      width={150}
                      height={250}
                    />
                  </div>
                  <div className="w-3 lg:w-40 h-48 overflow-hidden rounded-xl hero-md-img-big">
                    <Image
                      src="/Images/Hero/hoodie.jpeg"
                      alt=""
                      className=""
                      width={150}
                      height={450}
                    />
                  </div>
                </div>
                <div className="hero-explainer-wrapper">
                  <div className="flex">
                    <div className="top-0">
                      <Typography
                        variant="body1"
                        className="text-center hero-section-para"
                      >
                        We speak the ultimate print launguage
                      </Typography>
                      <HeroSearch className="border border-gray-400">
                        <SearchIconWrapper>
                          <Search />
                        </SearchIconWrapper>
                        <StyledInputBase
                          placeholder="Search"
                          inputProps={{ "aria-label": "search" }}
                        />
                      </HeroSearch>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                  <div className="w-32 lg:w-40 overflow-hidden rounded-xl hero-md-img-big">
                    <Image
                      src="/Images/Hero/hoodie1.jpeg"
                      alt=""
                      className=""
                      width={150}
                      height={450}
                    />
                  </div>
                  <div className="w-32 lg:w-40 ero-lg--32  overflow-hidden rounded-xl hero-md-img-small">
                    <Image
                      src="/Images/Hero/gift-pack.jpeg"
                      alt=""
                      className=""
                      width={150}
                      height={250}
                    />
                  </div>
                </div>
                <div className="lg:w-40 w-64 h-96  overflow-hidden rounded-xl hero-lg-img-wrapper">
                  <Image
                    src="/Images/Hero/birthday.jpeg"
                    alt=""
                    className="hero-lg-img"
                    width={300}
                    height={180}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      </div>

      <div className="block md:hidden">
        <div className="overflow-hidden">
          <div className="flex my-2 mx-3 justify-evenly">
            <div className="overflow-hidden rounded-xl">
              <div className="grid justify-items-stretch">
                <Image
                  src="/Images/Hero/random-gift.jpeg"
                  alt=""
                  className=""
                  width={130}
                  height={70}
                />
                <div className="mx-1 my-2 mb-0">
                  <div className="grid justify-items-stretch">
                    <p
                      className="font-semibold"
                      style={{ fontSize: "40px", fontWeight: "" }}
                    >
                      We
                    </p>
                    <p
                      className="text-base w-3/4 antialiased underline underline-offset-2 decoration-green-500 mb-1"
                      style={{ fontSize: "30px" }}
                    >
                      speak
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src="/Images/Hero/tshirt-anime.jpeg"
              alt=""
              className="rounded-xl"
              width={150}
              height={200}
            />
          </div>
          <p
            className="text-center mt-5 mb-2"
            style={{
              fontSize: "20px",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            the ultimate launguage called
          </p>
          <p
            className="text-base font-bold text-center antialiased "
            style={{ fontSize: "45px" }}
          >
            #printease
          </p>
          <div className="my-10">
            <div className="flex my-2 mx-3 justify-evenly">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/Images/Hero/birthday.jpeg"
                  alt=""
                  className="rounded-xl"
                  width={150}
                  height={170}
                />
              </div>
              <div className="grid justify-items-stretch">
                <Image
                  src="/Images/Hero/hoodie1.jpeg"
                  alt=""
                  className=""
                  width={120}
                  height={50}
                />
                <Image
                  src="/Images/Hero/random-gift.jpeg"
                  alt=""
                  className=""
                  width={120}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explainer */}
      <div
        className="border-b text-white my-20"
        style={{ backgroundColor: "#B51F2A" }}
      >
        <Typography
          variant="h2"
          className="text-center font-semibold py-20 font-montserrat"
        >
          Ok to be a Cringe
        </Typography>
      </div>
      {/* Events */}
      <section
        className="text-gray-600 body-font"
        style={{ marginLeft: "150px", marginRight: "150px" }}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Products
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Here are our Products
            </p>
          </div>
          <div className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/wom2.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      The Catalyzer
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/wom1.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Shooting Stars
                    </h2>
                    <p className="mt-1">$21.15</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/wom3.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Neptune
                    </h2>
                    <p className="mt-1">$12.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/wom2.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      The 400 Blows
                    </h2>
                    <p className="mt-1">$18.40</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/wom1.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      The Catalyzer
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/men4.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Shooting Stars
                    </h2>
                    <p className="mt-1">$21.15</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/men2.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Neptune
                    </h2>
                    <p className="mt-1">$12.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/men1.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      The 400 Blows
                    </h2>
                    <p className="mt-1">$18.40</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Image two */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              We customise anything into anything
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/men4.jpg"
                  width={180}
                  height={180}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/wom1.jpg"
                  width={90}
                  height={90}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="/men2.jpg"
                  width={90}
                  height={90}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="/wom2.jpg"
                  width={90}
                  height={90}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/wom3.jpg"
                  width={90}
                  height={90}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/men1.jpg"
                  width={90}
                  height={90}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BestSellers */}
      {/* Trending */}
      {/* Footer */}
      <footer className="border-t text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <Image
              src="/ck-logo-salsa.png"
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                PRODUCTS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Men Clothing
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Women Clothing
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Tea Cups</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Greeting Cards
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                EVENTS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Pre Book</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Post Book</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CUSTOMISATION
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Select images
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Upload images
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 CringeKadai —
              <a
                href="https://twitter.com/@cringekadai"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @cringekadai
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default main;
