"use client"

import { Box, Chip, Container, Grid, Paper, Typography, useTheme } from "@mui/material"
import { motion } from "framer-motion"

export default function Experience() {
  const theme = useTheme()

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Cylsys Software Solution Pvt Ltd",
      period: "Jul 2024 - Mar 2025",
      description:
        "Developed and maintained enterprise applications using .NET Core and C#. Implemented, MVCs RESTful APIs and integrated with SQL Server databases.",
      skills: [".NET Core", "C#", "SQL Server", "Azure", "REST API"],
    },
    {
      title: "Software Developer",
      company: "MK Placement and Education Services",
      period: "Oct 2023 - Jun 2024",
      description:
        "Built microservices using Java Spring Boot. Worked on backend systems and integrated with various third-party services.",
      skills: ["Java", "Spring Boot", "Microservices", "JPA", "Maven"],
    },
    {
      title: "Business Analyst",
      company: "Acmegrade Pvt Ltd",
      period: "Jan 2023 - Mar 2023",
      description:
        "Gathered and analyzed business requirements. Created detailed specifications for development teams and facilitated communication between stakeholders.",
      skills: ["Requirements Analysis", "Documentation", "JIRA", "Agile", "SQL"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <Box component="section" sx={{ py: 10 }} id="experience">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 2,
                color: "text.primary",
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Work Experience
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                maxWidth: "700px",
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              My professional journey in software development
            </Typography>
          </Box>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} md={4} key={exp.title}>
                <motion.div
                  variants={item}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  style={{ height: "100%" }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      borderRadius: "16px",
                      "&:hover": {
                        boxShadow: (theme) => theme.shadows[8],
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "4px",
                        background: (theme) =>
                          theme.palette.mode === "light"
                            ? "linear-gradient(90deg, #333333, #555555)"
                            : "linear-gradient(90deg, #f5f5f5, #bbbbbb)",
                      },
                    }}
                  >
                    <Box sx={{ position: "relative", zIndex: 1 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                        <Typography variant="h5" component="h3" color="text.primary" fontWeight={600}>
                          {exp.title}
                        </Typography>
                        <Chip
                          label={exp.period}
                          size="small"
                          sx={{
                            backgroundColor: (theme) => `${theme.palette.primary.main}20`,
                            color: "primary.main",
                            fontWeight: 500,
                          }}
                        />
                      </Box>

                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {exp.company}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 3 }}>
                        {exp.description}
                      </Typography>

                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {exp.skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            size="small"
                            sx={{
                              backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                              color: "text.primary",
                              "&:hover": {
                                backgroundColor: (theme) => `${theme.palette.primary.main}20`,
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ marginTop: "3rem" }}
        >
          <Paper
            elevation={2}
            sx={{
              p: 4,
              borderRadius: "16px",
              background: (theme) =>
                theme.palette.mode === "light"
                  ? "linear-gradient(135deg, rgba(51,51,51,0.03), rgba(85,85,85,0.03))"
                  : "linear-gradient(135deg, rgba(245,245,245,0.03), rgba(187,187,187,0.03))",
              border: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography variant="h5" color="text.primary" fontWeight={600} gutterBottom>
              Education
            </Typography>
            <Box sx={{ mt: 3, mb: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Box>
                  <Typography variant="h6" color="text.primary">
                    Bachelor of Technology in Computer Science and Engineering
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  (Specialisation in Artificial Intelligence and Machine Learning)
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Lovely Professional University
                  </Typography>
                </Box>
                <Chip
                  label="2019 - 2023"
                  size="small"
                  sx={{
                    alignSelf: { xs: "flex-start", md: "center" },
                    mt: { xs: 1, md: 0 },
                    backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                    color: "text.primary",
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}

