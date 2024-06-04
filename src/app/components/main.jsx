"use client"; // This is a client component 👈🏽
import { useState } from "react";
import Image from "next/image";
import { InputBase, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { Navbar, Hero } from "./partitions";
import { useSelector, useDispatch } from "react-redux";
import "./main.css";

console.log("Auto complete");
console.log("Auto complete");

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
      <Hero />
      {/* Explainer */}
      <div
        className="border-b text-white my-20"
        style={{ backgroundColor: "#B51F2A" }}
      >
        <Typography
          variant="h2"
          className="text-center font-medium py-7 text-5xl font-merienda leading-relaxed"
        >
          <span className="">
            It's <span className="">Okay!</span>
            ...
          </span>
          <br />
          To be a{" "}
          <span className="font-happymonkey font-semibold w-3/4 antialiased underline underline-offset-2 decoration-gray-200">
            CRINGE
          </span>
        </Typography>
      </div>
      {/* Products */}
      <section
        className="text-gray-600 body-font mt-0"
        style={{ marginLeft: "150px", marginRight: "150px" }}
      >
        <div className="container px-5 pt-0 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-3xl">
              Products
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">
              Grab some items from top selling
            </p>
          </div>
          <div className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
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
                      CLOTHING
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium truncate">
                      Light Pink t-shirt(customised-text-teja-moo_)
                    </h2>
                    <p className="mt-1">₹270.00rs</p>
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
                      CLOTHING
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium truncate">
                      Black leggin(printed-white-patched)
                    </h2>
                    <p className="mt-1">₹170.00rs</p>
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
                      CLOTHING
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium truncate">
                      Pink t-shirt(customised-text-teja-moo_)
                    </h2>
                    <p className="mt-1">₹170.00rs</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/Images/Hero/hoodie.jpeg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CLOTHING
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium truncate">
                      Fox hoodie(printed-fox-ninja-anime)
                    </h2>
                    <p className="mt-1">₹340.00rs</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/Images/Hero/hoodie1.jpeg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CLOTHING
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium truncate">
                      Marshmallo hoodie(animated-super-heroes_)
                    </h2>
                    <p className="mt-1">₹380.00rs</p>
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
                      CLOTHING
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium truncate">
                      Blue hoodie
                    </h2>
                    <p className="mt-1">₹329.00rs</p>
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
                      CLOTHING
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium truncate">
                      Striped t-shirts(elegant-good-looking)
                    </h2>
                    <p className="mt-1">₹499.00rs</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/Images/Hero/random-gift.jpeg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      GIFTS
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium truncate">
                      Tea Mugs(Customisable)
                    </h2>
                    <p className="mt-1">₹299.00rs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Customisation */}
      <section className="mx-20 mb-10">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-3xl">
              Customisation
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">
              Customise anything into anything
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <Image
                src="/Images/Hero/hoodie.jpeg"
                alt="Hoodie"
                className="w-full h-64 object-cover"
                width={300}
                height={300}
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/Images/Hero/hoodie.jpeg"
                alt="Image 2"
                className="w-full h-64 object-cover"
                width={300}
                height={300}
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/Images/Hero/hoodie.jpeg"
                alt="Image 3"
                className="w-full h-64 object-cover"
                width={300}
                height={300}
              />
            </div>
            <div className="col-span-3">
              <Image
                src="/Images/Hero/hoodie.jpeg"
                alt="Image 4"
                className="w-full object-cover"
                style={{ height: "400px" }}
                width={600}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Events */}
      <section className="text-gray-600 body-font px-20">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-3xl">
              Event's
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl mb-9">
              Here's the success events we made for out customer's
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  src="/Images/Hero/bed-birthday.jpeg"
                  alt="birthday-one"
                  className="w-full object-cover h-full object-center block"
                  width={180}
                  height={180}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  src="/Images/Hero/eighty-baloon.jpeg"
                  alt="birthday-one"
                  className="w-full object-cover h-full object-center block"
                  width={180}
                  height={180}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  src="/Images/Hero/rainbow.jpeg"
                  className="w-full h-full object-cover object-center block"
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
                  src="/Images/Hero/violet-baloon.jpeg"
                  width={90}
                  height={90}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/Images/Hero/baloon-normal-1.jpeg"
                  width={90}
                  height={90}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/birthday2.jpeg"
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
