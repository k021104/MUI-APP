import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import heroimg from '../assets/img/herobanner.jpg';
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';


const mainCard = {
  title: 'Why Choose Medilab?',
  description:
    'MadiLab is trusted for accurate diagnostic results powered by advanced technology and skilled technicians. We offer affordable pricing, fast report delivery, and a hygienic testing environment. Our commitment to quality ensures reliable health insights for every patient.',
};

const featureCards = [
  {
    id: 1,
    title: 'Patient Reports',
    description: 'Access your lab results and diagnostic reports securely anytime.',
  },
  {
    id: 2,
    title: 'Our Expertise',
    description: 'Highly skilled doctors and technicians providing advanced and reliable care.',
  },
  {
    id: 3,
    title: 'Appointment Updates',
    description: 'Get timely notifications about your appointments and test schedules.',
  },
];

// const featureCards = [
//   {
//     id: 1,
//     title: 'Our Expertise',
//     description: 'Highly trained professionals ensuring accurate diagnostics and timely reports.',
//   },
//   {
//     id: 2,
//     title: 'Affordable & Fast',
//     description: 'Transparent pricing and fast report delivery for your convenience.',
//   },
//   {
//     id: 3,
//     title: 'Hygienic Environment',
//     description: 'We maintain a clean and safe testing environment for all patients.',
//   },
// ];

const HeroSlider = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "flex-start",
          }}
        >
          {/* HERO TEXT */}
          <Box>
            <Typography variant="h3" fontWeight={700} sx={{ color: '#2c4964' }}>
              Welcome to Medilab
            </Typography>
            <Typography variant="h5" sx={{ color: '#2c4964' }}>
              We are a team dedicated to providing reliable and compassionate care.
            </Typography>
          </Box>

          {/* CARDS ROW */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {/* Main Card */}
            <Card
              sx={{
                flex: '2 1 25%',
                minWidth: 280,
                background: "#1977cc",
                color: "#fff",
                paddingBottom: 2,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" fontWeight={700} sx={{ pb: 2 }}>
                  {mainCard.title}
                </Typography>
                <Typography variant="body1">{mainCard.description}</Typography>
              </CardContent>

              <Box sx={{ px: 3, textAlign: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                    fontWeight: "bold",
                    transition: "0.4s",
                    borderRadius: "90px",
                    width: "50%",
                    "&:hover": { background: "rgba(255, 255, 255, 1)", color: "#1977ccff" },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Card>

            {/* Feature Cards
            {featureCards.map((card) => (
              <Card
                key={card.id}
                sx={{
                  flex: '1 1 18%',
                  minWidth: 200,
                  background: "#1977cc",
                  color: "#fff",
                  paddingBottom: 2,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <AssignmentOutlinedIcon />
                  <Typography variant="h5" fontWeight={700} sx={{ pb: 1 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2">{card.description}</Typography>
                </CardContent>
              </Card>
            ))} */}

            <Card sx={{
              flex: '1 1 18%',
              minWidth: 200,
              background: "rgba(255, 255, 255, 0.8)",
              color: "#1977cc",
              paddingBottom: 2,
              height: 300,
              borderRadius: 3,
            }}>
              <CardContent
                sx={{
                  p: 5,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '70%'
                }}>
                <AssignmentOutlinedIcon sx={{ fontSize: 40 }} />
                <Typography variant="h5" fontWeight={700} sx={{ color: '#2c4964' }}>
                  Patient Reports
                </Typography>
                <Typography variant="body2" sx={{ color: '#444444'}}>
                  Access your lab results and diagnostic reports securely anytime.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              flex: '1 1 18%',
              minWidth: 200,
              background: "rgba(255, 255, 255, 0.8)",
              color: "#1977cc",
              paddingBottom: 2,
              height: 300,
              borderRadius: 3
            }}>
              <CardContent sx={{
                p: 5,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '70%'
              }}>
                <DiamondOutlinedIcon sx={{ fontSize: 40 }} />
                <Typography variant="h5" fontWeight={700} sx={{ color: '#2c4964' }}>
                  Our Expertise
                </Typography>
                <Typography variant="body2" sx={{ color: '#444444'}}>
                  Highly skilled doctors and technicians providing advanced and reliable care.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{
              flex: '1 1 18%',
              minWidth: 200,
              background: "rgba(255, 255, 255, 0.8)",
              color: "#1977cc",
              paddingBottom: 2,
              height: 300,
              borderRadius: 3,
            }}>
              <CardContent sx={{
                p: 5,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '70%'
              }}>
                <AllInboxOutlinedIcon sx={{ fontSize: 40 }} />
                <Typography variant="h5" fontWeight={700} sx={{ color: '#2c4964' }}>
                  Appointment Updates
                </Typography>
                <Typography variant="body2" sx={{ color: '#444444'}}>
                  Get timely notifications about your appointments and test schedules.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSlider;
