import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    boxShadow: 'none',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box>
                    <Box sx={{ textAlign: "center", mb: 6, mt: 6 }}>
                        <Typography variant='h5' sx={{ color: '#2c4964', fontSize: '34px', fontWeight: 400 }}>
                            Contact
                        </Typography>

                        <Typography
                            variant='body2'
                            sx={{ maxWidth: "600px", mx: "auto", mt: 1, color: "text.secondary" }}
                        >
                            Get in touch with our team for quick assistance
                        </Typography>
                    </Box>

                    <Box>
                        <iframe style={{ border: 0, width: '100%', height: "270px" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>

                    <Box sx={{ py: 5, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                        <Box sx={{ width: { xs: "100%", md: "30%" } }}>
                            <Stack spacing={2}>
                                <Item>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{ p: '8px', background: '#1977cc', borderRadius: '50%', color: '#fff', width: '45px', height: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><LocationOnIcon /></Box>
                                        <Box sx={{ textAlign: 'start' }}>
                                            <Typography variant='h6' fontWeight={600} sx={{ color: '##2c4964' }}>Location</Typography>
                                            <Typography variant='body2' sx={{ color: '#444444' }}>A108 Adam Street, New York, NY 535022</Typography>
                                        </Box>
                                    </Box>
                                </Item>
                                <Item>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{ p: '8px', background: '#1977cc', borderRadius: '50%', color: '#fff', width: '45px', height: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PhoneIcon /></Box>
                                        <Box sx={{ textAlign: 'start' }}>
                                            <Typography variant='h6' fontWeight={600} sx={{ color: '##2c4964' }}>Call Us</Typography>
                                            <Typography variant='body2' sx={{ color: '#444444' }}>+1 5589 55488 55</Typography>
                                        </Box>
                                    </Box>
                                </Item>
                                <Item>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{ p: '8px', background: '#1977cc', borderRadius: '50%', color: '#fff', width: '45px', height: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><EmailIcon /></Box>
                                        <Box sx={{ textAlign: 'start' }}>
                                            <Typography variant='h6' fontWeight={600} sx={{ color: '##2c4964' }}>Email Us</Typography>
                                            <Typography variant='body2' sx={{ color: '#444444' }}>info@example.com</Typography>
                                        </Box>
                                    </Box>
                                </Item>
                            </Stack>
                        </Box>

                        <Box sx={{ width: { xs: "100%", md: "70%" } }}>
                            <Stack spacing={2}>
                                <Item>
                                    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
                                        <TextField id="outlined-basic" label="Your Name" variant="outlined" fullWidth />
                                        <TextField id="outlined-basic" label="Your Email" variant="outlined" fullWidth />
                                    </Box>
                                </Item>
                                <Item>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <TextField id="outlined-basic" label="Subject" variant="outlined" fullWidth />
                                    </Box>
                                </Item>
                                <Item>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        fullWidth
                                    />
                                </Item>
                                <Item>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            mt: 3,
                                            textTransform: "none",
                                            borderRadius: 5,
                                            fontSize: "0.75rem",
                                            padding: '8px 40px',
                                            fontSize: '16px'
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </Item>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}