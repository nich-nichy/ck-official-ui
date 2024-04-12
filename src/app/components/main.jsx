"use client"; // This is a client component 👈🏽
import { useState } from "react";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import { Box, ThemeProvider } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

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

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Image
            src="/ck-logo-salsa.png"
            width={120}
            height={120}
            alt="Picture of the author"
          />
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">Products</a>
            <a class="mr-5 hover:text-gray-900">Events</a>
            <a class="mr-5 hover:text-gray-900">Printing</a>
          </nav>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Nich" src="/static/images/avatar/2.jpg" />
                <p className="text-sm">Hi Account</p>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
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
      <div className="flex justify-center  ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
            <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
              {/*        <div className="text-3xl md:text-7xl font-bold ">
                Make Your Fashion Look More Charming
              </div> */}
            </div>
            <div className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">
              <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                <img
                  src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            "
                  alt=""
                  className=""
                />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                  <img
                    src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                "
                    alt=""
                    className=""
                  />
                </div>
                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                  <img
                    src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                "
                    alt=""
                    className=""
                  />
                </div>
              </div>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: 1,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                }}
              />
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              {/*               <div className="lg:w-60 w-64 h-96  overflow-hidden rounded-xl ">
                <img
                  src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            "
                  alt=""
                  className=""
                />
              </div> */}

              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                  <img
                    src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                "
                    alt=""
                    className=""
                  />
                </div>
                <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                  <img
                    src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                "
                    alt=""
                    className=""
                  />
                </div>
              </div>
              {/*  */}
              <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                <img
                  src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            "
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
