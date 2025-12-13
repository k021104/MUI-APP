import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user1 from '../assets/img/departments-1.jpg';
import Rating from '@mui/material/Rating';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import testimonial1 from '../assets/img/testimonials-1.jpg';
import testimonial2 from '../assets/img/testimonials-2.jpg';
import testimonial3 from '../assets/img/testimonials-3.jpg';
import testimonial4 from '../assets/img/testimonials-4.jpg';
import testimonial5 from '../assets/img/testimonials-5.jpg';
import { Loop } from '@mui/icons-material';

export default function SimpleContainer() {

    const [value, setValue] = React.useState(5);

    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 3000,
        pauseOnHover: true,

    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ width: { md: '50%', xs: '100%' }, p: { md: 2 } }}>
                        <Typography variant='h4' fontWeight={700} sx={{ my: 2, color: '#2c4964' }}>Testimonials</Typography>
                        <Typography variant='body1' sx={{ color: '#444444' }}>We’re proud to have earned the trust of so many patients. Read their stories and experiences to see how our dedicated team makes every visit comfortable, caring, and reassuring</Typography>
                    </Box>
                    <Box sx={{ width: { md: '50%', xs: '100%' }, height: 'fit-content', boxShadow: "0 4px 16px rgba(0,0,0,0.1)", p: 4, mt: { xs: 4 }, borderRadius: 2 }}>
                        <Slider {...settings}>
                            <div>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { xs: 'center', sm: 'flex-start' },
                                    gap: 2,
                                    minWidth: "260px"
                                }}>
                                    <img src={testimonial1} style={{ borderRadius: '50%', width: '80px', height: '80px' }}></img>

                                    <Box sx={{ textAlign: { md: 'start', sm: 'start', xs: 'center' } }}>
                                        <Typography variant='h6' fontWeight={700} sx={{ color: '#2c4964' }}>Daniel Roberts</Typography>
                                        <Typography>Ceo & Founder</Typography>
                                        <Rating name="read-only" value={value} readOnly />
                                    </Box>
                                </Box>
                                <Box sx={{ textAlign: 'justify', color: '#444444' }}>
                                    <p><FormatQuoteIcon sx={{ transform: 'rotate(180deg)', pl: 1, fontSize: '25px', color: '#1977cc66' }} />Excellent hospital with experienced doctors and very supportive staff. The diagnostic process was fast and accurate. I am completely satisfied with the care provided.<FormatQuoteIcon sx={{ pl: 1, fontSize: '25px', mt: '-5px', color: '#1977cc66' }} /></p>
                                </Box>
                            </div>
                            <div>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { xs: 'center', sm: 'flex-start' },
                                    gap: 2,
                                    minWidth: "260px"
                                }}>
                                    <img src={testimonial2} style={{ borderRadius: '50%', width: '80px', height: '80px' }}></img>

                                    <Box sx={{ textAlign: { md: 'start', sm: 'start', xs: 'center' } }}>
                                        <Typography variant='h6' fontWeight={700} sx={{ color: '#2c4964' }}>Sara Wilsson</Typography>
                                        <Typography>Designer</Typography>
                                        <Rating name="read-only" value={value} readOnly />
                                    </Box>
                                </Box>
                                <Box sx={{ textAlign: 'justify', color: '#444444' }}>
                                    <p><FormatQuoteIcon sx={{ transform: 'rotate(180deg)', pl: 1, fontSize: '25px', color: '#1977cc66' }} />The doctors were extremely supportive and explained every step clearly. The facilities were clean and modern, and I felt completely safe throughout my treatment. I would highly recommend this hospital to anyone.<FormatQuoteIcon sx={{ pl: 1, fontSize: '25px', mt: '-5px', color: '#1977cc66' }} /></p>
                                </Box>
                            </div>
                            <div>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { xs: 'center', sm: 'flex-start' },
                                    gap: 2,
                                    minWidth: "260px"
                                }}>
                                    <img src={testimonial3} style={{ borderRadius: '50%', width: '80px', height: '80px' }}></img>

                                    <Box sx={{ textAlign: { md: 'start', sm: 'start', xs: 'center' } }}>
                                        <Typography variant='h6' fontWeight={700} sx={{ color: '#2c4964' }}>Jena Karlis</Typography>
                                        <Typography>Store Owner</Typography>
                                        <Rating name="read-only" value={value} readOnly />
                                    </Box>
                                </Box>
                                <Box sx={{ textAlign: 'justify', color: '#444444' }}>
                                    <p><FormatQuoteIcon sx={{ transform: 'rotate(180deg)', pl: 1, fontSize: '25px', color: '#1977cc66' }} />I received quick diagnosis and excellent care. The nursing staff was attentive and friendly. The only issue was a slight wait time, but overall the experience was very good.<FormatQuoteIcon sx={{ pl: 1, fontSize: '25px', mt: '-5px', color: '#1977cc66' }} /></p>
                                </Box>
                            </div>
                            <div>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { xs: 'center', sm: 'flex-start' },
                                    gap: 2,
                                    minWidth: "260px"
                                }}>
                                    <img src={testimonial4} style={{ borderRadius: '50%', width: '80px', height: '80px' }}></img>

                                    <Box sx={{ textAlign: { md: 'start', sm: 'start', xs: 'center' } }}>
                                        <Typography variant='h6' fontWeight={700} sx={{ color: '#2c4964' }}>Matt Brandon</Typography>
                                        <Typography>Freelancer</Typography>
                                        <Rating name="read-only" value={value} readOnly />
                                    </Box>
                                </Box>
                                <Box sx={{ textAlign: 'justify', color: '#444444' }}>
                                    <p><FormatQuoteIcon sx={{ transform: 'rotate(180deg)', pl: 1, fontSize: '25px', color: '#1977cc66' }} />My surgery went smoothly, and the post-operative support was outstanding. The staff continuously monitored my recovery and made sure I was comfortable at all times.<FormatQuoteIcon sx={{ pl: 1, fontSize: '25px', mt: '-5px', color: '#1977cc66' }} /></p>
                                </Box>
                            </div>
                            <div>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { xs: 'center', sm: 'flex-start' },
                                    gap: 2,
                                    minWidth: "260px"
                                }}>
                                    <img src={testimonial5} style={{ borderRadius: '50%', width: '80px', height: '80px' }}></img>

                                    <Box sx={{ textAlign: { md: 'start', sm: 'start', xs: 'center' } }}>
                                        <Typography variant='h6' fontWeight={700} sx={{ color: '#2c4964' }}>John Larson</Typography>
                                        <Typography>Business Owner</Typography>
                                        <Rating name="read-only" value={value} readOnly />
                                    </Box>
                                </Box>
                                <Box sx={{ textAlign: 'justify', color: '#444444' }}>
                                    <p><FormatQuoteIcon sx={{ transform: 'rotate(180deg)', pl: 1, fontSize: '25px', color: '#1977cc66' }} />The doctors here truly care about patients. They gave me the right treatment on time and helped me recover faster than expected. World-class facilities and very professional team.<FormatQuoteIcon sx={{ pl: 1, fontSize: '25px', mt: '-5px', color: '#1977cc66' }} /></p>
                                </Box>
                            </div>
                        </Slider>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}