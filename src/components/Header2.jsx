import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  Button,
  Badge,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

import logo from "../assets/img/logo.png";

const pages = ["Products", "Accessories", "Offers"];

// Search styling (desktop only)
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f5f5f5',
  transition: '0.3s ease',
  "&:hover": {
    backgroundColor: '#e9e9e9',
  },
  width: "300px",
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 4),
  },
}));

export default function Header() {
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);
  const [userMenuAnchor, setUserMenuAnchor] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMenuAnchor);
  const isUserMenuOpen = Boolean(userMenuAnchor);

  const openMobileMenu = (e) => setMobileMenuAnchor(e.currentTarget);
  const closeMobileMenu = () => setMobileMenuAnchor(null);

  const openUserMenu = (e) => setUserMenuAnchor(e.currentTarget);
  const closeUserMenu = () => setUserMenuAnchor(null);

  return (
    <AppBar position="static" sx={{ background: "#fff", color: 'black' }}>
      <Toolbar>

        {/* MOBILE MENU BUTTON */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          color="inherit"
          onClick={openMobileMenu}
        >
          <MenuIcon />
        </IconButton>

        {/* LOGO */}
        <Box sx={{ width: "120px", mr: 3 }}>
          <img src={logo} alt="logo" style={{ width: "100%" }} />
        </Box>

        {/* DESKTOP NAV LINKS */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 3 }}>
          {pages.map((p) => (
            <Button key={p} sx={{ color: "black" }}>
              {p}
            </Button>
          ))}
        </Box>

        {/* SEARCH BAR (DESKTOP ONLY) */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" />
        </Search>

        <Box sx={{ flexGrow: 1 }} />

        {/* DESKTOP CART + PROFILE */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <IconButton color="inherit">
            <Badge badgeContent={2} color="error">
              <ShoppingCartCheckoutIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit" onClick={openUserMenu}>
            <AccountCircle />
          </IconButton>
        </Box>

        {/* MOBILE CART + PROFILE */}
        <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
          <IconButton color="inherit">
            <ShoppingCartCheckoutIcon />
          </IconButton>
          <IconButton color="inherit" onClick={openUserMenu}>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>

      {/* MOBILE MENU (PRODUCTS / ACCESSORIES / OFFERS) */}
      <Menu
        anchorEl={mobileMenuAnchor}
        open={isMobileMenuOpen}
        onClose={closeMobileMenu}
      >
        {pages.map((p) => (
          <MenuItem key={p} onClick={closeMobileMenu}>
            {p}
          </MenuItem>
        ))}
      </Menu>

      {/* USER MENU */}
      <Menu anchorEl={userMenuAnchor} open={isUserMenuOpen} onClose={closeUserMenu}>
        <MenuItem onClick={closeUserMenu}>Profile</MenuItem>
        <MenuItem onClick={closeUserMenu}>My Account</MenuItem>
        <MenuItem onClick={closeUserMenu}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
