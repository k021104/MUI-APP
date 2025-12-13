import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import gallery1 from '../assets/img/gallery-1.jpg';
import gallery2 from '../assets/img/gallery-2.jpg';
import gallery3 from '../assets/img/gallery-3.jpg';
import gallery4 from '../assets/img/gallery-4.jpg';
import gallery5 from '../assets/img/gallery-5.jpg';
import gallery6 from '../assets/img/gallery-6.jpg';
import gallery7 from '../assets/img/gallery-7.jpg';
import gallery8 from '../assets/img/gallery-8.jpg';

export default function StandardImageList() {
    return (
        <Box sx={{ width: "100%" }}>

            <Box sx={{ textAlign: "center", mb: 6, mt: 10 }}>
                <Typography variant='h5' sx={{ color: '#2c4964', fontSize: '34px', fontWeight: 400 }}>
                    Gallery
                </Typography>

                <Typography
                    variant='body2'
                    sx={{ maxWidth: "600px", mx: "auto", mt: 1, color: "text.secondary" }}
                >
                    Showcasing our modern hospital and compassionate healthcare services
                </Typography>
            </Box>

            <ImageList sx={{
                width: '100%', height: 'auto', gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",   // mobile
                    sm: "repeat(2, 1fr)",   // tablet
                    md: "repeat(4, 1fr)"    // desktop
                }
            }} cols={{ xs: 1, sm: 2, md: 4 }} rowHeight='auto'>
                {itemData.slice(0, 8).map((item) => (
                    <ImageListItem key={item.img} sx={{
                            '&:hover img': { transform: 'scale(1.2)', transition: 'all 0.4s ease' },
                            overflow: 'hidden',
                        }}>
                        <img
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    {
        img: gallery1,
        // title: 'Breakfast',
    },
    {
        img: gallery2,
        // title: 'Burger',
    },
    {
        img: gallery3,
        // title: 'Camera',
    },
    {
        img: gallery4,
        // title: 'Coffee',
    },
    {
        img: gallery5,
        // title: 'Hats',
    },
    {
        img: gallery6,
        // title: 'Honey',
    },
    {
        img: gallery7,
        // title: 'Basketball',
    },
    {
        img: gallery8,
        // title: 'Fern',
    },
];