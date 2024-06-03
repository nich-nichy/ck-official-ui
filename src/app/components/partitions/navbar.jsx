import { useState } from "react";
import {
  IconButton,
  Divider,
  Avatar,
  Badge,
  Box,
  ListItemIcon,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  ChevronRight,
  Logout,
  Notifications,
  Menu,
  WavingHand,
  LocalMall,
  CardGiftcard,
  AutoAwesome,
  Event,
} from "@mui/icons-material";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { styled, useTheme } from "@mui/material/styles";
import "../main.css";

const navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));

  const isLogin = useSelector((state) => state.authentication.isLoggedIn);
  console.log({ isLogin }, "from navvv");

  const drawerWidth = 250;

  const iconObj = {
    clothing: <LocalMall />,
    gifts: <CardGiftcard />,
    customization: <AutoAwesome />,
    event: <Event />,
  };
  const items = Object.keys(iconObj);

  const handleLogin = () => {
    console.log("Hello: ");
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <p className="sm:text-sm offer-info-above">
        Get 10% off on all products when buying 2 or more products{" "}
      </p>{" "}
      <header className="text-gray-600 body-font border-b border-solid border-gray-400">
        <div className="container mx-auto border-b flex flex-wrap p-5 flex-row justify-between md:flex-row items-center">
          <Image
            src="/ck-logo-salsa.png"
            width={90}
            height={90}
            alt="Picture of the author"
          />
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hidden sm:block">
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
          <Box>
            <div>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                style={{ marginTop: "5px" }}
              >
                <Badge badgeContent={1} color="error">
                  <Notifications />
                </Badge>
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={() => handleDrawerOpen()}
                sx={{ ...(open && { display: "none" }) }}
              >
                <Menu />
              </IconButton>
              <Box
                sx={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: open ? "rgba(0, 0, 0, 0.5)" : "transparent",
                  backdropFilter: open ? "blur(5px)" : "none",
                  zIndex: 1200,
                  pointerEvents: open ? "auto" : "none",
                }}
              >
                {" "}
                <Drawer
                  sx={{
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                      width: drawerWidth,
                    },
                  }}
                  PaperProps={{
                    sx: {
                      backgroundColor: "#e5e7eb",
                    },
                  }}
                  variant="persistent"
                  anchor="right"
                  open={open}
                >
                  <DrawerHeader>
                    <IconButton
                      onClick={() => handleDrawerClose()}
                      className="border-slate-600 rounded-full hover:bg-slate-400 hover:text-white hover:border-none"
                    >
                      {theme.direction === "rtl" ? (
                        <ChevronLeftIcon />
                      ) : (
                        <ChevronRight />
                      )}
                    </IconButton>
                  </DrawerHeader>
                  <Divider />
                  {isLogin === true ? (
                    <>
                      <Box>
                        <div>
                          <div className="flex mx-1 mt-2">
                            <h2 className="font-bold text-xl px-2 pr-1">
                              Hello
                            </h2>
                            <div className="px-2 pl-1">
                              <WavingHand sx={{ width: 18, height: 18 }} />
                            </div>
                          </div>
                          <div className="flex px-2 py-2 pb-3">
                            <Avatar
                              alt="Morris"
                              src="/static/images/avatar/1.jpg"
                              sx={{ width: 36, height: 36 }}
                              className=""
                            />
                            <div className="block pl-1">
                              <p className="" style={{ fontSize: "13px" }}>
                                Mohamed Nishath
                              </p>
                              <p className="" style={{ fontSize: "10px" }}>
                                nishathmohamed786@gmail.com
                              </p>
                            </div>
                          </div>
                        </div>
                      </Box>
                    </>
                  ) : (
                    <>
                      <div>
                        <button
                          onClick={() => handleLogin()}
                          className="py-4 px-8"
                        >
                          Log in
                        </button>
                      </div>
                    </>
                  )}
                  <Divider />
                  <List>
                    {items.map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemIcon
                            className=""
                            style={{ color: "#B51F2A" }}
                          >
                            {iconObj[text]}
                          </ListItemIcon>
                          <ListItemText
                            className="text-sm"
                            primary={
                              text.charAt(0).toUpperCase() + text.slice(1)
                            }
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider />
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <Logout />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                  <Divider />
                </Drawer>
              </Box>
            </div>
          </Box>
        </div>
      </header>
    </div>
  );
};

export default navbar;
