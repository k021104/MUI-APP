import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import doc1 from '../assets/img/doctors-1.jpg';
import doc2 from '../assets/img/doctors-2.jpg';
import doc3 from '../assets/img/doctors-3.jpg';
import doc4 from '../assets/img/doctors-4.jpg';
import XIcon from '@mui/icons-material/X';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Doctor = () => {
    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ textAlign: "center", mb: 6, mt: 6 }}>
                    <Typography variant='h5' sx={{ color: '#2c4964', fontSize: '34px', fontWeight: 400 }}>
                        Doctors
                    </Typography>

                    <Typography
                        variant='body2'
                        sx={{ maxWidth: "600px", mx: "auto", mt: 1, color: "text.secondary" }}
                    >
                        Expert medical professionals ready to guide you at every step of your healthcare journey.
                    </Typography>
                </Box>

                <Box>

                    <Box sx={{ display: { md: 'flex', sm: 'block' }, textAlign: 'center', justifyContent: 'space-around' }}>
                        {/* Card1 */}
                        <Box sx={{
                            m: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                            p: 2,
                            width: { md: 600 },
                            height: '200px',
                            transition: "0.3s",
                            borderRadius: 1,
                            "&:hover": {
                                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                                transform: "translateY(-4px)"
                            }
                        }}
                        >
                            <Box
                                component="img"
                                src={doc1}
                                alt="demo"
                                sx={{ width: { xs: 120, md: 180 }, borderRadius: '50%', p: 2 }}
                            />

                            <Box sx={{ textAlign: 'left', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '180px' }}>
                                <Typography variant='h6' fontWeight={700} sx={{ color: '#2c4964' }}>Walter White</Typography>
                                <Typography variant='body1' fontWeight={550} sx={{ color: '#444444' }}>Chief Medical Officer</Typography>
                                <Typography variant='body2' sx={{ color: '#6c757d' }}>Providing expert leadership in every aspect of patient care.</Typography>

                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <XIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                    <FacebookRoundedIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                    <InstagramIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                    <LinkedInIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                </Box>
                            </Box>

                        </Box>
                        {/* Card2 */}
                        <Box sx={{
                            m: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                            p: 2,
                            width: { md: 600 },
                            height: '200px',
                            transition: "0.3s",
                            borderRadius: 1,
                            "&:hover": {
                                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                                transform: "translateY(-4px)"
                            }
                        }}
                        >
                            <Box
                                component="img"
                                src={doc2}
                                alt="demo"
                                sx={{ width: { xs: 120, md: 180 }, borderRadius: '50%', p: 2 }}
                            />

                            <Box sx={{ textAlign: 'left', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '180px' }}>
                                <Typography variant='h6' fontWeight={700} sx={{ color: '#2c4964' }}>Sarah Jhonson</Typography>
                                <Typography variant='body1' fontWeight={550} sx={{ color: '#444444' }}>Anesthesiologist</Typography>
                                <Typography variant='body2' sx={{ color: '#6c757d' }}>Expert in delivering safe and pain-free surgical experiences</Typography>

                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <XIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                    <FacebookRoundedIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                    <InstagramIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                    <LinkedInIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                    <Box sx={{ display: { md: 'flex', sm: 'block' }, textAlign: 'center', justifyContent: 'space-around' }}>
                        {/* Card3 */}
                        <Box sx={{
                            m: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                            p: 2,
                            width: { md: 600 },
                            height: '200px',
                            transition: "0.3s",
                            borderRadius: 1,
                            "&:hover": {
                                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                                transform: "translateY(-4px)"
                            }
                        }}
                        >
                            <Box
                                component="img"
                                src={doc3}
                                alt="demo"
                                sx={{ width: { xs: 120, md: 180 }, borderRadius: '50%', p: 2 }}
                            />

                            <Box sx={{ textAlign: 'left', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '180px' }}>
                                <Typography variant='h6' fontWeight={700} sx={{ color: '#2c4964' }}>William Anderson</Typography>
                                <Typography variant='body1' fontWeight={550} sx={{ color: '#444444' }}>Cardiology</Typography>
                                <Typography variant='body2' sx={{ color: '#6c757d' }}>Dedicated to heart health and expert cardiovascular care</Typography>

                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <XIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                    <FacebookRoundedIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                    <InstagramIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                    <LinkedInIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                </Box>
                            </Box>

                        </Box>
                        {/* Card4 */}
                        <Box sx={{
                            m: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                            p: 2,
                            width: { md: 600 },
                            height: '200px',
                            transition: "0.3s",
                            borderRadius: 1,
                            "&:hover": {
                                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                                transform: "translateY(-4px)"
                            }
                        }}  
                        >
                            <Box
                                component="img"
                                src={doc4}
                                alt="demo"
                                sx={{ width: { xs: 120, md: 180 }, borderRadius: '50%', p: 2 }}
                            />

                            <Box sx={{ textAlign: 'left', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '180px' }}>
                                <Typography variant='h6' fontWeight={700} sx={{ color: '#2c4964' }}>Amanda Jepson</Typography>
                                <Typography variant='body1' fontWeight={550} sx={{ color: '#444444' }}>Neurosurgeon</Typography>
                                <Typography variant='body2' sx={{ color: '#6c757d' }}>Expert in advanced brain and nervous system surgeries</Typography>

                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <XIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                    <FacebookRoundedIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                    <InstagramIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                    <LinkedInIcon sx={{ background: '#4444440f', color: '#6c757d', p: 1, fontSize: '35px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { background: '#1977cc', color: '#fff' } }} />
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Doctor