import React from 'react';
import { Box, Typography } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import ScienceIcon from '@mui/icons-material/Science';
import EmergencyIcon from "@mui/icons-material/Emergency";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const serviceCard = {
  height: '250px',
  width: "300px",
  p: 4,
  textAlign: "center",
  borderRadius: "12px",
  background: "#fff",
  transition: "all 0.3s ease",
  border: "1px solid #e5e5e5",
  display: "flex",
  flexDirection: "column",
  justifyContent: 'center',
  alignItems: 'center',
  "&:hover": {
    // transform: "translateY(-5px)",
    background: "#1977cc",
  },
  "&:hover .icon-box": {
    background: "#fff",
    color: "#1977cc",
  },
  "&:hover .service-text": {
    color: "#fff",
  }

};

const iconBox = {
  width: "70px",
  height: "70px",
  borderRadius: "8px",
  background: "#1977cc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: "36px",
  mx: "auto",
  mb: 2,
  boxShadow: "-8px -8px  #ccdbf7ff",
  transition: "all 0.3s ease",
};

const Services = () => {
  return (
    <Box>

      {/* Heading + Description */}
      <Box sx={{ textAlign: "center", mb: 6, mt: 6 }}>
        <Typography variant='h5' sx={{ color: '#2c4964', fontSize: '34px', fontWeight: 400 }}>
          Services
        </Typography>

        <Typography
          variant='body2'
          sx={{ maxWidth: "600px", mx: "auto", mt: 1, color: "text.secondary" }}
        >
          Delivering trusted healthcare services with compassion and expertise.
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >

        {/* Card 1 */}
        <Box sx={serviceCard}>
          <Box sx={iconBox} className="icon-box">
            <LocalHospitalIcon sx={{ fontSize: 36 }} />
          </Box>

          <Typography variant="h6" className="service-text" sx={{ color: "#2c4964", fontWeight: 700 }}>
            General Consultation
          </Typography>

          <Typography variant="body2" className="service-text" sx={{ mt: 1, color: "text.secondary" }}>
            Providing expert medical advice and personalized treatment plans for all patients.
          </Typography>
        </Box>

        {/* Card 2 */}
        <Box sx={serviceCard}>
          <Box sx={iconBox} className="icon-box">
            <LocalPharmacyIcon sx={{ fontSize: 36 }} />
          </Box>

          <Typography variant="h6" className="service-text" sx={{ color: "#2c4964", fontWeight: 700 }}>
            Pharmacy Services
          </Typography>

          <Typography variant="body2" className="service-text" sx={{ mt: 1, color: "text.secondary" }}>
            Access to genuine medicines and health products with expert guidance.
          </Typography>
        </Box>

        {/* Card 3 */}
        <Box sx={serviceCard}>
          <Box sx={iconBox} className="icon-box">
            <ScienceIcon sx={{ fontSize: 36 }} />
          </Box>

          <Typography variant="h6" className="service-text" sx={{ color: "#2c4964", fontWeight: 700 }}>
            Diagnostic Laboratory
          </Typography>

          <Typography variant="body2" className="service-text" sx={{ mt: 1, color: "text.secondary" }}>
            Advanced laboratory tests and diagnostic services for accurate health evaluation.
          </Typography>
        </Box>

        {/* Card 4 */}
        <Box sx={serviceCard}>
          <Box sx={iconBox} className="icon-box">
            <EmergencyIcon sx={{ fontSize: 36 }} />
          </Box>

          <Typography variant="h6" className="service-text" sx={{ color: "#2c4964", fontWeight: 700 }}>
            Emergency Care
          </Typography>

          <Typography variant="body2" className="service-text" sx={{ mt: 1, color: "text.secondary" }}>
            24/7 emergency support with advanced medical equipment and rapid response teams.
          </Typography>
        </Box>

        {/* Card 5 */}
        <Box sx={serviceCard}>
          <Box sx={iconBox} className="icon-box">
            <HealthAndSafetyIcon sx={{ fontSize: 36 }} />
          </Box>

          <Typography variant="h6" className="service-text" sx={{ color: "#2c4964", fontWeight: 700 }}>
            Surgery & Operation Theatre
          </Typography>

          <Typography variant="body2" className="service-text" sx={{ mt: 1, color: "text.secondary" }}>
            Modern operation theaters equipped with advanced medical technology.
          </Typography>
        </Box>

        {/* Card 6 */}
        <Box sx={serviceCard}>
          <Box sx={iconBox} className="icon-box">
            <VolunteerActivismIcon sx={{ fontSize: 36 }} />
          </Box>

          <Typography variant="h6" className="service-text" sx={{ color: "#2c4964", fontWeight: 700 }}>
            Patient Care & Nursing
          </Typography>

          <Typography variant="body2" className="service-text" sx={{ mt: 1, color: "text.secondary" }}>
            Compassionate nursing staff providing round-the-clock support.
          </Typography>
        </Box>

      </Box>

    </Box>
  );
};

export default Services;
