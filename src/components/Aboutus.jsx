// About.jsx
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FavoriteIcon from '@mui/icons-material/Favorite';
import aboutImg from '../assets/img/aboutusvideoimg.jpg'; 

const features = [
    {
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
        title: 'Trusted & Certified Services',
        desc: 'We provide top-quality healthcare services with certified professionals you can rely on.',
    },
    {
        icon: <LocalHospitalIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
        title: 'Advanced Medical Care',
        desc: 'Equipped with modern facilities and experienced medical staff to ensure the best treatment.',
    },
    {
        icon: <FavoriteIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
        title: 'Compassionate Patient Care',
        desc: 'Our team prioritizes your comfort, care, and well-being at every step of your visit.',
    },
];

const About = () => {
    return (
        <Box
            sx={{
                py: 8,
                px: { xs: 2, md: 10 },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: 6,
            }}
        >
            {/* Left Side - Image with Play Icon */}
            <Box sx={{ position: 'relative', flex: 1 }}>
                <Box
                    component="img"
                    src={aboutImg}
                    alt="About Us"
                    sx={{ width: '100%', borderRadius: 2 }}
                />

                <PlayCircleFilledIcon
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: { xs: 60, md: 80 },
                        color: 'white', // now the circle is filled
                        backgroundColor: 'rgba(25, 118, 210, 0.7)',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        '&:hover': { transform: 'translate(-50%, -50%) scale(1.1)' },
                        zIndex: 2,
                    }}
                />

            </Box>

            {/* Right Side - Text and Features */}
            <Box sx={{ flex: 1 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    At our hospital, we are dedicated to providing trusted and high-quality healthcare services. With a team of experienced medical professionals and state-of-the-art facilities, we ensure that every patient receives advanced medical care tailored to their needs. Compassion, comfort, and patient well-being are at the heart of everything we do, making your health our top priority.
                </Typography>

                <Stack spacing={3}>
                    {features.map((feature, index) => (
                        <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
                            {feature.icon}
                            <Box>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {feature.desc}
                                </Typography>                
                            </Box>
                        </Stack>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
};

export default About;
