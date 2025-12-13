import React from 'react'
import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ScienceIcon from "@mui/icons-material/Science";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";


const cardStyle = {
    width: "200px",
    p: 3,
    py: 5,                         // space for icon
    borderRadius: "16px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    position: "relative",
    background: '#ffffff',
    borderRadius: 1,
    display: "flex",
    flexDirection: "column",
    alignContent: 'space-between'
};


const iconWrapper = {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translate(-50%, -50%)",  
    background: "#1976d2",
    color: "#fff",
    borderRadius: "50%",
    padding: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
};


const Stats = () => {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 3,
                flexWrap: "wrap",
                justifyContent: "space-around",
                background: '#f1f7fc',
                rowGap: 4,
                py: 10,
            }}
        >
            {/* Card 1 */}
            <Box sx={cardStyle}>
                <Box sx={iconWrapper}>
                    <PersonIcon sx={{ fontSize: 28 }} />
                </Box>
                <Typography variant='h4' fontWeight={700} sx={{ color: '#2c4964' }}>85</Typography>
                <Typography variant='body1'>Doctors</Typography>
            </Box>

            {/* Card 2 */}
            <Box sx={cardStyle}>
                <Box sx={iconWrapper}>
                    <ApartmentIcon sx={{ fontSize: 28 }} />
                </Box>
                <Typography variant='h4' fontWeight={700} sx={{ color: '#2c4964' }}>18</Typography>
                <Typography variant='body1'>Departments</Typography>
            </Box>

            {/* Card 3 */}
            <Box sx={cardStyle}>
                <Box sx={iconWrapper}>
                    <ScienceIcon sx={{ fontSize: 28 }} />
                </Box>
                <Typography variant='h4' fontWeight={700} sx={{ color: '#2c4964' }}>12</Typography>
                <Typography variant='body1'>Research Labs</Typography>
            </Box>

            {/* Card 4 */}
            <Box sx={cardStyle}>
                <Box sx={iconWrapper}>
                    <WorkspacePremiumIcon sx={{ fontSize: 28 }} />
                </Box>
                <Typography variant='h4' fontWeight={700} sx={{ color: '#2c4964' }}>150</Typography>
                <Typography variant='body1'>Awards</Typography>
            </Box>
        </Box>

    )
}

export default Stats