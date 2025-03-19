"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
} from "@mui/material"
import {
  GitHub as GitHubIcon,
  Language as LanguageIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Star as StarIcon,
} from "@mui/icons-material"

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null)
  const [tabValue, setTabValue] = useState("all")
  const [techDialogOpen, setTechDialogOpen] = useState(false)
  const [selectedTech, setSelectedTech] = useState([])
  const theme = useTheme()

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const openTechDialog = (technologies) => {
    setSelectedTech(technologies)
    setTechDialogOpen(true)
  }

  const projects = [
    // .NET Projects (4)
    {
      id: "net1",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=300&width=500",
      category: "net",
      technologies: [".NET Core", "C#", "SQL Server", "Azure", "Entity Framework"],
      github: "https://github.com/username/ecommerce",
      live: "https://ecommerce-demo.vercel.app",
      featured: true,
      longDescription:
        "This e-commerce platform provides a comprehensive solution for online retail businesses. It includes product catalog management, user authentication, shopping cart functionality, order processing, and integration with payment gateways. The application is built with a microservices architecture, allowing for scalability and maintainability.",
    },
    {
      id: "net2",
      title: "Healthcare Management System",
      description: "A system for managing patient records, appointments, and medical history for healthcare providers.",
      image: "/placeholder.svg?height=300&width=500",
      category: "net",
      technologies: [".NET Core", "C#", "SQL Server", "Azure", "Blazor"],
      github: "https://github.com/username/healthcare",
      live: "https://healthcare-demo.vercel.app",
      longDescription:
        "This healthcare management system streamlines the operations of medical facilities by digitizing patient records, automating appointment scheduling, and providing secure access to medical histories. It features role-based access control, audit logging for compliance, and integration with laboratory systems for test results.",
    },
    {
      id: "net3",
      title: "CRM System",
      description: "A customer relationship management system for sales teams.",
      image: "/placeholder.svg?height=300&width=500",
      category: "net",
      technologies: [".NET Core", "C#", "SQL Server", "Angular", "Entity Framework"],
      github: "https://github.com/username/crm",
      live: "https://crm-demo.vercel.app",
      longDescription:
        "This CRM system helps sales teams manage their customer relationships, track leads, and monitor sales performance. It includes features for contact management, opportunity tracking, task scheduling, and reporting. The system is built with a .NET Core backend and an Angular frontend, providing a responsive and intuitive user experience.",
    },
    {
      id: "net4",
      title: "Document Management System",
      description: "A system for storing, organizing, and retrieving documents.",
      image: "/placeholder.svg?height=300&width=500",
      category: "net",
      technologies: [".NET Core", "C#", "SQL Server", "Azure Blob Storage", "React"],
      github: "https://github.com/username/document-management",
      live: "https://document-management-demo.vercel.app",
      longDescription:
        "This document management system provides a centralized repository for storing, organizing, and retrieving documents. It features document versioning, access control, full-text search, and metadata management. The system is built with a .NET Core backend, SQL Server for metadata storage, and Azure Blob Storage for document storage.",
    },

    // Java Projects (2)
    {
      id: "java1",
      title: "Banking Microservices",
      description: "A microservices-based banking system with account management, transactions, and reporting.",
      image: "/placeholder.svg?height=300&width=500",
      category: "java",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kafka"],
      github: "https://github.com/username/banking",
      live: "https://banking-demo.vercel.app",
      featured: true,
      longDescription:
        "This banking system is built using a microservices architecture to handle various banking operations. It includes services for account management, transaction processing, customer information, and reporting. The system uses Kafka for event-driven communication between services, ensuring data consistency and reliability.",
    },
    {
      id: "java2",
      title: "Inventory Management System",
      description: "A system for tracking inventory levels, orders, sales, and deliveries for retail businesses.",
      image: "/placeholder.svg?height=300&width=500",
      category: "java",
      technologies: ["Java", "Spring Boot", "MySQL", "Hibernate", "REST API"],
      github: "https://github.com/username/inventory",
      live: "https://inventory-demo.vercel.app",
      longDescription:
        "This inventory management system helps businesses track their stock levels, manage orders, and monitor sales and deliveries. It features real-time inventory updates, low-stock alerts, barcode scanning integration, and comprehensive reporting tools. The system is designed to be scalable and can be customized for different types of retail businesses.",
    },

    // Python Projects (2)
    {
      id: "python1",
      title: "Data Analysis Dashboard",
      description: "An interactive dashboard for visualizing and analyzing business data.",
      image: "/placeholder.svg?height=300&width=500",
      category: "python",
      technologies: ["Python", "Django", "Pandas", "Matplotlib", "PostgreSQL"],
      github: "https://github.com/username/data-dashboard",
      live: "https://data-dashboard-demo.vercel.app",
      featured: true,
      longDescription:
        "This data analysis dashboard provides businesses with interactive visualizations of their key metrics. It includes customizable charts and graphs, data filtering options, and export capabilities. The dashboard is built with Django on the backend and uses Pandas for data manipulation and Matplotlib for visualization.",
    },
    {
      id: "python2",
      title: "Automated Testing Framework",
      description: "A framework for automating software testing processes and generating reports.",
      image: "/placeholder.svg?height=300&width=500",
      category: "python",
      technologies: ["Python", "Selenium", "PyTest", "Jenkins", "Docker"],
      github: "https://github.com/username/testing-framework",
      live: "https://testing-framework-demo.vercel.app",
      longDescription:
        "This automated testing framework streamlines the software testing process by providing tools for writing, executing, and reporting on tests. It supports both unit and integration testing, with features for parallel test execution, test data management, and detailed reporting. The framework is integrated with CI/CD pipelines for continuous testing.",
    },

    // AI/ML Projects (3)
    {
      id: "ai1",
      title: "Sentiment Analysis Tool",
      description: "A tool for analyzing sentiment in customer reviews and social media posts.",
      image: "/placeholder.svg?height=300&width=500",
      category: "ai",
      technologies: ["Python", "TensorFlow", "NLTK", "Flask", "MongoDB"],
      github: "https://github.com/username/sentiment-analysis",
      live: "https://sentiment-analysis-demo.vercel.app",
      featured: true,
      longDescription:
        "This sentiment analysis tool uses natural language processing and machine learning to analyze the sentiment of text data. It can process customer reviews, social media posts, and other text sources to determine whether the sentiment is positive, negative, or neutral. The tool includes features for batch processing, real-time analysis, and visualization of sentiment trends over time.",
    },
    {
      id: "ai2",
      title: "Predictive Maintenance System",
      description: "A system that predicts equipment failures before they occur using machine learning.",
      image: "/placeholder.svg?height=300&width=500",
      category: "ai",
      technologies: ["Python", "Scikit-learn", "Pandas", "FastAPI", "PostgreSQL"],
      github: "https://github.com/username/predictive-maintenance",
      live: "https://predictive-maintenance-demo.vercel.app",
      longDescription:
        "This predictive maintenance system uses machine learning algorithms to analyze sensor data from industrial equipment and predict potential failures before they occur. It helps businesses reduce downtime, optimize maintenance schedules, and extend the lifespan of their equipment. The system includes features for data collection, model training, real-time monitoring, and alert generation.",
    },
    {
      id: "ai3",
      title: "Image Recognition API",
      description: "An API for identifying objects, scenes, and people in images using deep learning.",
      image: "/placeholder.svg?height=300&width=500",
      category: "ai",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker"],
      github: "https://github.com/username/image-recognition",
      live: "https://image-recognition-demo.vercel.app",
      longDescription:
        "This image recognition API uses deep learning models to identify and classify objects, scenes, and people in images. It provides a simple REST API that developers can integrate into their applications to add image recognition capabilities. The system is containerized with Docker for easy deployment and scalability.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "rgba(245, 245, 245, 0.5)" : "rgba(30, 30, 30, 0.5)",
      }}
      id="projects"
    >
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
              My Projects
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
              Showcasing my work across different technologies
            </Typography>
          </Box>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                display: "flex",
                alignItems: "center",
                color: "text.primary",
                justifyContent: "center",
              }}
            >
              <StarIcon sx={{ mr: 1, color: "rgb(234, 179, 8)" }} />
              Featured Projects
            </Typography>

            <Grid container spacing={3}>
              {projects
                .filter((project) => project.featured)
                .map((project) => (
                  <Grid item xs={12} sm={6} md={3} key={project.id}>
                    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          overflow: "hidden",
                          borderRadius: "16px",
                          boxShadow: theme.shadows[4],
                        }}
                      >
                        <Box sx={{ position: "relative", height: "160px", overflow: "hidden" }}>
                          <CardMedia
                            component="img"
                            height="160"
                            image={project.image}
                            alt={project.title}
                            sx={{
                              transition: "transform 0.5s ease",
                              "&:hover": {
                                transform: "scale(1.1)",
                              },
                            }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                              opacity: 0,
                              transition: "opacity 0.3s ease",
                              display: "flex",
                              alignItems: "flex-end",
                              padding: 2,
                              "&:hover": {
                                opacity: 1,
                              },
                            }}
                          >
                            <Box sx={{ display: "flex", gap: 1 }}>
                              <Button
                                variant="contained"
                                size="small"
                                startIcon={<GitHubIcon />}
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  backgroundColor: "rgba(255,255,255,0.2)",
                                  backdropFilter: "blur(4px)",
                                  "&:hover": {
                                    backgroundColor: "rgba(255,255,255,0.3)",
                                  },
                                }}
                              >
                                GitHub
                              </Button>
                              <Button
                                variant="contained"
                                size="small"
                                startIcon={<LanguageIcon />}
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  backgroundColor: "rgba(255,255,255,0.2)",
                                  backdropFilter: "blur(4px)",
                                  "&:hover": {
                                    backgroundColor: "rgba(255,255,255,0.3)",
                                  },
                                }}
                              >
                                Demo
                              </Button>
                            </Box>
                          </Box>
                        </Box>

                        <CardContent sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}>
                          <Typography variant="h6" component="h3" gutterBottom>
                            {project.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                            {project.description}
                          </Typography>
                          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: "auto" }}>
                            {project.technologies.slice(0, 3).map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{
                                  backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                                  color: "text.primary",
                                  fontSize: "0.7rem",
                                }}
                              />
                            ))}
                            {project.technologies.length > 3 && (
                              <Chip
                                label={`+${project.technologies.length - 3}`}
                                size="small"
                                onClick={() => openTechDialog(project.technologies)}
                                sx={{
                                  backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                                  color: "text.primary",
                                  fontSize: "0.7rem",
                                  cursor: "pointer",
                                }}
                              />
                            )}
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </motion.div>

        {/* All Projects with Tabs */}
        <Box sx={{ mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              mb: 6,
              "& .MuiTabs-flexContainer": {
                justifyContent: { xs: "flex-start", md: "center" },
              },
              "& .MuiTab-root": {
                minWidth: { xs: 120, md: 150 },
                fontWeight: 500,
                fontSize: "1rem",
                textTransform: "none",
                mx: 1,
              },
              "& .Mui-selected": {
                color: "primary.main",
                fontWeight: 700,
              },
              "& .MuiTabs-indicator": {
                height: 3,
                borderRadius: "3px 3px 0 0",
              },
              "& .MuiTabs-scrollButtons": {
                display: { xs: "flex", md: "none" },
              },
            }}
          >
            <Tab label="All Projects" value="all" />
            <Tab label=".NET Projects" value="net" />
            <Tab label="Java Projects" value="java" />
            <Tab label="Python Projects" value="python" />
            <Tab label="AI & ML Projects" value="ai" />
          </Tabs>

          <Grid container spacing={4}>
            {projects
              .filter((project) => tabValue === "all" || project.category === tabValue)
              .map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <motion.div
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    style={{ height: "100%" }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "16px",
                        boxShadow: theme.shadows[2],
                        "&:hover": {
                          boxShadow: theme.shadows[6],
                        },
                      }}
                    >
                      <Box sx={{ position: "relative", height: "180px", overflow: "hidden" }}>
                        <CardMedia
                          component="img"
                          height="180"
                          image={project.image}
                          alt={project.title}
                          sx={{
                            transition: "transform 0.3s ease",
                            "&:hover": {
                              transform: "scale(1.05)",
                            },
                          }}
                        />
                      </Box>
                      <CardContent sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2, flexGrow: 1 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                                color: "text.primary",
                                fontSize: "0.7rem",
                              }}
                            />
                          ))}
                          {project.technologies.length > 3 && (
                            <Chip
                              label={`+${project.technologies.length - 3}`}
                              size="small"
                              onClick={() => openTechDialog(project.technologies)}
                              sx={{
                                backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                                color: "text.primary",
                                fontSize: "0.7rem",
                                cursor: "pointer",
                              }}
                            />
                          )}
                        </Box>

                        {expandedId === project.id && (
                          <Box sx={{ mt: 2, mb: 2 }}>
                            <Typography variant="body2" color="text.secondary" paragraph>
                              {project.longDescription}
                            </Typography>
                          </Box>
                        )}

                        <Button
                          variant="text"
                          color="primary"
                          fullWidth
                          onClick={() => toggleExpand(project.id)}
                          endIcon={expandedId === project.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                          sx={{ mb: 1, mt: "auto" }}
                        >
                          {expandedId === project.id ? "Show Less" : "Show More"}
                        </Button>
                      </CardContent>
                      <CardActions sx={{ p: 3, pt: 0, justifyContent: "space-between" }}>
                        <Button
                          size="small"
                          startIcon={<GitHubIcon />}
                          component="a"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          variant="outlined"
                          sx={{ borderRadius: "8px" }}
                        >
                          GitHub
                        </Button>
                        <Button
                          size="small"
                          startIcon={<LanguageIcon />}
                          component="a"
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          variant="contained"
                          sx={{ borderRadius: "8px" }}
                        >
                          Live Demo
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
          </Grid>
        </Box>

        {/* Technologies Dialog */}
        <Dialog open={techDialogOpen} onClose={() => setTechDialogOpen(false)} aria-labelledby="tech-dialog-title">
          <DialogTitle id="tech-dialog-title">Technologies Used</DialogTitle>
          <DialogContent>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
              {selectedTech.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{
                    backgroundColor: (theme) => `${theme.palette.primary.main}10`,
                    color: "text.primary",
                  }}
                />
              ))}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setTechDialogOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  )
}

