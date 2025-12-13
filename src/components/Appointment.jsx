// Quick and convenient appointment booking for all your medical needs.
import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



// const handleChange = (event) => {
//     setAge(event.target.value);
// };

const Appointment = () => {

    const [department, setDepartment] = useState('');
    const [doctor, setDoctor] = useState('');

    return (
        <Box
            sx={{
                py: 10,
                px: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Heading + Description */}
            <Box sx={{ textAlign: "center", mb: 6, mt: 6 }}>
                <Typography variant='h5' sx={{ color: '#2c4964', fontSize: '34px', fontWeight: 400 }}>
                    Appointment
                </Typography>

                <Typography
                    variant='body2'
                    sx={{ maxWidth: "600px", mx: "auto", mt: 1, color: "text.secondary" }}
                >
                    Quick and convenient appointment booking for all your medical needs.
                </Typography>
            </Box>

            <Box sx={{ maxWidth: "1150px", width: "100%", mx: "auto" }}
            // sx={{
            //     display: "flex",
            //     justifyContent: "center",
            //     gap: 4,
            //     flexWrap: "wrap",
            //     width: '100%',
            // }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    {/* Name, Email, Phone */}
                    <TextField id="outlined-basic" label="Your Name" variant="outlined" sx={{ flex: { xs: '100%', sm: 1 }, m: 1 }} />
                    <TextField id="outlined-basic" label="Your Email" variant="outlined" sx={{ flex: { xs: '100%', sm: 1 }, m: 1 }} />
                    <TextField id="outlined-basic" label="Your Phone" variant="outlined" sx={{ flex: { xs: '100%', sm: 1 }, m: 1 }} />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    {/* Date, Time */}
                    <FormControl sx={{ flex: { xs: '100%', sm: 1 }, m: 1 }}>
                        <InputLabel id="department-label">Department</InputLabel>
                        <Select
                            labelId="department-label"
                            // id="demo-simple-select-autowidth"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            autoWidth
                            label="department"
                        >
                            <MenuItem value="Cardiology">Cardiology</MenuItem>
                            <MenuItem value="Neurology">Neurology</MenuItem>
                            <MenuItem value="Orthopedics">Orthopedics</MenuItem>
                            <MenuItem value="Pediatrics">Pediatrics</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ flex: { xs: '100%', sm: 1 }, m: 1 }}>
                        <InputLabel id="doctor-label">Doctor</InputLabel>
                        <Select
                            labelId="doctor-label"
                            // id="demo-simple-select-autowidth"
                            value={doctor}
                            onChange={(e) => setDoctor(e.target.value)}
                            autoWidth
                            label="doctor"
                        >
                            {/* <MenuItem value="Dr. Smith">Cardiology</MenuItem> */}
                            <MenuItem value="Dr. Shah">Neurology</MenuItem>
                            <MenuItem value="Dr. Patel">Orthopedics</MenuItem>
                            <MenuItem value="Dr. Mehta">Pediatrics</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField sx={{ flex: { xs: '100%', sm: 1 }, m: 1 }}
                        // label="Select Date"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </Box>

                <Box sx={{ display: "flex" }}>
                    {/* Message + Button */}
                    <TextField sx={{ flexFlow: 1, m: 1 ,mt: { xs: 1}  }}
                        id="outlined-textarea"
                        label="Message"
                        placeholder="Message (Optional)"
                        rows={4}
                        multiline
                        fullWidth
                    />
                </Box>
            </Box>

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
                Make an Appointment
            </Button>

        </Box>

    )
}

export default Appointment