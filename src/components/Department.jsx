import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import dep1 from '../assets/img/departments-1.jpg';
import dep2 from '../assets/img/departments-2.jpg';
import dep3 from '../assets/img/departments-3.jpg';
import dep4 from '../assets/img/departments-4.jpg';
import dep5 from '../assets/img/departments-5.jpg';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // check if mobile

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Box
            sx={{
                py: 0,
                px: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Heading + Description */}
            <Box sx={{ textAlign: "center", mb: 6, mt: 4 }}>
                <Typography variant='h5' sx={{ color: '#2c4964', fontSize: '34px', fontWeight: 400 }}>
                    Departments
                </Typography>

                <Typography
                    variant='body2'
                    sx={{ maxWidth: "600px", mx: "auto", mt: 1, color: "text.secondary" }}
                >
                    Comprehensive medical departments designed to meet every healthcare need.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    py: { xs: 4, md: 4 },
                    maxWidth: '100%',
                    mx: 'auto',
                    width: '100%',
                }}
            >

                <Tabs
                    // orientation="vertical"
                    orientation={isMobile ? 'horizontal' : 'vertical'}
                    value={value}
                    onChange={handleChange}
                    variant={isMobile ? "scrollable" : "standard"}
                    scrollButtons={isMobile ? "auto" : false}      // auto scroll buttons
                    allowScrollButtonsMobile
                    aria-label="Vertical departments tabs"
                    sx={{
                        borderRight: { md: 1 },
                        borderColor: 'divider',
                        width: { xs: '100%', md: '200px' },
                        py: 2,
                        pl: { xs: 0, md: 0 },
                        alignItems: { xs: 'center', md: 'flex-start' },
                        justifyContent: { xs: 'center', md: 'flex-start' },
                    }}
                >
                    <Tab label="Cardiology" {...a11yProps(0)} />
                    <Tab label="Neurology" {...a11yProps(1)} />
                    <Tab label="Hepatology" {...a11yProps(2)} />
                    <Tab label="Pediatrics" {...a11yProps(3)} />
                    <Tab label="Eye Care" {...a11yProps(4)} />
                </Tabs>

                <Box sx={{
                    flex: 1,
                    ml: { xs: 0, md: 6 },
                    p: { xs: 2, md: 0 }
                }}>

                    <TabPanel value={value} index={0}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: "flex-start",
                                gap: 4,
                                pt: 4,
                            }}
                        >

                            <Box sx={{ flex: 1, width: "100%" }}>
                                <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>Cardiology</Typography>
                                <Typography variant="body1">
                                    Our Cardiology Department provides advanced care for all heart-related conditions, offering accurate diagnosis, personalized treatment, and continuous patient support. With modern technology and experienced cardiologists, we ensure safe and effective heart care for every patient.  </Typography>
                            </Box>

                            <Box sx={{ textAlign: "center" }}>
                                <Box
                                    component="img"
                                    src={dep1}
                                    alt="Cardiology department"
                                    sx={{
                                        width: { xs: "100%", md: 250 },
                                        maxWidth: "100%",
                                        height: "auto",
                                        display: "block",
                                        mx: { xs: 0, md: "auto" }
                                    }}
                                />
                            </Box>
                        </Box>

                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: "flex-start",
                                gap: 4,
                                pt: 4,
                            }}
                        >

                            <Box sx={{ flex: 1, width: "100%" }}>
                                <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>Neurology</Typography>
                                <Typography variant="body1">
                                    Our Neurology Department provides specialized care for disorders of the brain, spine, and nervous system. With expert neurologists and modern diagnostic tools, we deliver accurate evaluation and effective treatment for neurological conditions.
                                </Typography>
                            </Box>

                            <Box sx={{ textAlign: "center" }}>
                                <Box
                                    component="img"
                                    src={dep2}
                                    alt="Neurology department"
                                    sx={{
                                        width: { xs: "100%", md: 250 },
                                        maxWidth: "100%",
                                        height: "auto",
                                        display: "block",
                                        mx: { xs: 0, md: "auto" }
                                    }}
                                />
                            </Box>
                        </Box>

                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: "flex-start",
                                gap: 4,
                                pt: 4,
                            }}
                        >

                            <Box sx={{ flex: 1, width: "100%" }}>
                                <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>Hepatology</Typography>
                                <Typography variant="body1">
                                    Our Hepatology Department specializes in diagnosing and treating liver, gallbladder, and pancreas-related diseases. We provide expert care using advanced testing and personalized treatment plans.
                                </Typography>
                            </Box>

                            <Box sx={{ textAlign: "center" }}>
                                <Box
                                    component="img"
                                    src={dep3}
                                    alt="Hepatology department"
                                    sx={{
                                        width: { xs: "100%", md: 250 },
                                        maxWidth: "100%",
                                        height: "auto",
                                        display: "block",
                                        mx: { xs: 0, md: "auto" }
                                    }}
                                />
                            </Box>
                        </Box>

                    </TabPanel>

                    <TabPanel value={value} index={3}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: "flex-start",
                                gap: 4,
                                pt: 4,
                            }}
                        >

                            <Box sx={{ flex: 1, width: "100%" }}>
                                <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>Pediatrics</Typography>
                                <Typography variant="body1">
                                    The Pediatrics Department is dedicated to the health and well-being of newborns, children, and teenagers. Our pediatric specialists treat a wide range of conditions, including infections, allergies, asthma, growth issues, nutritional problems, and childhood chronic illnesses.
                                </Typography>
                            </Box>

                            <Box sx={{ textAlign: "center" }}>
                                <Box
                                    component="img"
                                    src={dep4}
                                    alt="Pediatrics department"
                                    sx={{
                                        width: { xs: "100%", md: 250 },
                                        maxWidth: "100%",
                                        height: "auto",
                                        display: "block",
                                        mx: { xs: 0, md: "auto" }
                                    }}
                                />
                            </Box>
                        </Box>

                    </TabPanel>

                    <TabPanel value={value} index={4}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: "flex-start",
                                gap: 4,
                                pt: 4,
                            }}
                        >

                            <Box sx={{ flex: 1, width: "100%" }}>
                                <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>Eye Care</Typography>
                                <Typography variant="body1">
                                    The Eye Care Department provides specialized services for vision problems and eye diseases. Our eye specialists diagnose and treat conditions such as cataracts, glaucoma, refractive errors, dry eyes, infections, and retinal disorders.
                                </Typography>
                            </Box>

                            <Box sx={{ textAlign: "center" }}>
                                <Box
                                    component="img"
                                    src={dep5}
                                    alt="Eye Care department"
                                    sx={{
                                        width: { xs: "100%", md: 250 },
                                        maxWidth: "100%",
                                        height: "auto",
                                        display: "block",
                                        mx: { xs: 0, md: "auto" }
                                    }}
                                />
                            </Box>
                        </Box>

                    </TabPanel>

                    <TabPanel value={value} index={5}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: "flex-start",
                                gap: 4,
                                pt: 4,
                            }}
                        >

                            <Box sx={{ flex: 1, width: "100%" }}>
                                <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>Cardiology</Typography>
                                <Typography variant="body1">
                                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                </Typography>
                            </Box>

                            <Box sx={{ textAlign: "center" }}>
                                <Box
                                    component="img"
                                    src={dep1}
                                    alt="Cardiology department"
                                    sx={{
                                        width: { xs: "100%", md: 250 },
                                        maxWidth: "100%",
                                        height: "auto",
                                        display: "block",
                                        mx: { xs: 0, md: "auto" }
                                    }}
                                />
                            </Box>
                        </Box>

                    </TabPanel>
                    {/* 
                    <TabPanel value={value} index={1}>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3,
                                flexDirection: { xs: 'column', md: 'row' },
                                alignItems: 'flex-start',
                                pt: 4,
                            }}
                        >
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>Neurology</Typography>
                                <Typography variant="body1">
                                    Qui laudantium consequatur laborum, eaque fugiat aut sapiente consectetur. Molestiae inventore et, esse id, sit pariatur repudiandae. Quae non reiciendis iste sed, esse id, sit pariatur repudiandae.
                                </Typography>
                            </Box>

                            <Box sx={{ flex: 1 }}>
                                <img src={dep2} style={{ width: "100%" }} alt="Neurology department" />
                            </Box>
                        </Box>
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3,
                                flexDirection: { xs: 'column', md: 'row' },
                                alignItems: 'flex-start',
                                pt: 4,
                            }}
                        >
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>Hepatology</Typography>
                                <Typography variant="body1">
                                    Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae
                                </Typography>
                            </Box>

                            <Box sx={{ flex: 1 }}>
                                <img src={dep3} style={{ width: "100%" }} alt="Hepatology department" />
                            </Box>
                        </Box>
                    </TabPanel>

                    <TabPanel value={value} index={3}>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3,
                                flexDirection: { xs: 'column', md: 'row' },
                                alignItems: 'flex-start',
                                pt: 4,
                            }}
                        >
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>Pediatrics</Typography>
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Typography>
                            </Box>

                            <Box sx={{ flex: 1 }}>
                                <img src={dep4} style={{ width: "100%" }} alt="Pediatrics department" />
                            </Box>
                        </Box>
                    </TabPanel>

                    <TabPanel value={value} index={4}>
                        <Box sx={{ p: 4, pt: 4 }}>
                            <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>Eye Care</Typography>
                            <Typography variant="body1">
                                Omnis blanditiis saepe eos autem, qui harum et commodi. Saepe omnis accusamus placeat. Repudiandae et eaque. Omnis blanditiis saepe eos autem.
                            </Typography>
                        </Box>
                    </TabPanel> */}
                </Box>
            </Box>
        </Box>
    );
}