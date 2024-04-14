"use client"; // This is a client component 👈🏽
import { useState } from "react";
import Image from "next/image";
import {
  IconButton,
  Divider,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  Badge,
  InputBase,
  Box,
  ListItemIcon,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { styled, alpha } from "@mui/material/styles";
import "./main.css";

const Search = styled("div")(({ theme }) => ({
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const main = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      {/* Navbar */}
      <p
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "10px 0px 10px 0px",
        }}
      >
        Get 10% off on all products when buying 2 or more products{" "}
      </p>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto border-b flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Image
            src="/ck-logo-salsa.png"
            width={90}
            height={90}
            alt="Picture of the author"
          />
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 text-gray-500 hover:text-stone-900 text-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Products
            </a>
            <a className="mr-5 text-gray-500 hover:text-stone-900 text-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Events
            </a>
            <a className="mr-5 text-gray-500 hover:text-stone-900 text-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Customisation
            </a>
          </nav>
          <div>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                style={{ marginTop: "5px" }}
              >
                <Badge badgeContent={1} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
              </Tooltip>
            </Box>
          </div>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </header>
      <div className="flex justify-center ">
        {/*        <nav className="self-center w-full max-w-7xl  ">
          <div className="flex flex-col lg:flex-row justify-around items-center border-b-2">
            {" "}
            <Image
              src="/ck-logo-salsa.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
        </nav> */}
      </div>
      {/* Hero */}
      <div className="flex justify-center mt-10 my-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col max-w-7xl justify-center items-center space-y-3 w-full ">
            <div className="flex flex-col md:items-start items-center justify-center  space-y-3 px-8 text-center ">
              {/*        <div className="text-3xl md:text-7xl font-bold ">
                Make Your Fashion Look More Charming
              </div> */}
            </div>
            <div className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">
              <div className="lg:w-60 w-64 h-96 overflow-hidden rounded-xl">
                <Image
                  src="/men1.jpg"
                  alt=""
                  className=""
                  width={300}
                  height={290}
                />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                  <Image
                    src="/men4.jpg"
                    alt=""
                    className=""
                    width={150}
                    height={250}
                  />
                </div>
                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                  <Image
                    src="/men2.jpg"
                    alt=""
                    className=""
                    width={150}
                    height={450}
                  />
                </div>
              </div>
              <div>
                <Search
                  className="border border-gray-400"
                  style={{ width: "400px" }}
                >
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <Typography
                  variant="body1"
                  className="text-center hero-section-para font-medium"
                >
                  We speak the ultimate print language
                </Typography>
              </div>

              {/*               <div className="lg:w-60 w-64 h-96  overflow-hidden rounded-xl ">
                <Image
                  src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            "
                  alt=""
                  className=""
                />
              </div> */}

              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                  <Image
                    src="/wom1.jpg"
                    alt=""
                    className=""
                    width={150}
                    height={450}
                  />
                </div>
                <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                  <Image
                    src="/wom3.jpg"
                    alt=""
                    className=""
                    width={150}
                    height={250}
                  />
                </div>
              </div>
              {/*  */}
              <div className="lg:w-60 w-64 h-96 overflow-hidden rounded-xl">
                <Image
                  src="/wom2.jpg"
                  alt=""
                  className=""
                  width={200}
                  height={10}
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
        class="text-gray-600 body-font"
        style={{ marginLeft: "150px", marginRight: "150px" }}
      >
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Products
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Here are our Products
            </p>
          </div>
          <div class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      class="object-cover object-center w-full h-full block"
                      src="/wom2.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      The Catalyzer
                    </h2>
                    <p class="mt-1">$16.00</p>
                  </div>
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      class="object-cover object-center w-full h-full block"
                      src="/wom1.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      Shooting Stars
                    </h2>
                    <p class="mt-1">$21.15</p>
                  </div>
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      class="object-cover object-center w-full h-full block"
                      src="/wom3.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      Neptune
                    </h2>
                    <p class="mt-1">$12.00</p>
                  </div>
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      class="object-cover object-center w-full h-full block"
                      src="/wom2.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      The 400 Blows
                    </h2>
                    <p class="mt-1">$18.40</p>
                  </div>
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      class="object-cover object-center w-full h-full block"
                      src="/wom1.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      The Catalyzer
                    </h2>
                    <p class="mt-1">$16.00</p>
                  </div>
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      class="object-cover object-center w-full h-full block"
                      src="/men4.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      Shooting Stars
                    </h2>
                    <p class="mt-1">$21.15</p>
                  </div>
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      class="object-cover object-center w-full h-full block"
                      src="/men2.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      Neptune
                    </h2>
                    <p class="mt-1">$12.00</p>
                  </div>
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      class="object-cover object-center w-full h-full block"
                      src="/men1.jpg"
                      width={200}
                      height={200}
                    />
                  </a>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      The 400 Blows
                    </h2>
                    <p class="mt-1">$18.40</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Image two */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              We customise anything into anything
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="/men4.jpg"
                  width={180}
                  height={180}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="/wom1.jpg"
                  width={90}
                  height={90}
                />
              </div>
              <div class="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src="/men2.jpg"
                  width={90}
                  height={90}
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src="/wom2.jpg"
                  width={90}
                  height={90}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="/wom3.jpg"
                  width={90}
                  height={90}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="/men1.jpg"
                  width={90}
                  height={90}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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
