"use client"

import {
  Close as CloseIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Menu as MenuIcon,
} from "@mui/icons-material"
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { ColorModeContext } from "./theme-registry"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [scrolled, setScrolled] = useState(false)

  // Use scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen, isMobile])

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          backgroundColor: scrolled
            ? (theme) => (theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(18, 18, 18, 0.9)")
            : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "background-color 0.3s ease",
          borderBottom: scrolled
            ? (theme) => `1px solid ${theme.palette.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"}`
            : "none",
          color: (theme) => theme.palette.mode === "light" ? "text.primary" : "#fff"
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Button
              href="#"
              color="inherit"
              sx={{
                textTransform: "none",
                fontWeight: 700,
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: (theme) => (theme.palette.mode === "light" ? "#fff" : "#000"),
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                SD
              </Box>
              <Typography variant="h6" component="span">
                Dev Portfolio
              </Typography>
            </Button>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  href={item.href}
                  color="inherit"
                  sx={{
                    fontWeight: 500,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
                      height: "2px",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "primary.main",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "70%",
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                color="inherit"
                onClick={colorMode.toggleColorMode}
                sx={{
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "rotate(30deg)",
                  },
                }}
              >
                {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>

              <Button
                variant="outlined"
                color="primary"
                sx={{
                  display: { xs: "none", md: "flex" },
                  borderWidth: "1.5px",
                  "&:hover": {
                    borderWidth: "1.5px",
                    backgroundColor: "rgba(0,0,0,0.04)",
                  },
                }}
              >
                Download CV
              </Button>

              <IconButton
                color="inherit"
                onClick={toggleMenu}
                sx={{
                  display: { md: "none" },
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleMenu}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: "100%",
            boxSizing: "border-box",
            background: (theme) => theme.palette.background.default,
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={toggleMenu}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ pt: 4 }}>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={toggleMenu}
                sx={{
                  py: 2,
                  "&:hover": {
                    backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                  },
                }}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    variant: "h6",
                    sx: { fontWeight: 500 },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2, mt: "auto" }}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            size="large"
            sx={{
              py: 1.5,
              borderWidth: "1.5px",
              "&:hover": {
                borderWidth: "1.5px",
              },
            }}
          >
            Download CV
          </Button>
        </Box>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  )
}

