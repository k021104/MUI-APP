import React from 'react';
import { Box, Container, Typography, Stack, Link, IconButton } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const BottomFooter = () => {
    return (
        <Box sx={{ backgroundColor: '#f0f6fc', py: 6, mt: 2, borderTop: "1px solid #d6dee8"}}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', mb: 4 }}>
                    
                    {/* Left Section */}
                    <Box sx={{ minWidth: 250, mb: { xs: 4, md: 0 } }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#2c4964' }}>
                            Medilab
                        </Typography>
                        <Typography>A108 Adam Street</Typography>
                        <Typography>New York, NY 535022</Typography>
                        <Typography sx={{ mt: 1 }}><strong>Phone:</strong> +1 5589 55488 55</Typography>
                        <Typography><strong>Email:</strong> info@example.com</Typography>

                        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                            <IconButton sx={{ border: '1px solid #ccc', color: '#6c757d' }}><XIcon /></IconButton>
                            <IconButton sx={{ border: '1px solid #ccc', color: '#6c757d' }}><FacebookRoundedIcon /></IconButton>
                            <IconButton sx={{ border: '1px solid #ccc', color: '#6c757d' }}><InstagramIcon /></IconButton>
                            <IconButton sx={{ border: '1px solid #ccc', color: '#6c757d' }}><LinkedInIcon /></IconButton>
                        </Stack>
                    </Box>

                    {/* Middle Sections */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>

                        {/* Useful Links */}
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Useful Links</Typography>
                            <Stack spacing={1}>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Home</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>About us</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Services</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Terms of service</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Privacy policy</Link>
                            </Stack>
                        </Box>

                        {/* Our Services */}
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Our Services</Typography>
                            <Stack spacing={1}>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Web Design</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Web Development</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Product Management</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Marketing</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Graphic Design</Link>
                            </Stack>
                        </Box>

                        {/* Hic solutasetp */}
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Hic solutasetp</Typography>
                            <Stack spacing={1}>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Molestiae accusamus iure</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Excepturi dignissimos</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Suscipit distinctio</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Dilecta</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Sit quas consectetur</Link>
                            </Stack>
                        </Box>

                        {/* Nobis illum */}
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Nobis illum</Typography>
                            <Stack spacing={1}>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Ipsam</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Laudantium dolorum</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Dinera</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Trodelas</Link>
                                <Link href="#" underline="none" sx={{ color: 'text.secondary', transition: '0.2s', "&:hover": { color: "#1977cc" } }}>Flexo</Link>
                            </Stack>
                        </Box>
                    </Box>
                </Box>

                {/* Thin Border Above Copyright */}
                <Box sx={{ borderTop: "1px solid #d6dee8", pt: 5 }}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        © Copyright <strong>Medilab</strong> All Rights Reserved
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        Designed by <Link href="#" color="primary" underline="hover">BootstrapMade</Link>
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default BottomFooter;
