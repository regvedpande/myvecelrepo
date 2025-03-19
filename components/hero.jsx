"use client"

import { ArrowForward, Email, GitHub, LinkedIn } from "@mui/icons-material"
import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const theme = useTheme()

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = ref.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      ref.current.style.setProperty("--x", `${x * 20}deg`)
      ref.current.style.setProperty("--y", `${-y * 20}deg`)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 10, md: 15 },
        overflow: "hidden",
        background: (theme) => theme.palette.background.default,
      }}
    >
      <Box
        className="grid-background"
        sx={{
          position: "absolute",
          inset: 0,
          opacity: theme.palette.mode === "light" ? 0.05 : 0.07,
          maskImage: "radial-gradient(ellipse at center, transparent 20%, black)",
        }}
      />
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, textAlign: { xs: "center", lg: "left" } }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 1,
                    color: "text.primary",
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(90deg, #f5f5f5 0%, #bbbbbb 100%)"
                        : "linear-gradient(90deg, #333333 0%, #555555 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Full-Stack Developer
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                    maxWidth: { xs: "100%", lg: "600px" },
                    mx: { xs: "auto", lg: 0 },
                    lineHeight: 1.6,
                  }}
                >
                  Building innovative solutions with .NET, Java, Python, and AI/ML technologies.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", lg: "flex-start" },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: "8px",
                    boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px 0 rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: "8px",
                    borderWidth: "1.5px",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      borderWidth: "1.5px",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Download Resume
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "1rem",
                  justifyContent: { xs: "center", lg: "flex-start" },
                }}
              >
                <IconButton
                  component="a"
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  sx={{
                    color: "text.primary",
                    transition: "transform 0.2s ease, color 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      color: "primary.main",
                    },
                  }}
                >
                  <GitHub fontSize="medium" />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  sx={{
                    color: "text.primary",
                    transition: "transform 0.2s ease, color 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      color: "primary.main",
                    },
                  }}
                >
                  <LinkedIn fontSize="medium" />
                </IconButton>
                <IconButton
                  component="a"
                  href="mailto:example@example.com"
                  size="large"
                  sx={{
                    color: "text.primary",
                    transition: "transform 0.2s ease, color 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      color: "primary.main",
                    },
                  }}
                >
                  <Email fontSize="medium" />
                </IconButton>
              </motion.div>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              ref={ref}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "400px",
                aspectRatio: "1/1",
                transform: "perspective(1000px) rotateX(var(--y, 0)) rotateY(var(--x, 0))",
                transition: "transform 0.1s ease",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: (theme) =>
                    theme.palette.mode === "light"
                      ? "linear-gradient(135deg, #333333, #555555)"
                      : "linear-gradient(135deg, #f5f5f5, #bbbbbb)",
                  p: 1,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: (theme) => theme.palette.background.default,
                    p: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: (theme) =>
                        theme.palette.mode === "light"
                          ? "linear-gradient(135deg, rgba(51,51,51,0.1), rgba(85,85,85,0.1))"
                          : "linear-gradient(135deg, rgba(245,245,245,0.1), rgba(187,187,187,0.1))",
                      p: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        background: (theme) => theme.palette.background.default,
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "inset 0 0 20px rgba(0,0,0,0.1)",
                      }}
                    >
                      <img
                        src="/WhatsApp Image 2025-03-18 at 20.51.59_31b61cd3.jpg?height=400&width=400"
                        alt="Developer Portrait"
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>

              <motion.div
                style={{
                  position: "absolute",
                  top: "-1rem",
                  right: "-1rem",
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  zIndex: 1,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: (theme) => theme.palette.primary.main,
                    color: (theme) => (theme.palette.mode === "light" ? "#fff" : "#000"),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  }}
                >
                  8+
                </Box>
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  bottom: "-1rem",
                  left: "-1rem",
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  zIndex: 1,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: (theme) => theme.palette.primary.main,
                    color: (theme) => (theme.palette.mode === "light" ? "#fff" : "#000"),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  }}
                >
                  17+
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

// Helper component for social media buttons
const IconButton = ({ children, ...props }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        minWidth: "auto",
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        p: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: "1.5px",
        "&:hover": {
          borderWidth: "1.5px",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

