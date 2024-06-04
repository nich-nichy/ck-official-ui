import React from "react";
import Image from "next/image";
import { InputBase, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import "../main.css";

const hero = () => {
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
  return (
    <div>
      {" "}
      {/* Not mobile */}
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
                        className="text-center hero-section-para text-2xl"
                      >
                        We{" "}
                        <span className="antialiased underline underline-offset-2 decoration-green-500">
                          speak
                        </span>{" "}
                        the ultimate launguage called
                      </Typography>
                      <p
                        className="text-base font-bold text-center antialiased mt-3 mb-6"
                        style={{ fontSize: "40px" }}
                      >
                        #printease
                      </p>
                      <HeroSearch className="border border-gray-400">
                        <SearchIconWrapper>
                          <Search />
                        </SearchIconWrapper>
                        <StyledInputBase
                          placeholder="Search stuff"
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
      {/* Mobile */}
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
                  height={150}
                />
              </div>
              <div className="grid justify-items-stretch">
                <Image
                  src="/Images/Hero/hoodie1.jpeg"
                  alt="rounded-xl"
                  className=""
                  width={110}
                  height={50}
                />
                <Image
                  src="/Images/Hero/random-gift.jpeg"
                  alt="rounded-xl"
                  className=""
                  width={110}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
