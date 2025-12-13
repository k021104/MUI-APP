import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
    accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderRadius: '12px',
    marginBottom: theme.spacing(2),
    border: `1px solid #b7dbfaff`,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    overflow: 'hidden',
    // '&:not(:last-child)': {
    //     borderBottom: 0,
    // },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
        transform: 'rotate(90deg)',
    },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const question = {
    backgroundColor: '#fff',
    color: '#2c4964',
    p: 1,
    "&:hover": {
        color: "#1977cc",
    },
};

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box sx={{ backgroundColor: '#f1f7fd', py: 8, mt: 10 }}>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md" >

                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Typography variant='h5' sx={{ color: '#2c4964', fontSize: '34px', fontWeight: 400 }}>
                            Frequently Asked Questions
                        </Typography>

                        <Typography
                            variant='body2'
                            sx={{ maxWidth: "600px", mx: "auto", mt: 1, color: "text.secondary" }}
                        >
                            Quick and convenient appointment booking for all your medical needs.
                        </Typography>
                    </Box>

                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{
                        "& .MuiTypography-root": {
                            fontSize: "19px",
                            lineHeight: 1.6,
                            fontWeight: 550,
                        }
                    }}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={question}>
                            <Typography component="span">What services does your hospital provide?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                We offer a full range of medical services including consultations, diagnostics, emergency care, surgeries, and specialized treatments.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{
                        "& .MuiTypography-root": {
                            fontSize: "19px",
                            lineHeight: 1.6,
                            fontWeight: 550,
                        }
                    }}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" sx={question}>
                            <Typography component="span">How can I book an appointment?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You can book online through our appointment form or call our helpdesk for quick assistance.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{
                        "& .MuiTypography-root": {
                            fontSize: "19px",
                            lineHeight: 1.6,
                            fontWeight: 550,
                        }
                    }}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" sx={question}>
                            <Typography component="span">Do you offer emergency services?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, our emergency department operates 24/7 with experienced doctors and fully equipped facilities.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{
                        "& .MuiTypography-root": {
                            fontSize: "19px",
                            lineHeight: 1.6,
                            fontWeight: 550,
                        }
                    }}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" sx={question}>
                            <Typography component="span">What documents should I bring for my visit?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Please carry your ID proof, previous medical reports, prescriptions, and insurance details if applicable.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{
                        "& .MuiTypography-root": {
                            fontSize: "19px",
                            lineHeight: 1.6,
                            fontWeight: 550,
                        }
                    }}>
                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" sx={question}>
                            <Typography component="span">Are online consultations available?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, we provide secure video consultations for general and specialist care.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={{
                        "& .MuiTypography-root": {
                            fontSize: "19px",
                            lineHeight: 1.6,
                            fontWeight: 550,
                        }
                    }}>
                        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header" sx={question}>
                            <Typography component="span">How can I book an emergency appointment quickly?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You can call our 24/7 emergency helpline or use the quick-book option on our website for immediate assistance.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </React.Fragment>
        </Box>
    );
}