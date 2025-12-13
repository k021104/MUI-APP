import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Departments", href: "#departments" },
  { name: "Doctors", href: "#doctors" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setSubmenuOpen(false);
  };

  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            component="a"
            href="/"
            sx={{
              textDecoration: "none",
              color: "#2c4964",
              fontWeight: 700,
              fontSize: { xs: "30px", md: "1.5rem" },
            }}
          >
            Medilab
          </Typography>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
            {navLinks.map((link) =>
              link.submenu ? (
                <Button
                  key={link.name}
                  endIcon={<ArrowDropDownIcon />}
                  sx={{ color: "black", textTransform: "none" }}
                >
                  {link.name}
                </Button>
              ) : (
                <Button
                  key={link.name}
                  href={link.href}
                  sx={{ color: "#2c4964", textTransform: "none", "&:hover": {color: '#1977cc'} }}
                >
                  {link.name}
                </Button>
              )
            )}
            <Button variant="contained" color="primary" sx={{ textTransform: "none", borderRadius: 5 }}>
              Make an Appointment
            </Button>
          </Box>

          {/* Mobile navbar */}
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>

            {/* Mobile Button - ALWAYS visible */}
            <Button
              variant="contained"
              color="primary"
              sx={{
                textTransform: "none",
                borderRadius: 5,
                padding: "4px 10px",
                fontSize: "0.75rem"
              }}
            >
             Make an Appointment
            </Button>

            {/* Menu Icon */}
            <IconButton onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>

            {/* Mobile Menu */}
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{ sx: { width: "200px", p: 1 } }}
            >
              <List>
                {navLinks.map((link) =>
                  link.submenu ? (
                    <Box key={link.name}>
                      <ListItemButton onClick={toggleSubmenu}>
                        <ListItemText primary={link.name} />
                        <ArrowDropDownIcon />
                      </ListItemButton>

                      <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {link.submenu.map((sub) => (
                            <ListItemButton
                              key={sub}
                              sx={{ pl: 4 }}
                              onClick={handleCloseNavMenu}
                            >
                              <ListItemText primary={sub} />
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    </Box>
                  ) : (
                    <ListItemButton
                      key={link.name}
                      component="a"
                      href={link.href}
                      onClick={handleCloseNavMenu}
                    >
                      <ListItemText primary={link.name} />
                    </ListItemButton>
                  )
                )}
              </List>

            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;


// https://bootstrapmade.com/demo/Medilab/